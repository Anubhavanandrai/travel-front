import "./login.css";
import HandleLogin from "../../Hooks/HandleLogin";
import { useState } from "react";
import { Link } from "react-router-dom";
import Forgethandle from "../../Hooks/Forgethandle";

function Login() {
  const { loginsubmit, handleinputchange } = HandleLogin();
  const { sendReset, handleEmailChange, foundmail, newpassword,write,cnfrm,mail,pschange ,upd,handlewrite,handlecnfrmwrite} = Forgethandle();
   
  const [view, setView] = useState(false);
  const [admin, setAdmin] = useState(false);

 console.log(mail)
 console.log(cnfrm,"cnfrm h y")
 console.log(write,"write h y")
  return (
    <div className="login-container">
      <div className="log-btnn">
        <Link to="/"><button className="log-home">Home</button></Link>
        <Link to="/signup"><button className="log-sign">Signup</button></Link>
      </div>

      <div className="login">
        <div className="tabs">
          <button
            className={`tab ${!admin ? 'active' : ''}`}
            onClick={() => setAdmin(false)}>
            User Login
          </button>
          <button
            className={`tab ${admin ? 'active' : ''}`}
            onClick={() => setAdmin(true)}>
            Admin Login
          </button>
        </div>

        <form onSubmit={(e) => loginsubmit(e, admin)}>
          <label>{admin ? "Admin Login" : "User Login"}</label>
          <input
            type="text"
            name="Username"
            onChange={handleinputchange}
            placeholder="Username"
          />
          <input
            type="password"
            name="Password"
            onChange={handleinputchange}
            placeholder="Password"
          />
          {admin ? (
            <button type="submit" className="admin-btn">
              Admin Login
            </button>
          ) : (
            <button type="submit" className="user-btn">
              User Login
            </button>
          )}
        </form>
        <button className="forgot-password-btn" onClick={() => setView(true)}>Forgot Password?</button>
      </div>

      {view && 
        (newpassword ?  (
          <div className="new-password-section">
            <div className="forget-main">
              <label className="inside-forget-main" >New Password: </label>
              <input type="password" placeholder="Enter new password" className="new-password-input" onChange={handlewrite} />
              <label className="inside-forget-main" >Confirm Password: </label>
              <input type="password" placeholder="Confirm password" className="new-password-input"  onChange={handlecnfrmwrite}  />
              { upd ? (<button className="reset-password-btn" onClick={pschange}>Reset</button>)
              :(<label>Password mismatch</label>)}
              
            </div>
          </div>
        ) : (
          <div className="forget-main">
            <label className="forget-main-label">Enter email address </label>
            <input
              type="text"
              placeholder="Enter email"
              className="forget-password-input"
              onChange={handleEmailChange}
            />
            <button className="forget-password-btn" onClick={sendReset}>Send Reset Link</button>

            {foundmail === false && <p className="error-message">Email is wrong. Please try again.</p>}
            {typeof foundmail === 'string' && <p className="error-message">{foundmail}</p>}
          </div>
        )
      )}
    </div>
  );
}

export default Login;
