import "./formTitle.css";

const formTitle = ({ title }: { title: string }) => {
  return (
    <div className="formTitle">
      <p>{title}</p>
    </div>
  );
};

export default formTitle;
