import "./WorkshoStyle/main.scss";
import formImg from "../../assets/workshop-form/scroll.svg";
import { Logo } from "../../components/workshop-form/Logo";
import { Formtext } from "../../components/workshop-form/Formtext";
import { useState } from "react";
import { PageOne } from "./PageOne";
import { PageTwo } from "./PageTwo";
import { Python } from "./Python";
import { MachineLearning } from "./MachineLearning";
import { FrontEnd } from "./FrontEnd";
import { GraphicDesign } from "./GraphicDesign";
import { Montage } from "./Montage";
import { LastPage } from "./LastPage";
import { Ajax } from "./helper";
function WorkShopForm() {
  return (
    <div className="form-page">
      <Formtext />
      <Form />
      <Logo />
    </div>
  );
}
function Form() {
  return (
    <div className="form">
      <img src={formImg} alt="form" className="form__img" />
      <FormDetails />
    </div>
  );
}
function FormDetails() {
  const [page, setPage] = useState(1);
  const [selectedCourse1, setSelectedCourse1] = useState("Python");
  const [selectedCourse2, setSelectedCourse2] = useState("Machine-learning");
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [university, setUniversity] = useState("");
  const [faculty, setFaculty] = useState("");
  const [graduation, setGraduation] = useState("");
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const [q5, setQ5] = useState("");
  const [q6, setQ6] = useState("");
  const [q7, setQ7] = useState("");
  const [q8, setQ8] = useState("");
  const handleForm = async function (e) {
    e.preventDefault();
    const workshopParticipant = {
      fullname: fullName,
      national_id: nationalId,
      email,
      phone_number: phone,
      faculty,
      university,
      graduation_year: graduation,
      workshop: selectedCourse1,
      // workshop2: selectedCourse2,
      q1,
      q2,
      q3,
      q4,
      q5,
      q6,
      q7: "yes",
      // q8,
    };
    await Ajax(
      "https://stp-24.onrender.com/workshop-registeration/add-participant",
      workshopParticipant
    );
    console.log(workshopParticipant);
  };
  const handleNextButton = function (e) {
    e.preventDefault();
    if (page > 3) return;
    if (
      page === 1 &&
      (fullName === "" ||
        nationalId == "" ||
        email === "" ||
        phone === "" ||
        university === "" ||
        faculty === "" ||
        graduation === "")
    ) {
      alert("fill all inputs First");
      return;
    }
    // if( page === 2 && (selectedCourse1===selectedCourse2) {
    if (page === 2 && selectedCourse1 === selectedCourse2) {
      alert("preferences must be different");
      return;
    }
    setPage((p) => p + 1);
  };
  const handlePreviousButton = function (e) {
    e.preventDefault();
    if (page < 2) return;
    else setPage((p) => p - 1);
  };
  return (
    <form className="form__details" onSubmit={handleForm}>
      {page === 1 && (
        <PageOne
          fullName={fullName}
          onSetFullname={setFullName}
          nationalId={nationalId}
          onSetNationalId={setNationalId}
          email={email}
          onSetEmail={setEmail}
          phone={phone}
          onSetPhone={setPhone}
          university={university}
          onSetUniversity={setUniversity}
          faculty={faculty}
          onSetFaculty={setFaculty}
          graduation={graduation}
          onSetGraduation={setGraduation}
        />
      )}
      {page === 2 && (
        <PageTwo
          selectedCourse1={selectedCourse1}
          selectedCourse2={selectedCourse2}
          onSetCourse1={setSelectedCourse1}
          onSetCourse2={setSelectedCourse2}
        />
      )}
      {page === 3 && selectedCourse1 === "Montage" && <Montage />}
      {page === 3 && selectedCourse1 === "Python" && (
        <Python
          q4={q4}
          q5={q5}
          q6={q6}
          q7={q7}
          onSetQ4={setQ4}
          onSetQ5={setQ5}
          onSetQ6={setQ6}
          onSetQ7={setQ7}
        />
      )}
      {page === 3 && selectedCourse1 === "Machine-learning" && (
        <MachineLearning
          q4={q4}
          q5={q5}
          q6={q6}
          onSetQ4={setQ4}
          onSetQ5={setQ5}
          onSetQ6={setQ6}
        />
      )}
      {page === 3 && selectedCourse1 === "Graphic-desgin" && (
        <GraphicDesign
          q4={q4}
          q5={q5}
          q6={q6}
          q7={q7}
          q8={q8}
          onSetQ4={setQ4}
          onSetQ5={setQ5}
          onSetQ6={setQ6}
          onSetQ7={setQ7}
          onSetQ8={setQ8}
        />
      )}
      {page === 3 && selectedCourse1 === "Front-end" && (
        <FrontEnd
          q4={q4}
          q5={q5}
          q6={q6}
          onSetQ4={setQ4}
          onSetQ5={setQ5}
          onSetQ6={setQ6}
        />
      )}
      {page === 4 && (
        <LastPage
          q1={q1}
          onSetQ1={setQ1}
          q2={q2}
          onSetQ2={setQ2}
          q3={q3}
          onSetQ3={setQ3}
        />
      )}
      <div className="form__button">
        {page > 1 && (
          <button className="button" onClick={handlePreviousButton}>
            previous
          </button>
        )}
        {page < 4 ? (
          <button className="button" onClick={handleNextButton}>
            next
          </button>
        ) : (
          <button type="submit" className="button">
            submit
          </button>
        )}
      </div>
    </form>
  );
}
export default WorkShopForm;
