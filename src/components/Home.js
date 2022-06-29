import React,{ useState,useEffect } from 'react';
import AddUser from './AddUser'
import './User.css';
import axios from 'axios';

function Home(){
    const[list,setList] = useState([]);

    useEffect(()=>{
        axios
        .get('https://randomuser.me/api/?results=10')
        .then(res=>{
            console.log(res)
            setList(res.data.results)
        })
    },[]);

    const userRemove = (userId)=>{
        const newList = [...list];
        const index = list.findIndex((user)=>user.id === userId);

        newList.splice(index,1);
        setList(newList);
    }
    
    return(
        <div className='Container'>
           <AddUser list={list} setList={setList}/>
            {list.map(user=>(
                <div className='User'>
               <p className='Picture'><img className='PictureBorder' src={user.picture.large}/></p>
               <div className='Info'>
               <p>Name: {user.name.first} {user.name.last}</p>
               <p>Email: {user.email}</p>
               <p>Location: {user.location.country} , {user.location.city} , {user.location.street.name}</p>
               <p>User Id: {user.id.name}</p>
               <button className='dButton' onClick={()=>userRemove(user.id)}>Delete</button>
               </div>
               </div>
            ))}
        </div>
    )
}

export default Home;