import { useState } from 'react'
import './Input.css'
import axios from 'axios'

const Input = () => {
  const [inputValue, setInputValue] = useState({ age: '', name: '',country: '', email: '' });
  const [savedData, setSavedData] = useState(false)
  
  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    console.log({ ...inputValue, [e.target.name]: e.target.value });
    console.log(inputValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://6622aa453e17a3ac846da727.mockapi.io/users-details', inputValue)
    .then(response=> {
    console.log(response);
    setSavedData(!savedData); 
    setInputValue({ age: '', name: '',country: '', email: '' })
    })
    .catch(error=>{
      console.log(error);
    })
    ;
   
  }
return (
<div className ="input-container">
  {savedData?<h2 className='saved-text'>Your details have been saved!</h2>:null}

<form onSubmit={handleSubmit}>

<div className="mb-3">
  <label htmlFor="age-input" className="form-label">Age</label>
  <input type="number" name='age' className="form-control" id="age-input" placeholder="18" value={inputValue.age} onChange={handleChange}/>
</div>
<div className="mb-3">
  <label htmlFor="name-input" className="form-label">Name</label> 
  <input type="text" name='name' className="form-control" id="name-input" placeholder="John Doe" value={inputValue.name} onChange={handleChange}/>
</div>
<div className="mb-3">
  <label htmlFor="email-input" className="form-label">Email address</label>
  <input type="email" name='email' className="form-control" id="email-input" placeholder="name@example.com" value={inputValue.email} onChange={handleChange} />
</div>
<div className="mb-3">
  <label htmlFor="country-input" className="form-label">Country</label> 
  <input type="text" name='country' className="form-control" id="country-input" placeholder="India" value={inputValue.country} onChange={handleChange}/>
</div>
<div className="button">
<button type="submit" className="btn">Add</button>
</div>
</form>
  </div>
  )
}

export default Input;
