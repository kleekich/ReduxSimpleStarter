import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar'



const API_KEY = 'AIzaSyAh2klEtZe45QYuzOwlWUN4UVzPNxpMqOc';



// Create a new component. This component should produce some HTML
//const for final variable(ES6 syntax)
const App = () => {
	//return JSX
	return (
		<div>
			<SearchBar />
		</div>
	);
};


//This this compnent's generated and put it on the page(in the DOM)
ReactDom.render(<App/>, document.querySelector('.container'));

