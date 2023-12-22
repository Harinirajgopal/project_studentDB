import { useState } from "react";
// import "./App.css"
import { Link, useNavigate } from "react-router-dom";

function StudentForm() {
  const [id, setId] = useState("")
  const [Name, setName] = useState("")
  const [City, setCity] = useState("")
  const [EmailId, setEmailId] = useState("")
  const [RollNO, setRollNo] = useState("")
  const [Mobile, setMobile] = useState("")
  const [Course, setCourse] = useState("")
  const [DOJ, setDOJ] = useState("")

  const navigate = useNavigate()

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
    fetch("https://studbackend-s8i5.onrender.com/StudentDatabase", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((resp) => {
        alert("saved successfully..!")
        console.log(resp)
        navigate("/")
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
    <div className="container" style={{ width:"600px" }}>
      <div className="card">
        <div className="card-title">
          <h1><b>Student Form</b></h1>
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

  )
}
export default StudentForm;