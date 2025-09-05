import "./styles.css";

const allSkills = [
  { skillName: "HTML", color: "blue", level: "advance" },
  { skillName: "JAVASCRIPT", color: "red", level: "advance" },
  { skillName: "CSS", color: "yellow", level: "advance" },
  { skillName: "JAVA", color: "lightgreen", level: "advance" },
  { skillName: "PYTHON", color: "purple", level: "advance" },
  { skillName: "REACT", color: "orange", level: "beginner" },
  { skillName: "NODE", color: "lightblue", level: "intermediate" },
  { skillName: "EXPRESS", color: "brown", level: "intermediate" },
  { skillName: "NEXT", color: "gray", level: "beginner" },
];

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
      {allSkills.map((skill) => (
        <Skill
          skillName={skill.skillName}
          color={skill.color}
          level={skill.level}
        />
      ))}
    </div>
  );
}

function Skill({ skillName, color, level }) {
  return (
    <span style={{ backgroundColor: color }} className="skill">
      {skillName} {level === "advance" && "💪"}{" "}
      {level === "intermediate" && "😎"} {level === "beginner" && "🙂"}
    </span>
  );
}

export default App;
