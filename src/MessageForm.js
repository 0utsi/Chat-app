import { useState } from 'react';
import { Info } from './Info';

export const MessageForm = (props) => {

	const [message, setMessage] = useState('');


	const onSubmit = (e) => {

		e.preventDefault();

		props.sendMessage(message);

		e.target.elements.option.value = "";
	};



	const handleUserKeyPress = (e) => {

		if (e.which === 13 && !e.shiftKey) {
			e.preventDefault();



		}
	};


	return (
		<div>
			<form className="mess-form" onSubmit={onSubmit}>
				<button
					type="submit"
					className="mess-btn"
				>
					<i className="far fa-paper-plane fa-2x"></i>
				</button>
				<textarea
					onKeyPress={handleUserKeyPress}
					name="option"
					className="mess-input"
					value={message}
					onChange={(e) => setMessage(e.target.value)} />
				<Info />
			</form>
		</div>
	);
};
