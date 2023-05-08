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

  addQuiz = (quiz) => {
    // spread operator makes a copy of current quiz and we're adding id
    const newQuiz = [
      ...this.state.quizzes,
      {
        id: uuid4(),
        quiz: quiz,
        completed: false,
        status: 'active',
        isEditing: false,
      },
    ]
    this.setState(newQuiz)
    console.log(newQuiz)
  }
  //To pass the vale from TodoForm to the Home, we use props
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
