import { useState } from "react";
import Todo from "./components/Todo";
import { useEffect } from "react";
import { getAllTodo , deleteTodo , updateTodo , addTodos } from "./controllers/handleApi";
function App() {
  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setisUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")
  useEffect(() => {
    getAllTodo(setToDo)

  }, [])

  const updateMode = (_id, text) => {
    setisUpdating(true)
    setText(text)
    setToDoId(_id)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Mern-Stack-Todo-App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add Your Task Here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="add"
           onClick={isUpdating ?
            () => updateTodo(toDoId, text, setToDo, setText, setisUpdating) 
            : () => addTodos (text, setText, setToDo)}>
            {isUpdating ? "Update" : "Add"}
            </div>
        </div>
        <div className="list">
          {toDo.map((item) => <Todo
            key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteTodo={() => deleteTodo(item._id, setToDo)} />)}


        </div>

      </div>

    </div>
  )
}
export default App;