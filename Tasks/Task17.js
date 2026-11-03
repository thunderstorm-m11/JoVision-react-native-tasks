import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Task17 = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title={visible ? 'Hide' : 'Show'}
        onPress={() => setVisible(!visible)}
      />
      {visible && <Text style={styles.name}>Mohammad Hijazi</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    marginTop: 20,
    fontSize: 24,
  },
});

export default Task17;
