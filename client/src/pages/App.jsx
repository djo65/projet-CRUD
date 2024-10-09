import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from '../components/form'
import NavBar from '../components/navBar'
import AddForm from "../components/addForm";
import { ContactProvider } from '../components/_Context/ContactContext'
import './App.css'

function App() {
  return (
    <ContactProvider>
        <Router>
            <NavBar />
            <Routes>
                <Route path="/create" element={<AddForm />} />
                <Route path="/" element={<Form />} />
            </Routes>
        </Router>
    </ContactProvider>
);
}

export default App
