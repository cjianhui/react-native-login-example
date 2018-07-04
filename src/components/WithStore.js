import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

// Children as a function example
const WithStore = ({ children, ...props }) => children(props);

// Mirror react-redux's connect function
export default connect(
    (state, { mapStateToProps }) => mapStateToProps(state),
(dispatch, { mapDispatchToProps }) => {
    if (typeof mapDispatchToProps === 'object') {
        return bindActionCreators(mapDispatchToProps, dispatch)
    }
    return mapDispatchToProps(dispatch);
}
)(WithStore);
