import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App'

// class App extends React.Component{
// 	render(){
// 		return(<div>hello</div>);
// 	}
// }

ReactDom.render(<App/>,document.querySelector('#root'));