import './App.css'
import Checkboxes from './interviewQuestions/Checkboxes'
import ExpenseTracker from './interviewQuestions/ExpenseTracker'
import ImageSlider from './interviewQuestions/ImageSlider'
import LoadingBar from './interviewQuestions/LoadingBar'
import Todolist from './interviewQuestions/Todolist'

const App = () => {
  return (
    <div>
      <Checkboxes />
      <Todolist />
      <ExpenseTracker />
      <ImageSlider />
      <LoadingBar />
    </div>
  )
}

export default App
