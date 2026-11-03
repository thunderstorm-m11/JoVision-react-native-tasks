import React, { Component, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class MyClassPage extends Component {
  state = {
    text: '',
  };

  componentDidMount() {
    console.log('MyClassPage loaded');
  }

  componentWillUnmount() {
    console.log('MyClassPage unloaded');
  }

  updateText = (value) => {
    this.setState({ text: value });
  };

  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.text}>{this.state.text}</Text>
      </View>
    );
  }
}

const Task25 = () => {
  const pageRef = useRef(null);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        onChangeText={(value) => pageRef.current?.updateText(value)}
      />
      <MyClassPage ref={pageRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
    fontSize: 18,
  },
  page: {
    marginTop: 20,
  },
  text: {
    fontSize: 24,
  },
});

export default Task25;
