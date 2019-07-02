import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log("hello");
    this.setState({
      clicked: true
    });
  }

  render() {
    return (
      <div className={this.state.clicked ? "clicked" : "article"} onClick = {this.handleClick}>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

const container = document.querySelector('.container');
ReactDOM.render(<Article title="My fancy new product" body="Test it now!" />, container);

export default Article;
