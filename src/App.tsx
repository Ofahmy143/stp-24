// import "./App.css";
// import Form from "./components/members-recruitment/form/form";
// import LandingPage from "./components/members-recruitment/landing-page/landing-page";
// import { LandingPage as OrientationLandingPage } from "./routes/orientation/landingPage/LandingPage.route";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import { OrientationForm } from "./routes/orientation/orientationForm/orientationForm.route";
// import WorkShopForm from "./routes/WorkshopForm/WorkshopForm";
import MacathonForm from "./components/Macathon-Components/form/form";
import WorkshopForm from "./components/Macathon-Components/form/workshop.form";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/workshop/form" element={<WorkshopForm />} />
          <Route path="/macathon/form" element={<MacathonForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
