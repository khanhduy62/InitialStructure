import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Immutable from 'immutable';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default class Counter extends Component {
  static propTypes = {
    incrementAmount: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func,
    incrementAsync: PropTypes.func.isRequired,
    decrementAmount: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { incrementAsync } = props;
    this.incrementAsync = () => incrementAsync();
  }

  render() {
    const {
      incrementAmount, incrementIfOdd, decrementAmount, counter
    } = this.props;
    return (
      <View>
        <Text style={styles.text}>Clicked:  { counter['counter'] } times</Text>
        <TouchableHighlight onPress={incrementAmount}>
          <Text style={styles.text}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={decrementAmount}>
          <Text style={styles.text}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={incrementIfOdd}>
          <Text style={styles.text}>Increment if odd</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.incrementAsync}>
          <Text style={styles.text}>Increment async</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
