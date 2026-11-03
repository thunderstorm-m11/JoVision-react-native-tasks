import React, { Component, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class MyClassPage extends Component {
  componentDidMount() {
    console.log('MyClassPage loaded');
  }

  componentWillUnmount() {
    console.log('MyClassPage unloaded');
  }

  render() {
    return (
      <View style={styles.page}>
        <TextInput
          style={styles.input}
          placeholder="Type here"
          onChangeText={this.props.onTextChange}
        />
      </View>
    );
  }
}

const Task23 = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <MyClassPage onTextChange={setText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  page: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
    fontSize: 18,
  },
});

export default Task23;
