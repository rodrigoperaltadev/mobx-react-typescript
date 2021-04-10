import React, { FC } from 'react'

import './board.css'

type BoardProps = {
  title: string
}

const Board: FC<BoardProps> = ({ children, title }) => {
  return (
    <div className="board-container">
      <BoardHeader title={title} />
      <BoardContent>{children}</BoardContent>
    </div>
  )
}

const BoardHeader: FC<BoardProps> = ({ title }) => {
  return (
    <div className="board-header">
      <span className="board-header-title">{title}</span>
    </div>
  )
}

const BoardContent: FC = ({ children }) => {
  return <div className="board-content">{children}</div>
}

export default Board
