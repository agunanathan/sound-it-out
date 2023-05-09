import React from 'react'
import { v4 as uuid4 } from 'uuid'

import AddQuiz from './AddQuiz'
uuid4()

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quizzes: [],
    }
  }

  addQuiz = (quiz, uid) => {
    // spread operator makes a copy of current quiz and we're adding id
    const updatedQuiz = [
      ...this.state.quizzes,
      {
        id: uid,
        quiz: quiz,
        completed: false,
        status: 'active',
        isEditing: false,
      },
    ]
    this.setState(updatedQuiz)
    console.log(updatedQuiz)
  }
  //To pass the vale from AddQuiz to the Home, we use props
  //html for page after login goes here
  render() {
    return (
      <div>
        <AddQuiz addQuiz={this.addQuiz} />
      </div>
    )
  }
}

export default Home
