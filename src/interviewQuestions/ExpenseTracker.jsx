import { useEffect, useState } from "react"

const ExpenseTracker = () => {
      const [expensesList, setExpensesList] = useState([])
      const [error, setError] = useState(false)
      const [errorMessage, setErrorMessage] = useState('')
      const [total, setTotal] = useState(0)
      const [expenses, setExpenses] = useState({
            expenseName: '',
            expenseAmount: ''
      })
      const handleChange = (e) => {
            const { id, value } = e.target
            const newValue = id === "expenseAmount" ? Number(value) : value;

            setExpenses({
                  ...expenses,
                  userId: Date.now(),
                  [id]: newValue
            })
            console.log(id, value)
      }
      const handleClick = () => {
            if (expenses.expenseAmount === '' || expenses.expenseName === '') {
                  setError(true)
                  setErrorMessage("All field Required")
            }
            else {
                  setExpensesList([...expensesList, expenses])
                  setError(false)
                  setErrorMessage("Items Added Successfullly")

            }
            setExpenses({ expenseName: '', expenseAmount: '' })
            setTotal(total + +expenses.expenseAmount)
      }
      const handleDelete = (id, amount) => {
            setExpensesList(expensesList.filter(item => item.userId !== id))
            setTotal(total - amount)
      }
      useEffect(() => {
            const timer = setTimeout(() => {
                  setErrorMessage('')
            }, 2000);

            return () => {
                  clearTimeout(timer)
            }
      }, [errorMessage])
      return (
            <div className="expense-container">
                  <h1 className="text-center">Expense trackeer</h1>
                  <div style={{ height: '20px', width: '50%', textAlign: 'center', color: error ? 'red' : 'green', fontWeight: 'bold' }}>
                        {errorMessage}
                  </div>
                  <div className="expense-header">
                        <input type="text" id="expenseName" value={expenses.expenseName} onChange={handleChange} placeholder="Enter your expense name" />
                        <input type="number" id="expenseAmount" value={expenses.expenseAmount} placeholder="Enter the amount" onChange={handleChange} />
                        <button onClick={handleClick}>Add expenses</button>
                  </div>
                  <table cellPadding={10} border={1}>
                        <thead>
                              <td>Id</td>
                              <td>Expense Name</td>
                              <td>Amount</td>
                        </thead>
                        <tbody>
                              {
                                    expensesList.length !== 0 ? expensesList?.map((expenses, index) => (
                                          <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{expenses.expenseName}</td>
                                                <td style={{ position: 'relative' }}>{expenses.expenseAmount}
                                                      <button style={{ position: "absolute", right: '1px', top: '1px', width: '20px', textAlign: 'left', background: 'red', cursor: 'pointer' }} onClick={() => handleDelete(expenses.userId, expenses.expenseAmount)}>x</button>
                                                </td>
                                          </tr>
                                    )) : <div>Add your daily expenses</div>
                              }
                        </tbody>
                        <span>Total amount: {total}</span>
                  </table>
            </div>
      )
}

export default ExpenseTracker
