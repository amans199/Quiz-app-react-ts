import styled, { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
    font-family: 'Roboto', sans-serif;
}

html {
    height:100%
}

body{
    background: #0f0c29;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    margin:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
}

a{
    color:#fff;
    text-decoration:underline;
}

button {
    border-radius: 2px;
	height: 40;
	padding: 10px 20px;
	transition: all 0.2s ease-in;
	-webkit-transition: all 0.2s ease-in;
	-moz-transition: all 0.2s ease-in;
	-ms-transition: all 0.2s ease-in;
	-o-transition: all 0.2s ease-in;
	box-sizing: border-box;
	font-weight: 600;
	font-size: 17px;
	line-height: 120%;
	display: flex;
	align-items: center;
	justify-content: center;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: transparent;
	border: 1px solid transparent;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	-ms-border-radius: 2px;
    -o-border-radius: 2px;
    cursor:pointer;
    background-color: #fff;
        color: #000;
        &:hover {
			background:green ;
			color:#fff;
		}
}
`

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
color:white;
text-align:center;
`