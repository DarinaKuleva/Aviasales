import styled from 'styled-components'
import plane from '../../assets/plane.svg'
import { LoaderSizes } from '../../models'

interface Props {
  size: LoaderSizes
}

export const LoaderContainer = styled.div<Props>`
  margin-top: 200px;
  position: relative;
  
  ${({ size }) => size === LoaderSizes.Small && `
    margin-top: 30px;
  `}
`

export const LoaderDesc = styled.div<Props>`
  text-align: center;
  font-size: 17px;
  line-height: 20px;
  color: #4A4A4A;
  
  ${({ size }) => size === LoaderSizes.Small && `
    font-size: 13px;
  `}
`

export const LoaderLarge = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: relative;
  animation: loader 0.9s 0.35s ease alternate infinite;
  margin: 0 auto;
  
  &:after, &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation: loader 0.9s ease alternate infinite;
  }
  
  &:before {
    left: -20px;
    animation-delay: 0.2s;
  }
  
  &:after {
    right: -20px;
    animation-delay: 0.5s;
  }
  
  @keyframes loader {
    0% {
      box-shadow: 0 15px 0 -15px #43a8fa;
    }
    100% {
      box-shadow: 0 15px 0 #43a8fa;
    }
  }
`

export const LoaderSmall = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  position: relative;
  animation: loader 0.9s 0.35s ease alternate infinite;
  margin: -5px auto 0 auto;
  
  &:after, &:before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    animation: loader 0.9s ease alternate infinite;
  }
  
  &:before {
    left: -10px;
    animation-delay: 0.2s;
  }
  
  &:after {
    right: -10px;
    animation-delay: 0.5s;
  }
  
  @keyframes loader {
    0% {
      box-shadow: 0 7px 0 -15px #43a8fa;
    }
    100% {
      box-shadow: 0 7px 0 #43a8fa;
    }
  }
`

export const Plane = styled.div<Props>`
  position: absolute;
  animation: move 5s infinite linear;
  background: url(${plane}) center no-repeat;
  
  ${({ size }) => size === LoaderSizes.Small && `
    width: 50px;
    height: 51px;
    top: 55px;
  `}
  
  ${({ size }) => size === LoaderSizes.Large && `
    width: 100px;
    height: 102px;
  `}
  
  @keyframes move {
    0% {
      left: 30%;
      bottom: -140px;
      animation-timing-function: ease-in;
      transform: rotate(30deg);
    }
    100% {
      left: 70%;
      bottom: -140px;
      animation-timing-function: ease-out;
      transform: rotate(30deg);
    }
  }
`
