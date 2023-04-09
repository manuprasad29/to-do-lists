import React from "react";

const ListItems = ({ handleToggle, handleDelete, completed, id ,title}) => {
  return (
      <li >
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => handleToggle(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default ListItems;
