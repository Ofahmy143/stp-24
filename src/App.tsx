import "./App.css";
import Form from "./components/members-recruitment/form/form";
import LandingPage from "./components/members-recruitment/landing-page/landing-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
    return (
        <>

                <Router>
                    <Routes>
                        <Route path="/stp-24" element={<LandingPage />} />
                        <Route path="/stp-24/recruitment-form" element={<Form />} />
                    </Routes>
                </Router>
            
        </>
    );
}

export default App;
