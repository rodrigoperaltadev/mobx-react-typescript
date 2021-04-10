import React, { FC } from 'react'

import './card.css'

type CardProps = {
  children?: JSX.Element | JSX.Element[]
}

type CardDataProps = {
  children?: JSX.Element | JSX.Element[]
}

type CardButtonsGroupProps = {
  children?: JSX.Element | JSX.Element[]
}

const Card: FC<CardProps> = ({ children }) => {
  return <div className="card-container">{children}</div>
}

export const CardData: FC<CardDataProps> = ({ children }) => {
  return <div className="card-data">{children}</div>
}

export const CardButtonsGroup: FC<CardButtonsGroupProps> = ({ children }) => {
  return <div className="card-buttons-group">{children}</div>
}

export default Card
