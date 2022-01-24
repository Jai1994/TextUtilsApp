
import "./App.css";
import Navbar from './Component/Navbar';
import About from './Component/About';
import TextForm from "./Component/TextForm";
// import About from './Component/About';
import React, { useState } from 'react';
import Alert from './Component/Alert';
import { type } from "@testing-library/user-event/dist/type";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";

function App() {
   const [mode, setmode] = useState('dark');  // ehether darkmode enable or not
        
   const [alert, setAlert]=useState(null);
   const showAlert=(message, type)=>{
                      setAlert({
                        msg: message,
                        type: type
                      })
                      setTimeout(()=>{

                      },200);
   }
   const toggleMode=()=>{
     if(mode==='light'){
       setmode('dark'); 
       document.body.style.backgroundColor='pink';
       showAlert(" Dark Enevle to show","success");
     }
     else{
        setmode('light');
        document.body.style.backgroundColor='skyblue';
        showAlert(" Light Enevle to show","success");
     }
   }
  return (
   <>

<Router>
{/* <Navbar title="TextUtils1" aboutText="About Us" /> */}
{/* <Navbar/> */}

<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3 ">

<About/>  

<switch> 
       <Routes>
          {/* { <Route exact path="/about">
            <About />
          </Route>  } */}
          <Route exact path="/"

          element={<TextForm heading="Try TextUtils- Word counter, charecter counter counter , remove Extra space, convert upper case to lower case, lower case to upper case"  mode={mode}/>}>
          </Route> 
        </Routes>
         </switch>
        </div>
   </Router>

  </>
 );
}

export default App;
