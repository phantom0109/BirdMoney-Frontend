import React from 'react'
import styled from 'styled-components'


interface CardIconProps {
  children?: React.ReactNode,
}

const CardIcon: React.FC<CardIconProps> = ({ children }) => (
  <StyledIcon>
    <StyledCardIcon>
      {children}
    </StyledCardIcon>
    
 
  </StyledIcon>
  
)

const StyledIcon = styled.div`
display:flex;
flex-direction: column;
width:100%;
height:50%;
`
const StyledCardIcon = styled.div`
  background-color: #F4F5F7;
  font-size: 36px;
  height: 50.07px;
  width: 50.07px;
  border-radius: 24.3762px;
  align-items: center;
  display: flex;
  justify-content: center;
  box-shadow:  0px 0px 0px ${props => props.theme.color.grey[300]},
  inset -6px -6px 12px ${props => props.theme.color.grey[100]};
  margin: 0 auto ${props => props.theme.spacing[3]}px;
`


export default CardIcon