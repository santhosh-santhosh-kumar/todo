import React from "react";

function List({item,edit,remove,change}) {
  return (
    <>
    <div className="col-md-4" id={item.state}>
      <div className="card" style={{width: "18rem;"}}>
        <div className="card-body">
          <p id="para"><b>Name:</b>{item.name}</p>
          <p id="para"><b>Description:</b>{item.description}</p>
          <p  id="status"><b>Status:</b>
          <select id="select1" onChange={(e)=>{change(e.target.value,item)}}>
            <option value='Complete'>Complete</option>
            <option value='Not complete'>Not Complete</option>
          </select>
          </p>
          <div className="button">
          <button className="btn btn-primary" onClick={()=>edit(item)}>Edit</button>
          <button className="btn btn-primary delete" onClick={()=>remove(item)}>Delete</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default List;
