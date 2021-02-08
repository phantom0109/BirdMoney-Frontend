import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import Logo from '../Logo'


const LeftBar: React.FC = () => {

    return(
        <StyledLeftBar>
            
                <StyledLogoWrapper>
                    <Logo/>
                </StyledLogoWrapper>
                
                <p>Home</p>
                <p>Dashboard</p>
                <p>Farm</p>
            
        </StyledLeftBar>
    )
}

const StyledLeftBar = styled.div`
display:flex;
background-color: #fffff;
flex-direction: column;
`

const StyledLogoWrapper = styled.div`
  width: 50px;
  @media (max-width: 400px) {
    width: auto;
    height:auto;
  }
`
export default LeftBar;