import { useState,useEffect } from 'react';
import axios from 'axios'
import './Show.css'
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Show = () => {
const [data, setData] = useState([])
const[message, setMessage]=useState(false)
const navigate = useNavigate()

useEffect(() => {
  axios.get('https://6622aa453e17a3ac846da727.mockapi.io/users-details')
  .then(response=> {
  console.log(response);
  setData(response.data)
  setMessage(response.data.length === 0)
  })
  .catch(error=>{
    console.log(error);
  })
  }, []);

const handleDelete=(id)=>{
  axios.delete(`https://6622aa453e17a3ac846da727.mockapi.io/users-details/${id}`)
  .then(response=> {
  console.log(response);
  const updatedData = data.filter(user => user.id !== id);
  setData(updatedData);
  })
  .catch(error=>{
    console.log(error);
  })
  ;
}
const editButton=(id)=>{
console.log('edit', id);
navigate(`/edit/${id}`)
}


return (


<div className="show-container">
  {message ? (
    <h4>No details yet</h4>
  ) : (
    <>
      {data.map((inputData) => (
        <div className="card" style={{ width: '18rem' }} key={inputData.id}>
          <div className="card-body">
            <p>Age: {inputData.age}</p>
            <p>Name: {inputData.name}</p>
            <p>Country: {inputData.country}</p>
            <p>Email address: {inputData.email}</p>
            <div className="buttons">
              <button className='delete-button' onClick={ ()=>handleDelete(inputData.id)}>
                <RiDeleteBin5Line />
              </button>
              <button className='edit-button' onClick={()=>editButton(inputData.id)} >
                <MdEdit/>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  )}
</div>


  )
}

export default Show

