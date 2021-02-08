import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

const StyledCard = styled.div`
  background: #FFFFFF;
  border: 1px solid rgba(235, 235, 237, 0.87);
  box-sizing: border-box;
  box-shadow: 0px 1px 5px #EBEFFF;
  border-radius: 12.4998px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex: 1;

  
`

export default Card
