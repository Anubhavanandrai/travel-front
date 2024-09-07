import "./signup.css"
import { MdError } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import Usesubmitt from "../../Hooks/Usesubmitt.js";

function Signup() {

    const { handleChange, handleSubmit,form,formErrors} = Usesubmitt({});
    console.log(form);

  return (
    <div className="signup-container">
          
          <div className='signup-header'>
             <h3>Register User</h3>
          </div>
          
          <form className="signup-form"  onSubmit={handleSubmit}>

            <div className={`form-elements ${formErrors.Username ? 'error' : form.Username ? 'success' : ''}`}>
                <label>Username</label>
                <input type="text"  name="Username"  onChange={handleChange} placeholder='Enter username'/>
                <i className="tick"><TiTick /></i>
                <i className="exclamation"><MdError /></i>
                <small>{formErrors.Username}</small>
            </div>

            <div className={`form-elements ${formErrors.Email ? 'error' : form.Email ? 'success' : ''}`}>
                <label>Email</label>
                <input type="text" name="Email" onChange={handleChange} placeholder='Enter email'/>
                <i className="tick"><TiTick /></i>
                <i className="exclamation"><MdError /></i>
                <small>{formErrors.Email}</small>
            </div>
            

            <div className={`form-elements ${formErrors.Password ? 'error' : form.Password ? 'success' : ''}`}>
                <label>Password</label>
                <input type="Password" name="Password" onChange={handleChange} placeholder='Enter gender'/>
                <i className="tick"><TiTick /></i>
                <i className="exclamation"><MdError /></i>
                <small>{formErrors.Password}</small>
            </div>

            <div className={`form-elements ${formErrors.Gender ? 'error' : form.Gender ? 'success' : ''}`}>
                <label>Gender</label>
                <input type="text" name="Gender" onChange={handleChange} placeholder='Enter gender'/>
                <i className="tick"><TiTick /></i>
                <i className="exclamation"><MdError /></i>
                <small>{formErrors.Gender}</small>
            </div>
            
            <div className={`form-elements ${formErrors.Mobile ? 'error' : form.Mobile ? 'success' : ''}`}>
                <label>Mobile</label>
                <input type="Num"  name="Mobile"  onChange={handleChange}  placeholder='Enter mobile no.'/>
                <i className="tick"><TiTick /></i>
                <i className="exclamation"><MdError /></i>
                <small>{formErrors.Mobile}</small>
            </div>
             <button type="submit">submit</button>
          </form>

    </div>
  )
}

export default Signup