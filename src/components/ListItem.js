import React, { Component } from 'react';
import { Dimensions, View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import ApproveStatusImage from '../assets/approve.png';
import DisapproveStatusImage from '../assets/disapprove.png';

const { width } = Dimensions.get('window');
const height = 200;

const styles = StyleSheet.create({
  container: { width, height, position: 'relative' },
  image: { resizeMode: 'cover', width, height },
  video: { width, height },
  mark: { width: 40, height: 40, position: 'absolute', right: 40, top: 80 },
});

class ListItem extends Component {
  static propTypes = {
    data: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    status: PropTypes.string,
  };

  static defaultProps = {
    status: 'approved',
  };

  state = { status: null };

  render() {
    const { data, status } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: data.thumbnail || data.url }} />
        <Image
          style={styles.mark}
          source={status === 'approved' ? ApproveStatusImage : DisapproveStatusImage}
        />
      </View>
    );
  }
}

export default ListItem;
