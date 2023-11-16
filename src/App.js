import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List.jsx';
import { useState } from 'react';
function App() {
  const [name,setName]=useState('')
  const [description,setDescription]=useState('')
  const [list,setList]=useState([])
  function add(){
    setList([...list,{
      name:name,
      description:description,
      state:'complete'
    }])
    setName('')
    setDescription('')
  }
  const updateName=(e)=>{
    setName(e.target.value);
  }
  const updateDescription=(e1)=>{
    setDescription(e1.target.value);
  }
  const edit=(items)=>{
    let i=list.findIndex(x=>x.name==items.name&&x.description==items.description)
    list.splice(i,1)
    setName(items.name)
    setDescription(items.description)
  }
  const remove=(items)=>{
    let j=list.findIndex(x=>x.name==items.name&&x.description==items.description)
    list.splice(j,1)
    setList([...list])
  }
  const change=(e,item)=>{
    if(e=='Complete'){
      setList([...list])
    }
    else{
      item.state='notCompleted'
      setList([...list])
    }
  }
const changeOne=(e)=>{
  if(e=='Completed'){
  var a1=document.querySelectorAll('[id="notCompleted"]')
  for(let i=0;i<a1.length;i++){
    a1[i].style.display="none";    
  }
  console.log(a1)
   }
  var b1=document.querySelectorAll('[id="complete"]')
  for(let i=0;i<b1.length;i++){
    b1[i].style.display="block";    
  }
 
 if(e=='Not completed'){
 var a= document.querySelectorAll('[id="complete"]')
 for(let i=0;i<a.length;i++){
  a[i].style.display="none";    
}
  var b=document.querySelectorAll('[id="notCompleted"]')
  for(let i=0;i<b.length;i++){
    b[i].style.display="block";    
  } 
}
 if(e=='All'){
  const a2=document.querySelectorAll('[id="complete"]')
  for(let i=0;i<a2.length;i++){
    a2[i].style.display="block";    
  }
  const b2=document.querySelectorAll('[id="notCompleted"]')
  for(let i=0;i<b2.length;i++){
    b2[i].style.display="block";    
  }
  }
     
}

  return (
   <>
   <h3>My todo</h3>
         <div class="input-group mb-2">
        <input type="text" class="form-control" placeholder="Name" value={name} onChange={updateName} />
        <input type="text" class="form-control" placeholder="Description" value={description} onChange={updateDescription} />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            onClick={add}
            id="button-addon2"
          >
            AddTodo 
          </button>
        </div>
      </div>
      <ul>
        <li className='title'><b>My Todos:</b></li>
        <li>
          <div><span className='filter'><b>Status Filter:</b></span>
          <select onChange={(e)=>{changeOne(e.target.value)}} id="select">
            <option  value='All'>All</option>
            <option value='Completed'>Completed</option>
            <option value='Not completed'>Not completed</option>
          </select>
          </div>
        </li>
      </ul>
      <div className='container'>
        <div className='row'>
        {list.map((item, index) => {
              return <List key={index} item={item} edit={edit} remove={remove} change={change}></List>

            })}

        </div>
      </div> 

   
   </>
   
  );
}

export default App;
