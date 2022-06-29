import React,{ useState,useEffect } from 'react';
import './User.css';

function AddUser({list,setList}){
    const prevList = list;
    const[addFormData,setAddFormData] = useState({
            name:'',
            location:'',
            email:''
        })
        const handleAddFormChange =(event)=>{
            event.preventDefault();
            const fieldName = event.target.getAttribute('name');
            const fieldValue = event.target.value;
            const newFormData = {addFormData}
            newFormData[fieldName] = fieldValue;
            setAddFormData(newFormData);
        }
    
        const handleAddFormSubmit = (event) =>{
            event.preventDefault();
    
            const newUser = {
                name:addFormData.name,
                email:addFormData.email,
                location:addFormData.location
            }
            prevList.push(newUser)
            setList(prevList)
        }

return(
    <div>
         <form className='Form' onSubmit={handleAddFormSubmit}>
                <input className='Input' type='text' onChange={handleAddFormChange}  name='name' required='required' placeholder='Enter a name...' />
                <input className='Input' type='email' onChange={handleAddFormChange} name='email' required='required' placeholder='Enter an email...' />
                <input className='Input' type='text' onChange={handleAddFormChange} name='location' required='required' placeholder='Enter location...' />
                <button className='Button' type='submit'>Add</button>
            </form>
    </div>
)
}

export default AddUser;