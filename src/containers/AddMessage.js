import {connect} from 'react-redux';
import AddMessage from '../components/AddMessage';
import {addMess} from '../actions';

const mapStateToProps = (state) => {
	return {
		userChat: state.userChat
	}
}

const mapDispatchToProps = (dispatch, props) =>  {
	return {
		addMes: (message, author) => {
			dispatch(addMess(message, author));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMessage);