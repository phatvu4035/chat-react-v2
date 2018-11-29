import React from 'react';
import propTypes from 'prop-types';

const Message = (message) => (
	<p>
		<i>{message.author}</i>: {message.message}
	</p>
)

Message.propTypes = {
	message: propTypes.string.isRequired,
	author: propTypes.string.isRequired,
}

export default Message;