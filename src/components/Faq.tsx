import { classnames } from 'classnames/tailwind'
import React, { FC } from 'react'
import { BodyText, BoldBodyText } from 'components/Text'

interface Question {
  question: string
  answer: string
}

type Props = {
  questions: Question[]
}

const container = classnames('my-6')
const questionContainer = classnames('mb-4')
const Faq: FC<Props> = ({ questions }) => {
  return (
    <div className={container}>
      {questions.map((q) => (
        <div className={questionContainer}>
          <BoldBodyText>{q.question}</BoldBodyText>
          <BodyText>{q.answer}</BodyText>
        </div>
      ))}
    </div>
  )
}

export default Faq
