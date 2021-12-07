import './App.css';



import React, { Component } from 'react'

function App() {

	const Messages = () => {
		return (
			<div className="messages">

			</div>
		)
	};

	const Members = () => {
		return (
			<div className="members">

			</div>
		)
	};

	const MessageForm = () => {
		return (
			<div>
				<form className="mess-form">
					<button className="mess-btn"><i class="far fa-paper-plane fa-2x"></i></button>
					<textarea name="option" className="mess-input" />
					<div className="mess-info"></div>
				</form >
			</div >
		)
	};


	return (
		<div className="App">
			<Messages />
			<Members />
			<MessageForm />
		</div>
	);
}



export default App;





// <header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 			</header>