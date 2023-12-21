import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { FirebaseApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";


function Login(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    let navigate=useNavigate()

    const firebaseConfig = {
        apiKey: "AIzaSyB3PMxwFjmyYaxWzF7WDXllOwdUroZMNdg",
        authDomain: "student-registration-ee0dc.firebaseapp.com",
        projectId: "student-registration-ee0dc",
        storageBucket: "student-registration-ee0dc.appspot.com",
        messagingSenderId: "397539225199",
        appId: "1:397539225199:web:caf0e49dcc38535acba79a",
        measurementId: "G-FF3854F9LH"
      };
      
    
      const app = initializeApp(firebaseConfig);
      const reg= getAuth()

      const changeemail=(e)=>{
        setEmail(e.target.value)
      }

      const changepswd=(e)=>{
        setPassword(e.target.value)
      }


      const submitdata=(e)=>{
        e.preventDefault()
        let obj={
            email: email,
            password:password
        }

        signInWithEmailAndPassword(reg,obj.email,obj.password)
        .then(()=>{
            alert("Logged in successfully")
            navigate("/a")
        })
        .catch(()=>{
            alert("error")
        })
      }
    return(
      <div style={{backgroundImage:`url("https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg")`,backgroundSize:"cover",backgroundRepeat:"no-repeat",padding:"20px",minHeight:"100vh"}}>
        <div className="container" style={{maxWidth:"500px"}}>
      <div className="card mt-5 border border-3" style={{backgroundColor:"rgba(86, 196, 230, 0.473)"}}>
        <div className="card-title " >
          <h1 className="text-center" ><b><u>Login Form</u></b></h1>
        </div>
        <div className="card-body">
          <form onSubmit={submitdata}>
            
            
            <div className="mb-3">
              <label className="form-label"><b>Email </b><i class="fa-regular fa-envelope"></i></label>
              <input type="email" className="form-control" value={email} placeholder="Enter email" onChange={changeemail} required />
            </div>
            
            <div className="mb-3">
              <label className="form-label"><b>Password </b><i class="fa-solid fa-lock"></i></label>
              <input type="password" className="form-control" value={password} placeholder="Enter password" onChange={changepswd} required />
            </div>
            
            
            <input type="submit" value="Submit" className="btn btn-success m-2" />
            <Link to="/a"><b style={{color:"black"}}> Already logged in </b><button className="btn btn-primary m-1">Back to Student Form</button></Link>
          </form>
        </div>
      </div>
    </div>
    </div>

    )
}

export default Login;