import { useEffect, useState } from "react";
// import "./App.css"
import { Link, useNavigate, useParams } from "react-router-dom";

function StudentEditForm(){
  const [id, setId] = useState("")
  const [Name, setName] = useState("")
  const [City, setCity] = useState("")
  const [EmailId, setEmailId] = useState("")
  const [RollNO, setRollNo] = useState("")
  const [Mobile, setMobile] = useState("")
  const [Course, setCourse] = useState("")
  const [DOJ, setDOJ] = useState("")

  const {stid} = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://student-db-2u3s.onrender.com/StudentDatabase/" + stid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp)
        setId(resp.id)
        setName(resp.Name)
        setCity(resp.City)
        setEmailId(resp.EmailId)
        setRollNo(resp.RollNO)
        setMobile(resp.Mobile)
        setCourse(resp.Course)
        setDOJ(resp.DOJ)
      })

  },[])

  const changeId = (e) => {
    setId(e.target.value)
  }

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changeEmail = (e) => {
    setEmailId(e.target.value)
  }

  const changeCity = (e) => {
    setCity(e.target.value)
  }

  const changeRollNo = (e) => {
    setRollNo(e.target.value)
  }

  const changeMobile = (e) => {
    setMobile(e.target.value)
  }

  const changeCourse = (e) => {
    setCourse(e.target.value)
  }

  const changeDOJ = (e) => {
    setDOJ(e.target.value)
  }

  const formSubmit = (e) => {
    e.preventDefault()
    let data = { id, Name, City, RollNO, EmailId, Mobile, Course, DOJ }
    fetch("https://student-db-2u3s.onrender.com/StudentDatabase/" + stid, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((resp) => {
        alert("saved successfully..!")
        console.log(resp)
        navigate("/a")
        setId("")
        setName("")
        setEmailId("")
        setCity("")
        setMobile("")
        setRollNo("")
        setDOJ("")
        setCourse("")
      })
      .catch((err) => {
        alert("Error" + err)
      })
  }
  return (
    <div style={{backgroundImage:`url("https://www.gosforthacademy.org.uk/_filecache/b9d/c2f/7252-cropped-w475-h390-of-1-FFFFFF-gosforth-academy-website-banner-4.jpg")`,backgroundSize:"cover",backgroundRepeat:"no-repeat",padding:"20px",maxHeight:"150vh"}}>
    <div className="container" style={{maxWidth:"500px"}}>
      <div className="card border border-3 " style={{backgroundColor:"rgba(217, 195, 241, 0.829)"}}>
        <div className="card-title">
          <h1 className="text-center"><b><u>Student-Edit Form</u></b></h1>
        </div>
        <div className="card-body">
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label className="form-label">ID</label>
              <input type="number" className="form-control" value={id} placeholder="Enter ID" onChange={changeId} disabled />
            </div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" value={Name} placeholder="Enter Name" onChange={changeName} required />
            </div>
            <div className="mb-3">
              <label className="form-label">City</label>
              <input type="text" className="form-control" value={City} placeholder="Enter City" onChange={changeCity} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" value={EmailId} placeholder="Enter Email" onChange={changeEmail} required />
            </div>
            <div className="mb-3">
              <label className="form-label">RollNO</label>
              <input type="number" className="form-control" value={RollNO} placeholder="Enter Roll No" onChange={changeRollNo} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile</label>
              <input type="number" className="form-control" value={Mobile} placeholder="Enter Mobile" onChange={changeMobile} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Course</label>
              <input type="text" className="form-control" value={Course} placeholder="Enter Course" onChange={changeCourse} required />
            </div>
            <div className="mb-3">
              <label className="form-label">DOJ</label>
              <input type="date" className="form-control" value={DOJ} placeholder="Enter Date of Joining" onChange={changeDOJ} required />
            </div>
            <input type="submit" value="Submit" className="btn btn-success m-5" />
            <Link to="/a" className="btn btn-primary"> Back to StudentData</Link>
          </form>
        </div>
      </div>
    </div>
    </div>

  )
}
export default StudentEditForm;