export const Messages = (props) => {

	return (
		<div className="messages">
			{props.message.map(({ message, time, author }) => (
				<Message
					messageText={message}
					messageTime={time}
					messageAuthor={author} />
			))}
		</div>
	);
};

const Message = (props) => {

	return (
		<div className="message">
			<span className="time">{props.messageTime} {props.messageAuthor} wrote:</span>
			<p className="mess">{props.messageText}</p>
		</div>
	);

};
