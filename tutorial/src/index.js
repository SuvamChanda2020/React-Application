import React from 'react'
import ReactDom from 'react-dom'

function Greeting(){
  return <h4>this is Suvam and this is my first Component</h4>
}

ReactDom.render(<Greeting/>, document.getElementById('root'));