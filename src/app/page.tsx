"use client"

import { useState } from "react";

export default function Home() {
  // define state
  const [todos,setTodos] = useState([
    {movie:"Django Unchained",id:1},
    {movie:"Catch me if you can",id:2},
  ]);


  const [Inputval,setInput] = useState("")
  const [id,setId] = useState(0)
  
// function

const addItem = ()=>{
  const obj:any = todos.find(item => item.id == id)
  if (obj){
    const newArray = todos.filter(item => item.id !== obj.id)
    setTodos([...newArray,{movie:Inputval,id:id}])
    setInput ("")
    setId(0)
    return
  }

  setTodos([...todos,{movie:Inputval,id:id}])
  setInput ("")
  setId(0)
};

const editItem=(id:any)=>{
  const obj:any = todos.find(item => item.id == id)
  setInput(obj.movie)
  setId(obj.id)
  };

  const delItem = (id:any)=>{

    const newArray = todos.filter(item => item.id !== id)
    
    setTodos([...newArray])

  };


  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-center text-[40-px] underline">Todo App</h1>

      {/* start input div */}

      <div className="flex justify-between gap-4 mt-5">
        <input 
        type="text"
        value={Inputval}
        onChange={(e)=>setInput(e.target.value)}
         className="w-[40%] p-2 ml- 3 text-lg border-b focus:outline-none" placeholder="write movie name" />
        <input
        type="number"
        value={id}
        onChange={(e:any)=> setId(e.target.value)}
         className="w-[20%] p-2 ml- 3 text-lg border-b focus:outline-none" placeholder="write id" />
        <button onClick={addItem} className="bg-blue-500 hover:bg-blue-300 w-[20%] text-white p-2 rounded">
          Add Movie
          </button>
      </div>

      {/* end input div */}



      {/* heading */}
      

      <h1 className="text-center text-[40-px] underline mt-5">Movies List</h1>

      {/* movie list */}

      <div className="grid grid-cols-2 gap-5 mt-5">

        {/* grid item */}

        {
          todos.map((item:any,i:any)=>{
            return(
              <div className="shadow p-4" key={i}>
    <div className="flex justify-between text-lg">
      <span className=" shadow rounded-full h-8 w-8  text-center my-auto">{i+1}</span>
      <span onClick={()=>delItem(item.id)} className=" shadow rounded-full h-8 w-8  text-center my-auto cursor-pointer text-red-700">x</span>
    </div>

    {/* data div */}

    <div className="mt-5 text-[30px] text-grey-700">{item.movie}</div>
    <div>
      <h2 onClick={()=>editItem(item.id)} className="text-right cursor-pointer">Edit</h2>
      
    </div>
</div>

            );
          })
        };

 

</div>

    </div>
  );
};
