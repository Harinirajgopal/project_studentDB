import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword} from "firebase/auth";

function Registration(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[mobile,setMobile]=useState("")
    const[pswd,setPswd]=useState("")
    const[cpswd,setCpswd]=useState("")

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
      const reg=getAuth()


    const changeName=(e)=>{
        setName(e.target.value)
    }
    const changermail=(e)=>{
        setEmail(e.target.value)
    }
    const changemobile=(e)=>{
        setMobile(e.target.value)
    }
    const changepswd=(e)=>{
        setPswd(e.target.value)
    }
    const changecpswd=(e)=>{
        setCpswd(e.target.value)
    }

    const submitdata=(e)=>{
      if(name.length<6){
        alert("Enter name with minimum 4 characters")
      }
      if(pswd!=cpswd){
        alert("Password does not match")
      }
        e.preventDefault()
        let obj={
            email:email,
            password:pswd

        }
        createUserWithEmailAndPassword(reg,obj.email,obj.password)
        .then(()=>{
            alert("successfully Registeres..!")
            navigate("/Login")
        })
        .catch(()=>{
            alert("Error")
        })
    }
   return(
    <div style={{backgroundImage:`url("https://thumbs.dreamstime.com/b/registration-hand-pressing-button-interface-blue-background-49410297.jpg")`,backgroundSize:"cover",backgroundRepeat:"no-repeat",padding:"20px",minHeight:"100vh"}}>
    <div className="container" style={{maxWidth:"500px"}}>
      <div className="card border border-3  mt-5" style={{backgroundColor:"rgba(151, 205, 221, 0.473)"}}>
        <div className="card-title">
          <h1 className="text-center"><b><u>Register Form</u></b></h1>
        </div>
        <div className="card-body">
          <form onSubmit={submitdata}>
            
            <div className="mb-3">
              <label className="form-label">Name  <i class="bi bi-person-fill"></i></label>
              <input type="text" className="form-control" value={name} placeholder="Enter Name" onChange={changeName} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email  <i class="bi bi-envelope"></i></label>
              <input type="email" className="form-control" value={email} placeholder="Enter email" onChange={changermail} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile <i class="bi bi-phone"></i></label>
              <input type="number" className="form-control" value={mobile} placeholder="Enter mob no" onChange={changemobile} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password <i class="bi bi-file-lock2"></i></label>
              <input type="password" className="form-control" value={pswd} placeholder="Enter password" onChange={changepswd} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password <i class="bi bi-file-lock2-fill"></i></label>
              <input type="password" className="form-control" value={cpswd} placeholder="Enter confirm password" onChange={changecpswd} required />
            </div>
             <input type="submit" value="Submit" className="btn btn-success m-3" />
            <Link to="/Login"><b> If you have an account </b><button className="btn btn-primary m-3">Login</button> </Link>
          </form>
        </div>
      </div>
    </div>
    </div>

   )
}

export default Registration;