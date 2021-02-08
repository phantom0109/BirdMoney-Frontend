import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../egg/utils'
import useEgg from './useEgg'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const egg = useEgg()
  const masterChefContract = getMasterChefContract(egg)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, egg])

  useEffect(() => {
    if (account && egg) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, egg])

  return balance
}

export default useStakedBalance
