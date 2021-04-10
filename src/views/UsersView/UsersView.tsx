import { observer } from 'mobx-react-lite'
import React, { FC, FormEvent, useState } from 'react'
import CardsList from '../../components/CardsList'
import CardUser from '../../components/CardUser'

import { Button, Form } from '../../components/common'
import Input from '../../components/common/Input'
import { createUser } from '../../helpers'
import { useStore } from '../../store/helpers/useStore'

const UsersView: FC = () => {
  const { dataStore: store } = useStore()

  const [name, setName] = useState<string>('')

  const resetForm = () => setName('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const user = createUser(name)
    store.userStore.addUser(user)
    resetForm()
  }

  return (
    <>
      <CardsList title="Users">
        {store.userStore.users.length ? (
          store.userStore.users.map(user => (
            <CardUser key={user.id.toString()} name={user.name} userId={user.id} />
          ))
        ) : (
          <span>There are not users</span>
        )}
      </CardsList>
      <CardsList title="Todos"></CardsList>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Username"
          value={name}
          onChange={(event: FormEvent<HTMLInputElement>) => setName(event.currentTarget.value)}
        />
        <Button title="Add" />
      </Form>
    </>
  )
}

export default observer(UsersView)
