import React, { useState } from 'react';
import { View, Image, Button, Alert, StyleSheet } from 'react-native';

const images = {
  1: require('../Resource/image1.png'),
  2: require('../Resource/image2.png'),
  3: require('../Resource/image3.png'),
};

const Task27 = () => {
  const [selected, setSelected] = useState(1);

  const chooseImage = () => {
    Alert.alert('Choose an image', 'Pick the number of the image to display', [
      { text: '1', onPress: () => setSelected(1) },
      { text: '2', onPress: () => setSelected(2) },
      { text: '3', onPress: () => setSelected(3) },
    ]);
  };

  return (
    <View style={styles.container}>
      <Image source={images[selected]} style={styles.image} />
      <Button title="Choose Image" onPress={chooseImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
});

export default Task27;
