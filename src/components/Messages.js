import React, { Component } from 'react';
import MessagesList from '../containers/MessagesList';
import  AddMessage from '../containers/AddMessage';

class Messages extends Component
{
	render() {
		return (
			<div>
				<MessagesList />
				<AddMessage isMe={false} />
				<hr className="cBorder" />
				<MessagesList />
				<AddMessage isMe={true}/>
			</div>
		);
	}
}

export default Messages;