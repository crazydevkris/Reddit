import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import ListItem from '../components/ListItem';

class ApproveList extends Component {
  static propTypes = {
    data: PropTypes.shape(),
  };

  static defaultProps = {
    data: {
      data: [],
    },
  };

  state = { filteredRedditData: [] };

  componentWillMount = () => {
    this.getFilteredData(filteredData => this.setState({ filteredData }));
  }

  getFilteredData = (callback) => {
    const { data: { data } } = this.props;
    AsyncStorage.getItem('ApprovedList', (errApproved, approvedListString) => {
      const approvedList = JSON.parse(approvedListString || '[]');
      AsyncStorage.getItem('DisapprovedList', (errDisapproved, disapprovedListString) => {
        const disapprovedList = JSON.parse(disapprovedListString || '[]');
        const filteredList = data.map(item => ({
          ...item,
          status:
            approvedList.indexOf(item.data.id) !== -1
              ? 'approved'
              : ((disapprovedList.indexOf(item.data.id) !== -1) && 'disapproved') || null,
        })).filter(item => item.status);
        callback(filteredList);
      });
    });
  }

  keyExtractor = item => item.data.id;

  renderItem = data => (
    <ListItem {...data.item} />
  );

  render() {
    const { filteredData } = this.state;
    return (
      <FlatList
        data={filteredData}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
  data: state.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(ApproveList);
