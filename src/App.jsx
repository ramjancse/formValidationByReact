import { useEffect, useState } from 'react';
import './App.css';

const styles = {
  formControl: {
    
  }
}
function App() {
 
  const [isSubmit, setIsSubmit] = useState(false)
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password:''
  })
  const [formErrors, setFormErrors] = useState({})

  const onChangeHandler = (e) => {
    
    setUserData({
      ...userData,
      [e.target.name]:e.target.value,
    })
   
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(userData));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(userData);
    }
  },[formErrors])

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    if (!values.userName) {
      errors.userName = 'User Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if(!regex.test(values.email)) {
      errors.email = 'Email is not valid format';
    }
    
    if (!values.password) {
      errors.password = 'password is required';
    } else if (values.password.length < 4) {
      errors.password = 'password must be more than 4 character.';
    }else if (values.password.length > 10) {
      errors.password = 'password can not exceed 10 character';
    }
    return errors;
  }
    

 
  return (
    <>
      <div className='main'>
        <div className='container'>
        {
            Object.keys(formErrors).length === 0 && isSubmit ? <p> Form Submmited Successfully </p> : <p></p>
          }
       
        <div>  <h1> Sign UP</h1> </div>
        <form onSubmit={handleSubmit}>
          <div>
         
          <div className='form-Control marginY'>
            <div>
              <label htmlFor="userName" className='lebel'> User Name</label>
            </div>
            <div>
              <input
                type='text'
                name="userName"
                id='userName'
                className='input'
                value={userData.userName}
                onChange={onChangeHandler}
                />
                <p className='danger'> { formErrors.userName}</p>
            </div> 
          </div>

          <div className='form-Control marginY'>
            <div>
              <label htmlFor="email" className='lebel'>Email</label>
            </div>
            <div>
              <input
                type='text'
                name="email"
                id='email'
                className='input'
                value={userData.email}
                onChange={onChangeHandler}
                />
               <p className='danger'> { formErrors.email}</p>
            </div>
          </div>
            
            <div className='form-Control marginY'>
              <div>
                <label htmlFor="password" className='lebel'>Password</label>
              </div>
              <div>
              <input
                type='tepasswordxt'
                name="password"
                id='password'
                className='input'
                value={userData.password}
                onChange={onChangeHandler}
                />
                 <p className='danger'> { formErrors.password}</p>
              </div>
            </div>
            
            
            <div className='form-Control marginY'>
              <input type='submit' value="Submit" className='btn' />
            </div>
            </div>
        </form>
        </div>
      </div>
    </>
  )
}

export default App
