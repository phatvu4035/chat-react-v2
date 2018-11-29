import React from 'react';
import PropTypes from 'prop-types';

const AddMessage = (props) => {
	// Lay user cuoi cung duoc click
	let userChat = [...props.userChat][props.userChat.length - 1];
	let userChatName = "";
	if(typeof userChat !== "undefined") {
		userChatName = userChat.name;
	}
	let input;
	return (
		<section id="new-message">
			<input 
				type="text"
				onKeyPress = { (e) => {
					if(e.key === 'Enter') {
						if(props.isMe === false) {
							props.addMes(input.value, userChatName)
						} else  {
							props.addMes(input.value, "Me")
						}
						input.value = ''
					}
				}}
				ref = { (node) => {
					input = node
				}}
			/>
		</section>
	);
}

AddMessage.propTypes = {
	addMes: PropTypes.func.isRequired
}

export default AddMessage;