import './App.css';
import { useState } from 'react'
import { MessageForm } from './MessageForm';


function App() {

	const [messages, setMessages] = useState([{}])

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
				props.message.map(({ message }) => (
					<Message
						key={message}
						messageText={message}
					/>
				))
			}
		</div>
	);
};



const Message = (props) => {

	return (
		<div className="message">
			<p className="mess">{props.messageText}</p>
		</div>
	);

}

const Members = () => {

	return (
		<div className="members">
			<img id="react-img" alt="img" src="./logo512.png" />
		</div>
	)
};


export default App;





