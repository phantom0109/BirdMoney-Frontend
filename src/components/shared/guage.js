import React, { useState, useEffect } from 'react';
import {
	Chart,
	Point,
	Area,
	Annotation,
	Axis,
	Coordinate,
	registerShape,
} from 'bizcharts';

// 自定义Shape 部分
registerShape('point', 'pointer', {
	draw(cfg, container) {
		const group = container.addGroup();
		const center = this.parsePoint({ x: 0, y: 0 }); // 获取极坐标系下画布中心点
		const start = this.parsePoint({ x: 0, y: 0.5 }); // 获取极坐标系下起始点
		// 绘制指针
		const line = group.addShape('line', {
			attrs: {
				x1: center.x,
				y1: center.y,
				x2: start.x,
				y2: start.y,
				stroke: cfg.color,
				lineWidth: 5,
				lineCap: 'round',
			},
		});
		group.addShape('circle', {
			attrs: {
				x: center.x,
				y: center.y,
				r: 9.75,
				stroke: cfg.color,
				lineWidth: 4.5,
				fill: '#fff',
			},
		});

		const angle1 = Math.atan((start.y - center.y) / (start.x - center.x));
		const angle = (Math.PI - 2 * angle1) * cfg.points[0].x;
		if (group.cfg.animable) {
			group.animate((ratio) => {
				group.resetMatrix();
				group.rotateAtPoint(center.x, center.y, angle * ratio);
			}, 300);
		} else {
			group.rotateAtPoint(center.x, center.y, angle);
		}

		return group;
	},
});



const Guage = (props) =>  {

    const rating = props.score
    const data = [{ value: rating }];

	return (
		<Chart
			height={400}
			data={data}
			padding={[0, 0, 30, 0]}
			scale={{
				value: {
					min: 0,
					max: 10,
					tickInterval: 1,
					// formatter: v => v * 100
				}
			}}
			autoFit
		>
			<Coordinate
				type="polar"
				radius={0.75}
				startAngle={(-12 / 10) * Math.PI}
				endAngle={(2 / 10) * Math.PI}
			/>
			<Axis name="1" />
			<Axis
				name="value"
				line={null}
				label={{
					offset: -36,
					style: {
						fontSize: 18,
						textAlign: 'center',
						textBaseline: 'middle',
					},
				}}
				subTickLine={{
					count: 4,
					length: -15,
				}}
				tickLine={{
					length: -24,
				}}
				grid={null}
			/>
			<Point
				position="value*1"
				color="#1890FF"
				shape="pointer"
				animate={false}
			/>
			<Annotation.Arc
				top={false}
				start={[0, 1]}
				end={[data[0].value, 1]}
				style={{
					stroke: '#CBCBCB',
					lineWidth: 18,
					lineDash: null,
				}}
			/>
			<Annotation.Arc
				start={[0, 1]}
				end={[data[0].value, 1]}
				style={{
					stroke: '#1890FF',
					lineWidth: 18,
					lineDash: null,
				}}
			/>
			<Annotation.Text
				position={['50%', '85%']}
				content={'Bird Rating'}
				style={{
					fontSize: 20,
					fill: '#545454',
					textAlign: 'center',
				}}
			/>
			<Annotation.Text
				position={['50%', '90%']}
				// content={`${(data[0].value * 100).toFixed()} %`}
				content={`${(data[0].value).toFixed(2)}`}
				style={{
					fontSize: 36,
					fill: '#545454',
					textAlign: 'center',
				}}
				offsetY={15}
			/>
		</Chart>
	)
}

export default Guage