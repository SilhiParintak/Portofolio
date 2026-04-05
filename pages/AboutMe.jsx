import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
const About = () => {
  return (
    <div className="section">
      <img
        src="img.jpeg"
        alt="profil"
        className="profile-img"
      />

      <h1>About Me</h1>
    
     <div className="bio-frame">
       <div className="bio-row">
       <span className="label">Name</span>
       <span>: Silhi Marita Parintak</span>
     </div>

     <div className="bio-row">
       <span className="label">Date Of Birth</span>
        <span>: March 21, 2005</span>
     </div>

     <div className="bio-row">
       <span className="label">Hobby</span>
        <span>: Sport </span>
     </div>

    <div className="bio-row">
       <span className="label">Address</span>
       <span>: Soribo</span>
   </div>

     <div className="bio-row">
      <span className="label">Origin</span>
       <span>: Toraja Utara</span>
   </div>
  </div>

      <h2>My Skill</h2>

      <div className="skill-icons">
    <div>
      <FaHtml5 className="html" />
      <p>HTML</p>
    </div>

    <div>
      <FaCss3Alt className="css" />
      <p>CSS</p>
    </div>

    <div>
      <FaJs className="js" />
      <p>JavaScript</p>
    </div>

    <div>
      <FaReact className="react" />
      <p>React JS</p>
    </div>
  </div>
 </div>
  );
};

export default About;