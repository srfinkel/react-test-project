import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Image extends React.Component {
render() {
  return (
      <div className="container">
      <div className="cat1"></div>
        <div className="cat2"></div>
        <div className="cat3"></div>
      </div>
    );
  }
}

ReactDOM.render(<Image />, document.getElementById("root"));
