import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
//import ionRangeSlider from 'ion-rangeslider'

export default function Signup() {
  const [credentials, setCredentials] = useState({name:"", email:"", password:""})

  const handleSubmit = async(e) =>{
    //e.preventDefault()
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/creatuser",{
    method:'POST',
    headers:{
      'content-Type ':'application/json'
    },
    body:JSON.stringify({name:credentials.name, email:credentials.email,password:credentials.password})
    });
    const json= await response.json()
    console.log(json);
    if(!json.success){
      alert("enetr va;id credentials")
    }
 
  }
  const onChange=(event)=>{
    setCredentials({...credentials,[event.target.name]:event.target.value})

  } 
  return (
    <>
    
    <div className='container'>
<form onSubmit={handleSubmit}>
<div className="mb-3">
    <label htmlfor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
   
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange}  id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className=" m-3 btn btn-primary">Submit</button> 
  <Link to="/login" className='m-3 btn btn-danfer'>ALREADY USER</Link>
  
</form>
</div>
 
    
    </>
  )
}
