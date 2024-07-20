const TodoModel = require("../models/data.js")

module.exports.getTodo = async(req , res) => {
    const toDo = await TodoModel.find()
    res.send(toDo)
}

module.exports.postTodo = async(req , res) => {
    console.log("im in create")
    const {text} = req.body
    try {
        await TodoModel
        .create({text})
        .then((data)=>{ 
            console.log("Added Succesfully")
            console.log(data)
            res.send(data)
            
        })
     
    } catch (error) {
        console.log(error)
    }
    
}
module.exports.updateTodo = async(req , res) => {
    const {_id , text} = req.body
    TodoModel
    .findByIdAndUpdate(_id , {text})
    .then(() => res.send("updated sucessfully"))
    .catch((err) => console.log(err))
   
}

module.exports.deleteTodo = async(req , res) => {
    const {_id} = req.body
    TodoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted sucessfully"))
    .catch((err) => console.log(err))
   
}