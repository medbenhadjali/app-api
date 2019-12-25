import React, {useState, useEffect} from "react";
import './App.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom'


export default function Add({location}) {
let history = useHistory();
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")

    const handelName =(e)=>{
        setName(e.target.value)
    }

    const handelPhone =(e)=>{
            setPhone(e.target.value)
    }

    const handelEmail =(e)=>{
            setEmail(e.target.value)
    }
    useEffect(() => {
      if( location.state && location.state.contact){
        const contactProps =  location.state.contact;
        setName(contactProps.name);
        setPhone(contactProps.phone);
        setEmail(contactProps.email);
      }
    },[])
    const add = ()=>{
        let objet ={
            name ,
            phone ,
            email
        }
        // console.log(objet)
      axios.post('http://localhost:3000/contact', objet).then(res =>{
        history.push('/list_contacts')

      })
    }
    
    const update = ()=>{
      console.log(location.state.contact._id)
        axios.put(`http://localhost:3000/contact/${location.state.contact._id}` , {name , phone , email}).then(res =>{
          history.push('/list_contacts')

      // console.log(x)
    })}
    const onsubmit = () =>{
      if(location.state && location.state.edit){
        return update()
      } 
      add()
    }
  return (
    <div className="input-container">
      <input
        type="text"
        name="name"
        value={name}
        placeholder="name"
        onChange={handelName}
      />
      <input
        type="tel"
        name="phone-number"
        value={phone}
        placeholder="phone-number"
        onChange={handelPhone}
      />
      <input
        type="email"
        name="email"
        value={email}
        placeholder="email"
        onChange={handelEmail}
      />
      <button onClick={onsubmit}>submit</button>
    </div>
  );
}
