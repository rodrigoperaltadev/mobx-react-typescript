import { observer } from 'mobx-react-lite'
import React, { FC, FormEvent, useState } from 'react'
import { Todo } from '../../store/dataStore/interfaces/todo'
import { useStore } from '../../store/helpers/useStore'
import { Button, Card } from '../common'
import { CardButtonsGroup, CardData } from '../common/Card'
import Input from '../common/Input'

type CardTaskProps = {
  todo: Todo
}

const CardTask: FC<CardTaskProps> = observer(({ todo }) => {
  const { dataStore: store } = useStore()

  const [editing, setEditing] = useState(false)
  const [descriptionTask, setDescriptionTask] = useState(todo.description)

  const onSaveTaskClick = () => {
    store.todoStore.update(descriptionTask, todo.id)
    setEditing(false)
  }
  const onDeleteClick = () => {
    store.todoStore.removeTodo(todo.id)
  }

  return (
    <Card>
      <CardData>
        {editing ? (
          <Input
            placeholder="Task"
            value={descriptionTask}
            onChange={(e: FormEvent<HTMLInputElement>) => setDescriptionTask(e.currentTarget.value)}
          />
        ) : (
          <span>Todo: {todo.description}</span>
        )}

        <span>User ID: {todo.userId}</span>
      </CardData>
      <CardButtonsGroup>
        {editing ? (
          <Button title="Save" onClick={onSaveTaskClick} />
        ) : (
          <>
            <Button
              title={todo.completed ? 'Incomplete' : 'Complete  '}
              onClick={() => todo.toggleCompleted()}
            />
            <Button title="Edit" onClick={() => setEditing(true)} />
            <Button title="Delete" onClick={onDeleteClick} />
          </>
        )}
      </CardButtonsGroup>
    </Card>
  )
})

export default CardTask
