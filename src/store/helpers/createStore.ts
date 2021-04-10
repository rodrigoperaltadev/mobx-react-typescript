import RootStore from '../RootStore'

const createStore = (): RootStore => {
  return new RootStore()
}

export { createStore }
