import "./App.css";
import Form from "./components/members-recruitment/form/form";
import LandingPage from "./components/members-recruitment/landing-page/landing-page";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
function App() {
    return (
        <>

                <Router>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/recruitment-form" element={<Form />} />
                    </Routes>
                </Router>
            
        </>
    );
}

export default App;
