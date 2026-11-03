import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MyFunctionPage = () => {
  useEffect(() => {
    console.log('MyFunctionPage loaded');

    return () => {
      console.log('MyFunctionPage unloaded');
    };
  }, []);

  return (
    <View style={styles.page}>
      <Text style={styles.text}>This is MyFunctionPage</Text>
    </View>
  );
};

const Task21 = () => {
  const [showPage, setShowPage] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title={showPage ? 'Hide' : 'Show'}
        onPress={() => setShowPage(!showPage)}
      />
      {showPage && <MyFunctionPage />}
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

export default Task21;
