import React from 'react';
import propTypes from 'prop-types';

const Sidebar = (props) => {
	return <aside id="sidebar">
			<ul>
				{props.users.map(user => (
					<li 
						className="user-item" 
						key={user.id}
						onClick = { (e) => {
							props.selectUser(user.id, user.name)
						}}
					>
						{user.name}
					</li>
				))}
			</ul>
	</aside>		
}

Sidebar.propTypes = {
	users: propTypes.arrayOf(propTypes.shape({
		id: propTypes.number.isRequired,
		name: propTypes.string.isRequired,
	}).isRequired
	).isRequired
}

export default Sidebar;