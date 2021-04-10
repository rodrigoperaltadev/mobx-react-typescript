import { useContext } from 'react'
import { StoreContext } from './storeContext'

const useStore = () => {
  return useContext(StoreContext)
}

export { useStore }
