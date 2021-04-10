import React, { FC, FormEvent } from 'react'

import './input.css'

type InputProps = {
  placeholder: string
  value: string
  onChange: (event: FormEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({ placeholder, value, onChange }) => {
  return <input className="input" placeholder={placeholder} value={value} onChange={onChange} />
}

export default Input
