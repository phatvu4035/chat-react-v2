import {connect} from 'react-redux';
import MessagesList from '../components/MessagesList';

const mapStateToProps = (state) => {
	return {
		messages: state.messages
	}
}

export default connect(mapStateToProps, {})(MessagesList);