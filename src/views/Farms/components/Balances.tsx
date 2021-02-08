import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import useAllEarnings from '../../../hooks/useAllEarnings'
import useAllStakedValue from '../../../hooks/useAllStakedValue'
import useFarms from '../../../hooks/useFarms'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useEgg from '../../../hooks/useEgg'
import { getEggAddress, getEggSupply } from '../../../egg/utils'
import { getBalanceNumber } from '../../../utils/formatBalance'

const PendingRewards: React.FC = () => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [scale, setScale] = useState(1)

  const allEarnings = useAllEarnings()
  let sumEarning = 0
  for (let earning of allEarnings) {
    sumEarning += new BigNumber(earning)
      .div(new BigNumber(10).pow(18))
      .toNumber()
  }

  const [farms] = useFarms()
  const allStakedValue = useAllStakedValue()

  if (allStakedValue && allStakedValue.length) {
    const sumWeth = farms.reduce(
      (c, { id }, i) => c + (allStakedValue[i].totalWethValue.toNumber() || 0),
      0,
    )
  }

  useEffect(() => {
    setStart(end)
    setEnd(sumEarning)
  }, [sumEarning])

  return (
    <span
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'right bottom',
        transition: 'transform 0.5s',
        display: 'inline-block',
      }}
    >
      <CountUp
        start={start}
        end={end}
        decimals={end < 0 ? 4 : end > 1e5 ? 0 : 3}
        duration={1}
        onStart={() => {
          setScale(1.25)
          setTimeout(() => setScale(1), 600)
        }}
        separator=","
      />
    </span>
  )
}

const Balances: React.FC = () => {
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const egg = useEgg()
  const eggBalance = useTokenBalance(getEggAddress(egg))
  const { account, ethereum }: { account: any; ethereum: any } = useWallet()

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getEggSupply(egg)
      setTotalSupply(supply)
    }
    if (egg) {
      fetchTotalSupply()
    }
  }, [egg, setTotalSupply])

  return (
    
    <TotalBalanceSpan>
      <div>
        Total EGG Supply: <span style={{color:'#ce6667'}}>{totalSupply ? getBalanceNumber(totalSupply) : 'Locked'}</span>|
      </div>  
        &nbsp;
      <div>
        Reward Per Block: <span style={{color:'#ce6667'}}>0.5 EGGS</span> |
      </div>
        &nbsp;
        <div>
         BIRD Balance: <span style={{color:'#ce6667'}}>{!!account ? getBalanceNumber(eggBalance) : 'Locked'}</span>
        </div>    
    </TotalBalanceSpan>
    
  )
}
const TotalBalanceSpan = styled.span`
    position: absolute;
    width: 993px;
    height: 23px;
    left: 346px;
    top: 153px;
    display:flex;
    font-family: brown;
    font-style: normal;
   font-weight: bold;
    font-size: 19px;
    color: #183149;
`
export default Balances
