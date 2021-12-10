import './App.css';
import { useState } from 'react'


function App() {

	const [messages, setMessages] = useState([])

	const sendMessage = (msg) => {

		const newMessageList = [
			...messages,
			{
				message: msg
			}
		]
		setMessages(newMessageList);

		console.log(newMessageList)
	}

	return (
		<div className="App">
			<Messages message={messages} />
			<Members />
			<MessageForm sendMessage={sendMessage} />
		</div>
	);
}

const Messages = (props) => {

	return (
		<div className="messages">
			{
				props.message.map((message, index) => (
					<Message
						key={message.index}
						optionText={message}
					/>
				))
			}
		</div>
	);
};

const Message = (props) => {

	return (
		<div className="message">
			<p>{props.message}</p>
		</div>
	);

}

const Members = () => {

	return (
		<div className="members">

		</div>
	)
};


const MessageForm = (props) => {

	const [message, setMessage] = useState('')


	const onSubmit = (e) => {

		e.preventDefault();

		props.sendMessage(message)
	}

	return (
		<div>
			<form className="mess-form" onSubmit={onSubmit}>
				<button
					type="submit"
					className="mess-btn"
				>
					<i className="far fa-paper-plane fa-2x"></i>
				</button>
				<input
					type="text"
					name="option"
					className="mess-input"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<div className="mess-info"></div>
			</form>
		</div>
	);
};


export default App;





