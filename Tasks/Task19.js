import React, { Component, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class MyClassPage extends Component {
  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.text}>This is MyClassPage</Text>
      </View>
    );
  }
}

const Task19 = () => {
  const [showPage, setShowPage] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={() => setShowPage(true)} />
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

export default Task19;
