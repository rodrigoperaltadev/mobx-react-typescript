import React, { FC } from 'react'
import { useStore } from '../../store/helpers/useStore'

import { Button, Card } from '../common'
import { CardButtonsGroup, CardData } from '../common/Card'

type CardUserProps = {
  userId: number
  name: string
}

const CardUser: FC<CardUserProps> = ({ userId, name }) => {
  const { dataStore: store } = useStore()

  const onDeleteClick = () => {
    store.userStore.removeUser(userId)
  }

  return (
    <Card>
      <CardData>
        <span>User ID: {userId}</span>
        <span>Name: {name}</span>
      </CardData>
      <CardButtonsGroup>
        <Button title="Edit" />
        <Button title="Delete" onClick={onDeleteClick} />
      </CardButtonsGroup>
    </Card>
  )
}

export default CardUser
