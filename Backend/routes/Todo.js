const {Router} = require("express")
const { getTodo, postTodo, updateTodo, deleteTodo } = require("../controllers/TodoController.js")
const router = Router()
router.get('/' , getTodo)
router.post('/todo' , postTodo)
router.put('/update' , updateTodo)
router.delete('/delete' , deleteTodo)


module.exports = router