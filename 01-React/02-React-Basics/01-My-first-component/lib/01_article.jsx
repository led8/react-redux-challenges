import React from 'react';
// import ReactDOM from 'react-dom';

const Article = (props) => {
  return (
    <div className='article'>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
};

// const container = document.querySelector('.container');
// ReactDOM.render(<Article title="My fancy new product" body="Test it now!" />, container);

export default Article;

