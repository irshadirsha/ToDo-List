// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {useState} from 'react'

function App() {
 
const [toDos,setToDos]=useState([])
const [toDo,setToDo]=useState('')

const deleteItem=(id)=>{
   setToDos(toDos.filter((obj)=>obj.id!==id))
}

  return (
    <>
   <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Hey, it's My TODO.... </h2>
      </div>
      <div className="input">
        <input  value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(),text :toDo,status:false}])} className="fa-solid fa-square-plus"></i>
       
      </div>
      <div className="todos">
        {  toDos.map((obj)=>{
          return(
           <div className="todo">
           <div className="left">
             <input onChange={(e)=>{
              console.log(e.target.checked);
              console.log(obj)
              setToDos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
             }}
             value={obj.status} type="checkbox" name="" id="" />
             <p className={obj.status ? "cross" :" "}> {obj.text}</p>
           </div>
           <div className="right">
             <i onClick={()=>deleteItem(obj.id)} className="fa-solid fa-trash-arrow-up"></i>
        
           </div>
         </div>)
        })
      }
          {
            toDos.map((obj)=>{
              if(obj.status){
                return(<h1>{obj.text}</h1>)
              }
              return null
            })
          }
        
      </div>
    </div>
    </>
  )
}

export default App
