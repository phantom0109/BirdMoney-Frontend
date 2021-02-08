import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Egg } from '../../egg'

export interface EggContext {
  egg?: typeof Egg
}

export const Context = createContext<EggContext>({
  egg: undefined,
})

declare global {
  interface Window {
    eggsauce: any
  }
}

const EggProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [egg, setEgg] = useState<any>()

  // @ts-ignore
  window.egg = egg
  // @ts-ignore
  window.eth = ethereum

  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const eggLib = new Egg(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setEgg(eggLib)
      window.eggsauce = eggLib
    }
  }, [ethereum])

  return <Context.Provider value={{ egg: egg }}>{children}</Context.Provider>
}

export default EggProvider
