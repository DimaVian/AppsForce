import React,{ useState,useEffect } from 'react';
import './User.css';
import { Formik, Field, Form } from 'formik';
import {v4 as uuidv4} from 'uuid';


const AddUser = ({list,setList})=>{
    const prevList = list;

return(
    <div>
     <Formik
      initialValues={{
        name: '',
        email: '',
        location:''
      }}
      onSubmit={ (values , {resetForm}) => {
         let newUser = {
             name:values.name,
             email:values.email,
             location:values.location,
             id:{value:uuidv4()}
         }
        prevList.push(newUser)
        console.log(prevList)
        setList(prevArr => ([...prevList]))
        resetForm()
      }}
    >
      <Form>
        <label htmlFor="name"> Name:</label>
        <Field id="name" name="name" placeholder="Name" />

        <label htmlFor="email">Email:</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <label htmlFor="location">Location:</label>
        <Field id="location" name="location" placeholder="Location" />

        <button className='Button' type="submit">Submit</button>
      </Form>
    </Formik>
    </div>
)
}

export default AddUser;