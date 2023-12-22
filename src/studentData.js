import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css"
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth"

function StudentData() {
    const [data, setData] = useState([])
    const [value, setValue] = useState("")
    const [sort, setSort] = useState("")
    const navigate = useNavigate()
    let options = ['id', 'Name', 'City', 'RollNO', 'EmailId', 'Mobile', 'Course', 'DOJ']

    useEffect(() => {
        fetch("https://studbackend-s8i5.onrender.com/StudentDatabase")
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                console.log(resp)
                setData(resp)
            })

    }, [])

    const ChangeUser = (e) => {
        setValue(e.target.value)
    }

    const handleSearch = async (e) => {
        e.preventDefault()
        return await axios.get(`https://studbackend-s8i5.onrender.com/StudentDatabase?q=${value}`)
            .then((res) => {
                setData(res.data)
            })
    }

    const Sortdata = async (e) => {
        e.preventDefault()
        let value = e.target.value
        setSort(value)
        return await axios.get(`https://studbackend-s8i5.onrender.com/StudentDatabase?_sort=${value}&_order=asc`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const ChangeEdit = (id) => {
        navigate("/studentedit/" + id)
    }

    const ChangeDelete = (id) => {
        fetch("https://studbackend-s8i5.onrender.com/StudentDatabase/" + id, {
            method: "DELETE"
        })
            .then(() => {
                alert("Deleted Successfully")
                window.location.reload()
            })
            .catch((err) => {
                alert("error" + err)
            })
    }
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
    const reg = getAuth()
    const submitdata = (e) => {
        e.preventDefault()

        signOut(reg)
            .then(() => {
                alert(" Logged Out successfully")
                navigate("/login")
            })
            .catch(() => {
                alert("error")
            })
    }
    return (
        <div className="container">
            <div className="cards">

                <div className="card-title row g-3">
                    <h1 className="text-center"><b><u>Student Database Management System</u></b></h1>
                </div>
                <div className="card-body" style={{ maxwidth: "500px" }}>
                    <div className=" nav d-flex justify-content-between m-5">
                        <Link to="/StudentForm1" className="btn btn-success border border-sucess mx-3">ADD new(+)</Link><br /><br />
                        <select style={{ width: "180px", height: "40px" }} value={sort} onChange={Sortdata}>
                            <option>Sort</option>
                            {options.map((item) => (
                                <option>{item}</option>


                            ))}
                        </select>
                        <form onSubmit={handleSearch} className="mx-2" >
                            <input style={{ width: "240px", height: "38px" }} type="text" value={value} placeholder="Filter Records" onChange={ChangeUser} />
                            <button style={{ width: "100px", height: "38px" }} type="submit">Search</button>
                            <button className="btn btn-info border border-black mx-2" onClick={submitdata}>Logout</button>
                        </form><br /><br />

                    </div>
                    <div className="table-responsive mx-2">
                        <table className="table table-bordered table-striped">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>EmailId</th>
                                    <th>Roll No</th>
                                    <th>Mobile</th>
                                    <th>Course</th>
                                    <th>DOJ</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.City}</td>
                                        <td>{item.EmailId}</td>
                                        <td>{item.RollNO}</td>
                                        <td>{item.Mobile}</td>
                                        <td>{item.Course}</td>
                                        <td>{item.DOJ}</td>
                                        <td>
                                            <button onClick={() => { ChangeEdit(item.id) }} className="btn btn-success">Edit</button>
                                            <button onClick={() => { ChangeDelete(item.id) }} className="btn btn-danger m-2">Delete</button>
                                            {/* <button className="btn btn-success">Add </button> */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default StudentData;