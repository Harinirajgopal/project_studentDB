import StudentData from "./studentData.js";
import StudentForm from "./StudentForm1.js";
import StudentEditForm from "./StudentFormEdit.js";
import Registration from "./Registration.js";
import Login from "./LoginForm.js";
import { BrowserRouter as Routers,Routes,Route,Link} from "react-router-dom";
function App(){
    return(
        <div>
        <Routers>
            <Routes>
            <Route path="/" element={<Registration/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/a" element={<StudentData/>}/>
            <Route path="/StudentForm1" element={<StudentForm/>}/>
            <Route path="/studentedit/:stid" element={<StudentEditForm/>}/>
            </Routes>
        </Routers>
        </div>
    )
}
export default App;