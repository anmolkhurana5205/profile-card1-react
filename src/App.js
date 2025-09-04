import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="container">
        <Header />
        <Data />
        <Skills />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="/Snapchat-1300530555.jpg"
      alt="profile"
      height="250px"
      className="avatar"
    />
  );
}

function Header() {
  return <h1>Anmol Khurana</h1>;
}

function Data() {
  return (
    <p className="data">
      Good morning/afternoon. My name is Anmol Khurana, and I am currently
      pursuing Bachelor of Technology in Computer Science and Engineering at
      Krishna Institute of Engineering & Technology, with an expected graduation
      in 2027.
    </p>
  );
}

function Skills() {
  return (
    <div className="skill-list">
      <Skill skillName="HTML 😖" color="blue" />
      <Skill skillName="JAVASCRIPT 🫡" color="red" />
      <Skill skillName="CSS 🫠" color="yellow" />
      <Skill skillName="JAVA 🤫" color="lightgreen" />
      <Skill skillName="PYTHON 😱" color="purple" />
      <Skill skillName="REACT 😩" color="orange" />
      <Skill skillName="NODE 😡" color="lightblue" />
      <Skill skillName="EXPRESS 🤤" color="brown" />
      <Skill skillName="NEXT 😶" color="gray" />
    </div>
  );
}

function Skill({ skillName, color }) {
  return (
    <span style={{ backgroundColor: color }} className="skill">
      {skillName}
    </span>
  );
}

export default App;
