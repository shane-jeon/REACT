'use strict';

function About() {
  return (<div>
    <p>About the Author</p>
    <p>Shane is a developing Software Engineer, currently learning new skills and refreshing upon their Hackbright curriculum.

      See their capstone project <a href="https://github.com/shane-jeon/loyalty-program" target="_blank" rel="noreferrer">glow up</a> as well as the new <a href="https://github.com/shane-jeon/DCUniverse_App" target="_blank" rel="noreferrer">DC Comics web app</a> project they started working on in October 2022!

      You can reach Shane through <a href="https://www.linkedin.com/in/shane-jeon-7b2663160/" target="_blank" rel="noreferrer">LinkedIn</a>.
    </p>
  </div>);
}

ReactDOM.render(<About />, document.querySelector('#aboutapp'))