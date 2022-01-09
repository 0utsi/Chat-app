import './App.css';
import { useState } from 'react'
import { MessageForm } from './Components/MessageForm';
import moment from 'moment/moment.js'
import { Messages } from './Components/Messages';
import { Members } from './Components/Members';


function App() {

	const [messages, setMessages] = useState([])

	const sendMessage = (msg) => {

		if (msg.trim(' ') === '') {

		} else {

			const newMessageList = [
				{
					author: 'gosc',
					time: moment().calendar().toString(),
					message: msg
				},
				...messages
			]
			setMessages(newMessageList);

			console.log(newMessageList)
		}

	}

	return (
		<div className="App">
			<Messages
				message={messages}
			/>
			<Members />
			<MessageForm sendMessage={sendMessage} />
		</div>
	);
}

export default App;