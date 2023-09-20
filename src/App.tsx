import "./App.css";
// import Form from "./components/members-recruitment/form/form";
// import LandingPage from "./components/members-recruitment/landing-page/landing-page";
import { LandingPage as OrientationLandingPage } from "./routes/orientation/landingPage/LandingPage.route";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OrientationForm } from "./routes/orientation/orientationForm/orientationForm.route";
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<OrientationLandingPage />} />
                    <Route
                        path="/orientation"
                        element={<OrientationLandingPage />}
                    />

                    <Route
                        path="/orientation/form"
                        element={<OrientationForm />}
                    />

                    {/* <Route path="/recruitment-form" element={<Form />} /> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
