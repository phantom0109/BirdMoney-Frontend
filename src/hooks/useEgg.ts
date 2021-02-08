import { useContext } from 'react'
import { Context } from '../contexts/EggProvider'

const useEgg = () => {
  const { egg: egg } = useContext(Context)
  return egg
}

export default useEgg
