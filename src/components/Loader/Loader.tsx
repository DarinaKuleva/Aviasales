import * as React from 'react'
import { LoaderSizes } from '../../models'
import * as Styled from './styled'

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
