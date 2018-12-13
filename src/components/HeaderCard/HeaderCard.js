import React from "react";
import "./HeaderCard.css"

export default class Card extends React.Component {
    render () {
        return (
          <div className = "container top-card">
                    <div className="card card-content">
                      <div className="card-title">
                        <span>Full Stacks Web Developer</span>
                      </div>
                      <hr></hr>
                      <div className="card-section">
                        <p>I am a junior web developer with knowledge of HTML 5, CSS, JavaScript, jQuery, MYSQL, ExpressJS, Node, and React.
                          I'm always looking for new challenges and experiences. This portfolio showcases my current ability and displays my past and current projects. I intend to devlop my skills even further and contribute them towards the needs of future clients.
                          <br></br>
                          <br></br>
                          This portfolio still under construction and will be updated as much as possible.
                          <br></br>
                          <br></br>
                          Thank you for taking the time to look!
                        </p>
                      </div>
                    </div>
                  </div>
                  );
                  
            
    }
} 
