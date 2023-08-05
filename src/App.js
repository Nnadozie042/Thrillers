import React from "react";
import Booking from "./Components/Booking";
import Home from "./Components/Home"
import{ Routes,Route}from 'react-router-dom';
import Service from "./Components/Service"

function App() {
  return (
    <Routes>
      <Route exact path="/"element={<Home/>}/>
      <Route path="/Booking"element={<Booking/>}/>
      <Route path="/Service"element={<Service/>}/>
    </Routes>
    
  );
}

export default App;