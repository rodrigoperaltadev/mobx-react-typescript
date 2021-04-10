import DataStore from './dataStore/DataStore'
import UIStore from './uiStore/UIStore'

export default class RootStore {
  dataStore: DataStore
  uiStore: UIStore

  constructor() {
    this.dataStore = new DataStore(this)
    this.uiStore = new UIStore(this)
  }
}
