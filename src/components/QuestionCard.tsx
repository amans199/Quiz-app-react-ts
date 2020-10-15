import * as React from 'react';
import { AnswerObject } from '../App'
import { QuestionsWrapper, QuestionFont, QuestionCardStyles, AnswerButton } from './QuestionCard.styles'

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions }) => {
    // Hint ::  !!userAnswer === userAnswer ? true : false 
    return (
        <>
            <QuestionCardStyles>
                <QuestionFont>
                    Question: {questionNr} / {totalQuestions}
                </QuestionFont>
                <QuestionFont dangerouslySetInnerHTML={{ __html: question }}></QuestionFont>
                <QuestionsWrapper>
                    {answers.map((answer, index) => (
                        <AnswerButton key={index}>
                            <button disabled={!!userAnswer} onClick={callback} value={answer}>
                                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                            </button>
                        </AnswerButton>
                    ))}
                </QuestionsWrapper>
            </QuestionCardStyles >
        </>
    )
}
export default QuestionCard;