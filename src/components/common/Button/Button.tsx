import React, { FC } from 'react'

import './button.css'

type ButtonProps = {
  title: string
  onClick?: () => void
  submit?: boolean
}

const Button: FC<ButtonProps> = ({ title, submit, onClick }) => {
  return (
    <button className="button-container" onClick={onClick} type={submit ? 'submit' : 'button'}>
      <span>{title}</span>
    </button>
  )
}

export default Button
