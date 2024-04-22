import { useEffect, useState } from "react";
import axios from 'axios';
import './Input.css';
import { useParams } from 'react-router-dom';

const Edit = () => {
   const [edit, setEdit] = useState({});
   const [loading, setLoading] = useState(true);
   const [message, setMessage] = useState(false)
   const { id } = useParams();
   
   useEffect(() => {
      axios.get(`https://6622aa453e17a3ac846da727.mockapi.io/users-details/${id}`)
         .then(res => {
            setEdit(res.data);
            setLoading(false);
         })
         .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
         });
   }, [id]);

   const handleChange = (e) => {
      setEdit(prevEdit => ({ ...prevEdit, [e.target.name]: e.target.value }));
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      axios.put(`https://6622aa453e17a3ac846da727.mockapi.io/users-details/${id}`, edit)
         .then(res => {
            setEdit(res.data)
            setLoading(false);
            setMessage(!message)
            console.log('Update successful:', res.data);
         })
         .catch(error => {
            console.error('Error updating data:', error);
         });
   }

   if (loading) {
      return <div>Loading...</div>;
   }

   return (
      <div className="input-container">
          {message?<h2 className='saved-text'>Your details have been saved!</h2>:null}
         <form onSubmit={handleSubmit}>
            <div className="mb-3">
               <label htmlFor="age-input" className="form-label">Age</label>
               <input type="number" name='age' className="form-control" id="age-input" placeholder="18" value={edit.age} onChange={handleChange} />
            </div>
            <div className="mb-3">
               <label htmlFor="name-input" className="form-label">Name</label>
               <input type="text" name='name' className="form-control" id="name-input" placeholder="John Doe" value={edit.name} onChange={handleChange} />
            </div>
            <div className="mb-3">
               <label htmlFor="email-input" className="form-label">Email address</label>
               <input type="email" name='email' className="form-control" id="email-input" placeholder="name@example.com" value={edit.email} onChange={handleChange} />
            </div>
            <div className="mb-3">
               <label htmlFor="country-input" className="form-label">Country</label>
               <input type="text" name='country' className="form-control" id="country-input" placeholder="India" value={edit.country} onChange={handleChange} />
            </div>
            <div className="button">
               <button type="submit" className="btn">Update data</button>
            </div>
         </form>
      </div>
   );
}

export default Edit;
