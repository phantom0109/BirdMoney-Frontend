import { useCallback } from 'react'

import useEgg from './useEgg'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../egg/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const egg = useEgg()
  const masterChefContract = getMasterChefContract(egg)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, egg])

  return { onReward: handleReward }
}

export default useReward
