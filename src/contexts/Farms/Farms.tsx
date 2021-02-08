import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useEgg from '../../hooks/useEgg'

import { getFarms } from '../../egg/utils'

import Context from './context'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const egg = useEgg()
  const { account } = useWallet()

  const farms = getFarms(egg)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
