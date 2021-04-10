import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { Button, Navbar } from '../..'
import { useStore } from '../../../store/helpers/useStore'
import { Views } from '../../../store/uiStore/UIStore'

import './main.css'

type MainProps = {
  children?: JSX.Element | JSX.Element[]
}

const Main: FC<MainProps> = observer(({ children }) => {
  const { uiStore } = useStore()

  return (
    <div className="main-container">
      <Navbar>
        <Button title="Tasks" onClick={() => uiStore.setCurrentView(Views.TASKS)} />
        <Button title="Users" onClick={() => uiStore.setCurrentView(Views.USERS)} />
      </Navbar>
      {children ? children : 'No hay contenido'}
    </div>
  )
})

export default Main
