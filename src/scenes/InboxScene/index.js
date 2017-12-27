import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MessagesList from './MessagesList';
import {getMailsData} from '../../actions/index';

class App extends Component {
  componentDidMount() {
    this.props.getMailsData();
  }

  render() {
    return (
      <div>
        <MessagesList messages={this.props.messages}/>
      </div>
    );
  }
}

App.propTypes = {
  messages: PropTypes.array.isRequired
};

const mapStateToProps = ({MessagesData}) => ({messages: MessagesData.data});
const mapDispatchToProps = {getMailsData};

export default connect(mapStateToProps, mapDispatchToProps)(App);