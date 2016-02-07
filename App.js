import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = { 
			txt: 'this is the state txt',
			cat: 0
		}
	}
	update(e){
		this.setState({txt: e.target.value})
	}
	render(){
		return (
			<div>
			<input type ="text"
				onChange={this.update.bind(this)} />
			<h1>{this.state.txt}</h1>
			</div>
		);
	}
}
export default App
/*=========================================================
=          THis is how to create/write props            =
=========================================================*/

// import ReactDOM from 'react-dom';
// class App extends React.Component {
// 	render(){
// 		let txt = this.props.txt
// 		// return <h1>{this.props.txt}</h1>
// 		return <h1>{txt}</h1>
// 	}
// }

// App.propTypes = {
// 	txt: React.PropTypes.string,
// 	cat: React.PropTypes.number.isRequired
// }

// App.defaultProps ={
// 	txt: 'this is the default txt'
// }
// ReactDOM.render(
// 	// <App cat={5} txt="this is the props value" />, this txt overwrites the defaultProps one, so take out
// 	<App cat={5} />,
// 	document.getElementById('app')
// 	);

/*=====  End of THis is how to create/write props  ======*/


/* THIS IS THE ORIGINAL BEFORE PROPS */

// class App extends React.Component {
// 	render(){
// 		return (
// 			<div>
// 			<h1>Hello World</h1>
// 			<b>Bold</b>
// 			</div>
// 			);
		
// 	}
// }

// export default App
