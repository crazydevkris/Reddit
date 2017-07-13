import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ImagePlaceholder from 'react-native-image-with-placeholder';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: { flex: 1, width },
});

const Card = ({ data }) => (
  <ImagePlaceholder
    style={styles.image}
    key={data.thumbnail || data.url}
    activityIndicatorProps={{
      size: 'large',
      color: 'green',
    }}
    src={data.thumbnail || data.url}
  />
);

Card.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Card;
