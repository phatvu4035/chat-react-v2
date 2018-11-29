import React from 'react';
import propTypes from 'prop-types';
import Message from './Message';

const MessagesList = ({messages}) =>  {
	return <section id="messages-list">
		<ul>
			{messages.map((message, i) => (
				<Message
					key={i}
					{...message.id}
					{...message.author}
					{...message}
				/>
			))}
		</ul>
	</section>
}

MessagesList.propTypes = {
	messages: propTypes.arrayOf(
		propTypes.shape({
			message: propTypes.string.isRequired,
			author: propTypes.string.isRequired,
		})
	).isRequired
}

export default MessagesList;