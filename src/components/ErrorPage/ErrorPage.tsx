import * as React from 'react'
import * as Styled from './styled'

const ErrorPage: React.FC = () => {
  return (
    <Styled.Error>
      Не удалось загрузить билеты. Попробуйте позже.
    </Styled.Error>
  )
}

export default ErrorPage
