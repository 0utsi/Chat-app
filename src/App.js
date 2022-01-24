import './App.css';
import { useState, useEffect } from 'react'
import { MessageForm } from './Components/MessageForm';
import moment from 'moment/moment.js'
import { Messages } from './Components/Messages';
import { Members } from './Components/Members';
import useLocalStorage from './Components/useLocalStorage';


function App() {

	const [messages, setMessages] = useState([])
	const [user, setUser] = useState('')


	useEffect(() => {
		if (!user) {
			let person = prompt("Type your nickname please:")
			setUser(person);
		}
	}, [user])




	const sendMessage = (msg) => {

		if (msg.trim(' ') === '') {

		} else {

			const newMessageList = [
				{
					author: user,
					time: moment().calendar().toString(),
					message: msg
				},
				...messages
			]
			setMessages(newMessageList);

		}

	}

	return (
		<div className="App">
			<Messages
				message={messages}
			/>
			<Members />
			<MessageForm
				sendMessage={sendMessage}
			/>
		</div>
	);
}

export default App;