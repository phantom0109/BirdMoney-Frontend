import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../egg/utils'
import useEgg from './useEgg'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const egg = useEgg()
  const farms = getFarms(egg)
  const masterChefContract = getMasterChefContract(egg)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, egg])

  useEffect(() => {
    if (account && masterChefContract && egg) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, egg])

  return balances
}

export default useAllEarnings
