import { useState } from "react"

const Todolist = () => {
      const [input, setInput] = useState('')
      const [todo, setTodo] = useState([])
      const handleClick = () => {
            const todoItems = {
                  id: Date.now(), input
            }
            setTodo([...todo, todoItems])
            setInput('')
      }

      const handleDelete = (id) => {
            setTodo(todo.filter((todo) => todo.id !== id))
      }
      console.log(todo);
      return (
            <div>
                  <h1 className="text-center">Todolist</h1>
                  <div className="todoContainer">
                        <input value={input} onChange={(e) => setInput(e.target.value)} className="input" type="text" placeholder="Enter your todo" />
                        <button onClick={handleClick} className="btn">submit</button>
                  </div>
                  <ul style={{ display: 'flex', flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                        {

                              todo.length !== 0 ? todo?.map((item, i) => (
                                    <li className="flexs" key={i}>{item.input}
                                          <button style={{
                                                cursor: "pointer"
                                          }}
                                                onClick={() => handleDelete(item.id)}
                                          > x</button>
                                    </li>
                              )) : <li>add some todos</li>
                        }
                  </ul >
            </div >
      )
}

export default Todolist
