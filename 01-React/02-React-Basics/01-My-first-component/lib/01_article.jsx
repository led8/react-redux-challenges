import React from 'react';
import ReactDOM from 'react-dom';
// import React, { Component } from 'react';

const Article = (props) => {
  return (
    <div className='article'>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
};

// class Article extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 0
//     };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   }

//   render() {
//     return (
//       <div className='article' onClick = {this.handleClick}>
//         <h2>{this.props.title}</h2>
//         <p>{this.props.body}</p>
//         <p>{this.state.counter}</p>
//       </div>
//     );
//   }
// }

const container = document.querySelector('.container');
ReactDOM.render(<Article title="My fancy new product" body="Test it now!" />, container);

export default Article;
