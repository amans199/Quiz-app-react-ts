import styled from 'styled-components'

export const QuestionsWrapper = styled.div`
display:flex;
flex-direction: row;
text-align: center;
justify-content: space-between;
gap: 25px;
`

export const QuestionFont = styled.p`
font-size: 25px;
    font-weight: bold;
    letter-spacing: 1px;
color:#24243e;

`
export const QuestionCardStyles = styled.div`
background: #fff;
border-radius: 5px;
padding: 20px;
box-shadow: 0px 0px 6px 0px #000;
`

export const AnswerButton = styled.button`
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
    background-color: #24243e;
        color: #fff;
        &:hover {
			background:#0f0c29 ;
			color:#fff;
		}
}
`