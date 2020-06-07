import * as React from 'react'
import * as Styled from './styled'
import { LoaderSizes } from '../../models'

interface Props {
  size: LoaderSizes
}

const Loader: React.FC<Props> = ({size}) => {
  return (
    <Styled.LoaderContainer size={size}>
      <Styled.LoaderDesc size={size}>
        Loading
        {size === LoaderSizes.Large
          ? <Styled.LoaderLarge/>
          : <Styled.LoaderSmall/>
        }
      </Styled.LoaderDesc>
      <Styled.Plane size={size}/>
    </Styled.LoaderContainer>
  )
}

export default Loader
