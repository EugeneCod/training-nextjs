'use client'

// import Error from "next/error"
import { FC } from "react"

interface IErrorWrapperProps {
  error: Error
}

const ErrorWrapper:FC<IErrorWrapperProps> = (props) => {
  const { error } = props;
  console.log(error);
  
  return (
    <h1>An error has occurred! {error.message}</h1>
  )
}

export default ErrorWrapper