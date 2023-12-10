import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MacathonForm from "./components/Macathon-Components/form/form";
import ClosedForm from "./routes/closedForm/closedForm.route";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/workshop/form" element={<ClosedForm formTitle="Workshop" />} />
          <Route path="/macathon/form" element={<MacathonForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
