import styled from "styled-components";

export const Header = styled.header`
  // background-color: #282c34;
  min-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: white;
`;

export const Body = styled.body`
  // align-items: center;
  // // background-color: #282c34;
  // color: black;
  // display: flex;
  // flex-direction: column;
  // font-size: calc(10px + 2vmin);
  justify-content: center;
  // min-height: calc(100vh - 70px);
`;

export const Image = styled.img`
  height: 40vmin;
  margin-bottom: 16px;
  pointer-events: none;
`;

export const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: #61dafb;
  margin-top: 10px;
`;

export const Button = styled.button`
  // background-color: white;
  // border: none;
  // border-radius: 8px;
  
  // color: #282c34;
  cursor: pointer;
  // font-size: 16px;
  // text-align: center;
  // text-decoration: none;
  // margin: 0px 20px;
  // padding: 12px 24px;

  // background-color: rgba(248, 28, 83, 0.04);
  // border-color: #F7DEDB;
  // border-radius: 13.2495px 13.2495px 13.2495px 0px;

  /* connect-button */

/* Auto Layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10.688px 19.2383px;


background: rgba(248, 28, 83, 0.04);
border: 1.0688px solid #F7DEDB;
box-sizing: border-box;
border-radius: 13.2495px 13.2495px 13.2495px 0px;


/* Connect wallet */


font-family: Averta;
font-style: normal;
font-weight: 600;
font-size: 11.2138px;
line-height: 14px;

color: #183149;


/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 10.688px 0px;



  

  ${props => props.hidden && "hidden"}
  
  :focus {
    border: none;
    outline: none;
  }
`;
