import * as React from 'react'
import { ErrorMessage } from './styled'

const ErrorPage: React.FC = () => {
  return (
    <ErrorMessage>
      Не удалось загрузить билеты. Попробуйте позже.
    </ErrorMessage>
  )
}

export default ErrorPage
