import React, { Component, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

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
        <Text style={styles.text}>This is MyClassPage</Text>
      </View>
    );
  }
}

const Task20 = () => {
  const [showPage, setShowPage] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title={showPage ? 'Hide' : 'Show'}
        onPress={() => setShowPage(!showPage)}
      />
      {showPage && <MyClassPage />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {
    marginTop: 20,
  },
  text: {
    fontSize: 24,
  },
});

export default Task20;
