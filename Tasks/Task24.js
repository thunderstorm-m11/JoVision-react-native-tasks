import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const MyFunctionPage = forwardRef((props, ref) => {
  const [text, setText] = useState('');

  useImperativeHandle(ref, () => ({
    updateText: (value) => setText(value),
  }));

  useEffect(() => {
    console.log('MyFunctionPage loaded');

    return () => {
      console.log('MyFunctionPage unloaded');
    };
  }, []);

  return (
    <View style={styles.page}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
});

const Task24 = () => {
  const pageRef = useRef(null);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        onChangeText={(value) => pageRef.current?.updateText(value)}
      />
      <MyFunctionPage ref={pageRef} />
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

export default Task24;
