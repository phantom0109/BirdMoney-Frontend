import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../egg/utils'
import useEgg from './useEgg'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const egg = useEgg()
  const masterChefContract = getMasterChefContract(egg)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, egg])

  useEffect(() => {
    if (account && masterChefContract && egg) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, egg])

  return balance
}

export default useEarnings
