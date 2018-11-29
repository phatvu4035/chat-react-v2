import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import {selectUser} from '../actions';

const mapStateToProps = (state) => {
	return {
		users: state.users,
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		selectUser: (id, name) => {
			dispatch( selectUser(id, name) );
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
