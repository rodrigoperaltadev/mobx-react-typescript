import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'

import './cardsList.css'

type CardListProps = {
  children?: JSX.Element | JSX.Element[]
  title: string
}

type CardsListHeaderProps = {
  title: string
}

const CardsList: FC<CardListProps> = observer(({ title, children }) => {
  return (
    <div className="card-list-container">
      <CardsListHeader title={title} />
      <CardsListContent>{children}</CardsListContent>
    </div>
  )
})

const CardsListHeader: FC<CardsListHeaderProps> = observer(({ title }) => {
  return (
    <div className="card-list-header">
      <span>{title}</span>
    </div>
  )
})

type CardsListContentProps = {
  children?: JSX.Element | JSX.Element[]
}

const CardsListContent: FC<CardsListContentProps> = observer(({ children }) => {
  return <div className="card-list-content">{children}</div>
})

export default CardsList
