import { Info } from './Info';
import useLocalStorage from './useLocalStorage';

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
					// @ts-ignore
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


