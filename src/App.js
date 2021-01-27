import React from 'react';
import {useState} from 'react';




const App =() =>{

  const [fullName, fullsetName] = useState({
    fname: '',
    lname: '',
    email:'',
    phone:''
  });


  const onsubmit =(event)=> {
    event.preventDefault();
    alert('submited');
       
  };

  const inputEvent = (event) =>{
    console.log(event.target.value);
    // const value = event.target.value;
    // const name = event.target.name;
    const {value, name} = event.target;

    fullsetName((preValue)=>{
      return{
        ...preValue,
        [name]:value,
      }



      // if (name === 'fname') {
      //   return{
      //     fname: value,
      //     lname: preValue.lname
      //   };

        
      // }else if (name === 'lname') {
      //   return{
      //     fname: preValue.fname,
      //     lname: value
      //   };
        
      // }
      // else if (name === 'email') {
      //   return{
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     phone:preValue.phone,
      //   };
        
      // }
      // else if (name === 'phone') {
      //   return{
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone:value,

      //   };
        
      // }

    });
   
    
  };
 
  return(
    <>
      <div>
      <form onSubmit={onsubmit}>
        <h1>Hellow {fullName.fname} {fullName.lname}</h1>
        <p>{fullName.email}</p>
        <p>{fullName.phone}</p>
        <input type="text" placeholder="Enter your firstName" name="fname" onChange={inputEvent} value={fullName.fname}/><br/><br/>
        <input type="text" placeholder="Enter your lasttName" name="lname" onChange={inputEvent} value={fullName.lname}/><br/><br/>
        <input type="email" placeholder="Enter your email" name="email" onChange={inputEvent} value={fullName.email}/><br/><br/>
        <input type="number" placeholder="Enter your phone number" name="phone" onChange={inputEvent} value={fullName.phone}/><br/>
        <button type="submit" >Submit</button>
        </form>
      </div>
    </>
  )

};

export default App;