import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bird from '../../assets/img/Group.png'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <img src={bird} height="32" style={{ marginRight: 5 }} />
      <StyledText>
        Bird.<MasterChefText>Money</MasterChefText>
      </StyledText>
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: centers;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`

const StyledText = styled.span`
  color: ${(props) => props.theme.color.black};
  font-family: brown;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-right:15px;
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-left: ${(props) => props.theme.spacing[2]}px;
  @media (max-width: 400px) {
    display: none;
  }
`

const MasterChefText = styled.span`
  font-family: brown;
`

export default Logo
