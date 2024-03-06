import './App.css'
import Checkboxes from './interviewQuestions/Checkboxes'
import ExpenseTracker from './interviewQuestions/ExpenseTracker'
import ImageSlider from './interviewQuestions/ImageSlider'
import ProgressBar from './interviewQuestions/ProgressBar'
import Todolist from './interviewQuestions/Todolist'

const App = () => {
  return (
    <div>
      <Checkboxes />
      <Todolist />
      <ExpenseTracker />
      <ImageSlider />
      <ProgressBar />
    </div>
  )
}

export default App
