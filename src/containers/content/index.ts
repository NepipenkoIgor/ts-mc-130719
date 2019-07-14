import { Dispatch } from 'redux';
import { ContentComponent } from './content.component';
import { connect } from 'react-redux';
import { IRootState } from '../../store/reducers';
import { getUsersPending } from '../../store/actions/user.action';


const mapStateToProps = (state: IRootState) => ({
    search: state.search,
    users: state.users,
})


const mapDispatchToProps = (dispatch: Dispatch) => ({
    getUsers: () => dispatch(getUsersPending())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent);
