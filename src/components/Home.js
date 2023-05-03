import React, { useState } from 'react'
import { v4 as uuid4 } from 'uuid'

import AddQuiz from './AddQuiz'
uuid4()
export default function Home() {
  const [quizzes, setQuizzes] = useState([])

  const addQuiz = (quiz) => {
    // spread operator makes a copy of currrent quiz and we're adding id,
    const newQuiz = [
      ...quizzes,
      {
        id: uuid4(),
        quiz: quiz,
        completed: false,
        status: 'active',
        isEditing: false,
      },
    ]
    setQuizzes(newQuiz)
    console.log(newQuiz)
  }
  //To pass the vale from TodoForm to the Home, we use props
  //html for page after login goes here
  return <AddQuiz addQuiz={addQuiz} />
}
