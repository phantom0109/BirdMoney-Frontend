import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StylesView>
        <StyledLink exact activeClassName="active" to="/">
          Dashboard
        </StyledLink>
        <StyledLink exact activeClassName="active" to="/farms">
          Farm 
        </StyledLink>
        <StyledLink exact activeClassName="active" to="/staking">
          Oracle Analytics
        </StyledLink>
        <StyledLink exact activeClassName="active" to="/goverance">
          Goverance
        </StyledLink>
      </StylesView>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  display: flex;
  margin-right:20px;
  font-family: Brown;
`
const StylesView = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-around;
  align-items: center;
  height:45vh;
  font-family: Brown;
  padding-left:5px;
  overflow:hidden;
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.black};
  font-family: Brown;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  padding-left:5px;
  display:flex;
  width:100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.black};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.black};
  font-weight: 700;
  display:flex;
  font-family: Brown;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  width:100%;
  justify-content: space-between;
  align-items: flex-start;
  
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
