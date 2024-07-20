import React from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

const Todo = ({text ,deleteTodo,updateMode} ) => {
  return (
    <div className='todo'>
        <div className='text'>{text}</div>
        <div className='icons'>
        <MdOutlineDeleteOutline className="icon" onClick={deleteTodo} />
        <MdOutlineEdit  className="icon" onClick={updateMode} />

        </div>
      
    </div>
  )
}

export default Todo
