'use strict';

function Homepage() {
  // return <div>
  //     <p>Welcome, user!</p>
  //     <a href="/cards">Go to trading cards.</a><br></br>
  //     <img src="/static/img/balloonicorn.jpg" alt="a balloonicorn"></img>
  //     <br></br>
  //     <a href="/about-the-author">Meet the author!</a>
  // </div>;
  return (
    <React.Fragment>
      <div>
        <a href="/cards">Go to the cards page</a>
      </div>
      <br></br>
      <div>
        <a href="about-the-author">Go to the about page</a>
      </div>
      <br></br>
      <img src="/static/img/balloonicorn.jpg" alt="" />
    </React.Fragment>
  );
}

// ReactDOM.render takes in 2 arguments:
  // 1. Component to render
  // 2. HTML element (where to place component)
// Nothing will be put in page without 'ReactDOM.render
ReactDOM.render(<Homepage />, document.querySelector('#app'));
