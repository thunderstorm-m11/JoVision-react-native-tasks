import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const MyFunctionPage = ({ onTextChange }) => {
  useEffect(() => {
    console.log('MyFunctionPage loaded');

    return () => {
      console.log('MyFunctionPage unloaded');
    };
  }, []);

  return (
    <View style={styles.page}>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        onChangeText={onTextChange}
      />
    </View>
  );
};

const Task22 = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <MyFunctionPage onTextChange={setText} />
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

export default Task22;
