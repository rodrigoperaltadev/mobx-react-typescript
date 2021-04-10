import React, { FC, FormEvent } from 'react'

import './form.css'

type FormProps = {
  children?: JSX.Element | JSX.Element[]
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

type FormContentProps = {
  children?: JSX.Element | JSX.Element[]
}

const Form: FC<FormProps> = ({ onSubmit, children }) => {
  return (
    <form className="form-container" onSubmit={onSubmit}>
      <FormHeader />
      <FormContent>{children}</FormContent>
    </form>
  )
}

const FormHeader: FC<FormContentProps> = () => {
  return (
    <div className="form-header">
      <span>New</span>
    </div>
  )
}

const FormContent: FC = ({ children }) => {
  return <div className="form-content">{children}</div>
}

export default Form
