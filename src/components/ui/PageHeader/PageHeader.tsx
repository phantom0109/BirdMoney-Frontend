import React from 'react'
import styled from 'styled-components'
import Balances from '../../../views/Farms/components/Balances';
import Container from '../Container'

interface PageHeaderProps {
  icon: React.ReactNode
  subtitle?: string
  title?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
  return (
    <StyledPaging>
      <StyledPageHeader>
      <BirdFarmSpan >Bird Farm</BirdFarmSpan><LiquiditySpan >Liquidity mining & Staking </LiquiditySpan>
      </StyledPageHeader>
      
    </StyledPaging>
    
  )
}

const StyledPaging = styled.div`
  width:80%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  
`
const BirdFarmSpan = styled.span`
position: absolute;
width: 192px;
height: 23px;
left: 343px;
top: 67px;
font-family: brown;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 23px;
color: #183149;`

const LiquiditySpan = styled.span`
position: absolute;
width: 282px;
height: 23px;
left: 346px;
top: 110px;
font-family: brown;
font-style: normal;
font-weight: normal;
font-size: 19px;
line-height: 23px;
color: #183149`
const StyledPageHeader = styled.div`
  align-items: flex-start;
  
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  padding-top: ${(props) => props.theme.spacing[6]}px;
  font-family: brown;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 23px;

`

const StyledSearch = styled.span`
position: absolute;
width: 353px;
height: 34px;
left: 825px;
top: 93px;

background: #FFFFFF;
border-radius: 5px;
`

const StyledTitle = styled.h1`
  font-family: 'Kaushan Script', sans-serif;
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`

const StyledSubtitle = styled.h3`
  color: ${(props) => props.theme.color.grey[400]};
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default PageHeader
