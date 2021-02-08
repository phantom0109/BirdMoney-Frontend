import { useCallback } from 'react'

import useEgg from './useEgg'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../egg/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const egg = useEgg()
  const masterChefContract = getMasterChefContract(egg)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, egg],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
