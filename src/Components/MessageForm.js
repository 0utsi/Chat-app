import { useState } from 'react';
import { Info } from './Info';
import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import Picker from 'emoji-picker-react';

export const MessageForm = (props) => {

	const [message, setMessage] = useLocalStorage('message', '');

	const onSubmit = (e) => {

		e.preventDefault();

		props.sendMessage(message);

		setMessage('');

	};



	return (
		<div>
			<form className="mess-form" onSubmit={onSubmit}>

				<button type="submit" className="send-btn">
					<i className="far fa-paper-plane"></i>
				</button>

				<input
					name="option"
					autocomplete="off"
					className="mess-input"
					value={message}
					placeholder="Aa"
					onChange={(e) => setMessage(e.target.value)} />
				<Info />


			</form>
		</div>
	);
};


