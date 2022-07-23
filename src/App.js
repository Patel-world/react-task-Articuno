import Header from "./components/Header";
import Listing from "./components/Listing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path="/home" element={<Listing />}/>
            
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
