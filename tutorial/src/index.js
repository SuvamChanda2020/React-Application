import React from 'react';
import ReactDom from 'react-dom';

// This function is returning JSX and using React 
function Greeting(){
  return <h4>this is Suvam and this is my first Component</h4>
}

ReactDom.render(<Greeting/>, document.getElementById('root'));