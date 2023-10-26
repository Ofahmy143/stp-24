import "./formTitle.css";

const formTitle = ({ title }: { title: string }) => {
  return (
    <div className="formTitle">
      <h1>{title}</h1>
    </div>
  );
};

export default formTitle;
