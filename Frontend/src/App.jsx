import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_Page from "./Components/Home_Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home_Page />} />
      </Routes>
    </Router>
  )
}

export default App
