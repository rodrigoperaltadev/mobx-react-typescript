import React, { FC } from 'react'

import { Header, Main } from './components/layouts'
import { Board } from './components'
import TasksView from './views/TasksView/TasksView'
import UsersView from './views/UsersView/UsersView'

import { useStore } from './store/helpers/useStore'

import { observer } from 'mobx-react-lite'

import './App.css'
import { Views } from './store/uiStore/UIStore'

const App: FC = observer(() => {
  const { uiStore } = useStore()

  const currentView = () => {
    if (uiStore.currentView === Views.TASKS) {
      return <TasksView />
    }
    if (uiStore.currentView === Views.USERS) {
      return <UsersView />
    }

    return null
  }

  return (
    <div className="App">
      <Header></Header>
      <Main>
        <Board title={uiStore.currentView}>{currentView()}</Board>
      </Main>
    </div>
  )
})

export default App
