import axios from "axios";
const baseURL = "https://mern-todo-simple-be.vercel.app"
const getAllTodo =(setToDo) => {
    axios
    .get("https://mern-todo-simple-be.vercel.app")
    .then(({data}) =>{
        console.log("Data==>" , data)
        setToDo(data)
    })

}
const addTodos =(text , setText , setToDo) => {
    axios
    .post(`${baseURL}/todo` , {text})
    .then((data) =>{
        console.log(data)
        setText('')
        getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))

}
const updateTodo =(toDoId , text , setToDo , setText , setisUpdating) => {
    axios
    .put(`${baseURL}/update` , {_id: toDoId , text})
    .then((data) =>{
        setText('')
        setisUpdating(false)
        getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))

}
const deleteTodo = (_id, setToDo) => {
    axios
      .delete(`${baseURL}/delete`, { data: { _id } })
      .then(({ data }) => {
        console.log(data);
        getAllTodo(setToDo);
      })
      .catch((err) => console.error(err));
  };



export {getAllTodo , addTodos , updateTodo , deleteTodo}