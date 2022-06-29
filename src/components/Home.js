import React,{ useState,useEffect } from 'react';
import AddUser from './AddUser'
import './User.css';
import axios from 'axios';

const Home= () =>{
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
            {console.log(list)}
           <AddUser list={list} setList={setList}/>
            {list.map((user,i) =>(
                <div key={i}className='User'>
               {user.picture ? <p className='Picture'><img className='PictureBorder' src={user.picture.large}/></p>:<p className='Picture'><img className='PictureBorder' src={''}/></p>} 
               <div className='Info'>
                {user.name.first?<p>Name: {user.name.first} {user.name.last}</p>:<p>Name: {user.name}</p> }
               
               <p>Email: {user.email}</p>
               {user.location.country?<p>Location: {user.location.country} , {user.location.city} , {user.location.street.name}</p>:<p>Location: {user.location}</p>}
               {}<p>User Id: {user.id.value}</p>
               <button className='dButton' onClick={()=>userRemove(user.id)}>Delete</button>
               </div>
               </div>
            ))}
        </div>
    )
}

export default Home;