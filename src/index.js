import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

class Image extends React.Component {
    render() {
      return (
        <div className="container">
          <div className="d-flex-column">
          <div className="p-2"><img src={"https://images.unsplash.com/photo-1522199780729-a356c844222a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=6a44a6f40ad77a3fe238cda8e961bf90"} alt="cat" className="img-fluid"/></div>
          <div className="p-2"><img src={"https://images.unsplash.com/photo-1479623186097-2bb07e242ae0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=73252acd5b06eba14ec4021c394a6eb2"} alt="cat" className="img-fluid"/></div>
          <div className="p-2"><img src={"https://images.unsplash.com/photo-1457410129867-5999af49daf7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=9b3e10294b8c722e4698cddd9a190abe"} alt="cat" className="img-fluid"/></div>
          </div>
        </div>
      );
    }
  }

ReactDOM.render(<Image />, document.getElementById("root"));
