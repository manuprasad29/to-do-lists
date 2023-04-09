import React, { useState } from 'react'

const NewTodoForm = ({addTodo}) => {
  const [newItem, setNewItem] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        if(newItem === "") return
        addTodo(newItem) 
      };

  return (
    <>
    <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item" className="item">
            New Tasks
          </label>
          <input
            type="text"
            className="item-input"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button className="btn">ADD</button>
      </form>
    </>
  )
}

export default NewTodoForm