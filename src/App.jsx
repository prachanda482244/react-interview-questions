import './App.css'
import Checkboxes from './interviewQuestions/Checkboxes'
import ExpenseTracker from './interviewQuestions/ExpenseTracker'
import Todolist from './interviewQuestions/Todolist'

const App = () => {
  return (
    <div>
      <Checkboxes />
      <Todolist />
      <ExpenseTracker />
    </div>
  )
}

export default App
