import { observer } from 'mobx-react-lite'
import React, { FC, FormEvent, useState } from 'react'
import CardsList from '../../components/CardsList'
import CardTask from '../../components/CardTask'
import { Button, Form } from '../../components/common'
import Input from '../../components/common/Input'
import { createTodo } from '../../helpers'
import { useStore } from '../../store/helpers/useStore'

const TasksView: FC = () => {
  const { dataStore: store } = useStore()

  const [descriptionTodo, setDescriptionTodo] = useState<string>('')

  const resetForm = () => setDescriptionTodo('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const todo = createTodo(descriptionTodo, 1)
    store.todoStore.addTodo(todo)
    resetForm()
  }

  return (
    <>
      <CardsList title="Complete">
        {store.todoStore.todosCompleted.length ? (
          store.todoStore.todosCompleted.map(todo => (
            <CardTask key={todo.id.toString()} todo={todo} />
          ))
        ) : (
          <span>There are not Tasks</span>
        )}
      </CardsList>
      <CardsList title="Incomplete">
        {store.todoStore.todosIncompleted.length ? (
          store.todoStore.todosIncompleted.map(todo => (
            <CardTask key={todo.id.toString()} todo={todo} />
          ))
        ) : (
          <span>There are not Tasks</span>
        )}
      </CardsList>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Description"
          value={descriptionTodo}
          onChange={(event: FormEvent<HTMLInputElement>) =>
            setDescriptionTodo(event.currentTarget.value)
          }
        />
        <Button title="Add" submit></Button>
      </Form>
    </>
  )
}

export default observer(TasksView)
