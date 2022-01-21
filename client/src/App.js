import axios from "axios";
import api from "./api/api";
import "./App.css";
import {useEffect, useState} from 'react'

function App() {
  const [user, setUser]= useState('')

  
     const getAllRequest = async () => {
    const { data } = await api.get("/users");
    
    // setUser(data)
    console.log(data);
  }
     const getRequest = async () => {
    const { data } = await api.get("/users/23");
    
    // setUser(data)
    console.log(data);
  }
     const addRequest = async () => {
    const { data } = await api.post("/users",{
      id:33,
      cash:550,
      credit: 650
    });
    
    // setUser(data)
    console.log(data);
  }
  const deleteRequest = async () => {
    const { data } = await api.delete("/users/2");
    
    // setUser(data)
    console.log(data);
  }
  
  // const updateRequest = async () => {
  //   const { data } = await api.put("/users/88",{
  //     action:"withdraw",
  //     amount:200
  //   });
    
  //   // setUser(data)
  //   console.log(data);
  // }
  
 
  return (
    <div>
      
      <button onClick={getAllRequest}> get all users</button>
      <button onClick={getRequest}> get user</button>
      <button onClick={addRequest}> add user</button>
      <button onClick={deleteRequest}> delete user</button>
      {/* <button onClick={updateRequest}> update user</button> */}
    </div>
  );
}

export default App;
