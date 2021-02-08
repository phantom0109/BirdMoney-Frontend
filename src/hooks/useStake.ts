import { useCallback } from 'react'

import useEgg from './useEgg'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../egg/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const egg = useEgg()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(egg),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, egg],
  )

  return { onStake: handleStake }
}

export default useStake
