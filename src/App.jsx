import { useState , useRef} from 'react'
import './App.css'

function App() {

  let username = useRef()
  let password = useRef()
  let pincode = useRef()
  let clear = useRef(null)

  const handleSubmit = event => {
    event.preventDefault()
  }

  const handleChange = event => {
    
    if(clear.current){
      clearTimeout(clear.current)
    }
    
    clear.current = setTimeout(() => {
      
      let name = event.target.name
      let value = event.target.value
      
      if(value){
      if(name == "username"){
        let count = 0
        for(let x = 0; x < value.length; x++){
          let char = value.charAt(x)
          if(!isNaN(Number(char))){
            count++
          }
        }
        if(!count){
          alert("Username should be the combination of alphabets and numbers")
        }
    }

    if(name == "password"){
      console.log(name)
      if(value.length < 8){
        alert("Password should contain atleast 8 characters")
      }
    }

    if(name == "pincode"){
      if(value.length == 6){
        for(let x = 0; x < value.length; x++){
          let char = value.charAt(x)
          if(isNaN(char)){
            return alert("Pincode should not contain any characters")
          }
        }
      }
      else {
        alert("Pincode should be of 6 digits")
      }
    }
    }}, 1000)

  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <label>Enter your Username here <input ref={username} name='username' onChange={e => handleChange(e)} type="text" placeholder='Username' /></label><br />
        <label>Enter your new password here <input ref={password} name='password' onChange={e => handleChange(e)} type="text" placeholder='password' /></label><br />
        <label>Enter your area's pincode <input ref={pincode} name='pincode' onChange={e => handleChange(e)} type="text" placeholder='Pin-Code' /></label><br />
        <input type="submit" />
      </form>
    </>
  )
}

export default App
