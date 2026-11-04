import React, { useState } from 'react';
import { View, Text, Button, Modal, ActivityIndicator, StyleSheet } from 'react-native';

const Task26 = () => {
  const [ip, setIp] = useState('');
  const [blocking, setBlocking] = useState(false);

  const getIpNonBlocking = () => {
    fetch('https://api.ipify.org/')
      .then(response => response.text())
      .then(result => setIp(result))
      .catch(error => setIp(`Error: ${error.message}`));
  };

  const getIpBlocking = async () => {
    setBlocking(true);
    try {
      const response = await fetch('https://api.ipify.org/');
      const result = await response.text();
      setIp(result);
    } catch (error) {
      setIp(`Error: ${error.message}`);
    } finally {
      setBlocking(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Get IP (Non-blocking)" onPress={getIpNonBlocking} />
      </View>
      <View style={styles.button}>
        <Button title="Get IP (Blocking)" onPress={getIpBlocking} />
      </View>
      <Text style={styles.text}>{ip}</Text>

      <Modal visible={blocking} transparent animationType="fade">
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.overlayText}>Loading...</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 8,
    width: '70%',
  },
  text: {
    marginTop: 20,
    fontSize: 24,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  overlayText: {
    marginTop: 10,
    color: '#fff',
    fontSize: 18,
  },
});

export default Task26;
