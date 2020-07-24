import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthData} from '../redux/auth/auth-selectors';

const withAuth = (Component) => {
  class AccessibleComponent extends React.Component {
    render() {
      if (!this.props.auth.id) {
        return <Redirect to='/login'/>
      }
      return <Component {...this.props} auth={this.props.auth}/>
    }
  }

  return connect(mapStateToProps)(AccessibleComponent);
};

const mapStateToProps = (state) => ({
  auth: getAuthData(state)
});

export default withAuth;