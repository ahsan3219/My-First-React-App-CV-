import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Zaid() {
  return (
  <center><form><fieldset>
  <center> <legand>Resume</legand></center>
   <div className="abcd">
     
     <h1>
       <u>
         <i className="name">"Ahsan Raza"</i>
       </u>{" "}
     </h1>
     <h4>Phone No:</h4> 03112324421
     <br />
     <h4>E-Mail:</h4> Ahsanrazasyedahsan@gmail.com
     <p>
       <b>
         {" "}
         <u>My Goals:</u>
       </b>
     </p>
     <p>
       To secure a challenging position in software house to enhance my learnings,
       knowledge, and skills.
     </p>
     <p>
       <b>
         {" "}
         <u>MY EDUCATION:</u>
       </b>
     </p>
     <ul>
      
           SCHOOL:
         <a>Happy palace</a>
  
  <br/>
         <i>
           <u>COLLEGE:</u>
         </i>
         <a>Dehli College</a>
   
  <br/>
         <i>
           <u>UNIVERSITY:</u>
         </i>
         <a>NED UNIVERSITY</a>
       
       </ul>
     <p>
       <b>
         <u>MY SKILLS:</u>
       </b>
     </p>
     <ul>
       Active Listening.
  <br/>
       programming.
       
  <br/>HTML CSS.
       
  <br/>Computer Skills.
       
  <br/>Problem Solving Skills.
     </ul>
     <p>
       <b>
         <u>MY ACTIVITIES:</u>
       </b>
     </p>
 
     <ul>
       Reading books.
       
  <br/>Painting.
       
  <br/>Learning Other Languages.
       
  <br/>Participation in competitions.
     </ul>
   </div> </fieldset></form></center>
  );
}

ReactDOM.render(<Zaid />, document.querySelector("#root"));
