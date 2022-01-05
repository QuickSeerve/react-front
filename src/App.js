import React from "react";
import { Route } from 'react-router-dom'
import Homepage from "./pages/Homepage";


function App() {
  return (
   <>
    <div>
      <Route path='/' exact component={Homepage} />
    </div>
   </>
  );
}

export default App;
