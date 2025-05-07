import 'react-native-get-random-values';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // We'll use UUID to demonstrate random values

export default function App() {
  const [randomValues, setRandomValues] = useState([]);

  // Generate a random UUID using react-native-get-random-values
  const generateRandomUUID = () => {
    const newUUID = uuidv4();
    setRandomValues([...randomValues, newUUID]);
  };

  // Generate a random number array using the crypto API (enabled by react-native-get-random-values)
  const generateRandomNumbers = () => {
    const array = new Uint32Array(5);
    crypto.getRandomValues(array);
    setRandomValues([...randomValues, `Random numbers: ${Array.from(array).join(', ')}`]);
  };

  // Clear the list
  const clearValues = () => {
    setRandomValues([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Get Random Values Test</Text>
      <Text style={styles.subtitle}>For Fire OS</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Generate UUID" onPress={generateRandomUUID} />
        <Button title="Generate Random Numbers" onPress={generateRandomNumbers} />
        <Button title="Clear" onPress={clearValues} />
      </View>

      <ScrollView style={styles.resultsContainer}>
        {randomValues.map((value, index) => (
          <Text key={index} style={styles.resultText}>
            {value}
          </Text>
        ))}
      </ScrollView>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  resultsContainer: {
    width: '100%',
    maxHeight: 400,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  resultText: {
    fontSize: 14,
    marginBottom: 5,
    padding: 5,
    backgroundColor: '#f0f0f0',
  },
});
