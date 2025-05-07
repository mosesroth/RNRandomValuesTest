import 'react-native-get-random-values';
import { Image } from 'expo-image';
import { Platform, StyleSheet, Button } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [randomUUID, setRandomUUID] = useState(uuidv4());
  const [randomValues, setRandomValues] = useState(() => {
    const array = new Uint8Array(10);
    crypto.getRandomValues(array);
    return Array.from(array).join(', ');
  });

  const generateNewValues = () => {
    setRandomUUID(uuidv4());
    const array = new Uint8Array(10);
    crypto.getRandomValues(array);
    setRandomValues(Array.from(array).join(', '));
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.demoContainer}>
        <ThemedText type="subtitle">react-native-get-random-values Demo</ThemedText>
        
        <ThemedView style={styles.demoSection}>
          <ThemedText type="defaultSemiBold">UUID v4 (using uuid + react-native-get-random-values):</ThemedText>
          <ThemedText selectable={true}>{randomUUID}</ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.demoSection}>
          <ThemedText type="defaultSemiBold">crypto.getRandomValues() result:</ThemedText>
          <ThemedText selectable={true}>{randomValues}</ThemedText>
        </ThemedView>
        
        <Button 
          title="Generate New Random Values" 
          onPress={generateNewValues}
          color="#A1CEDC"
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  demoContainer: {
    gap: 12,
    marginBottom: 16,
    padding: 16,
    backgroundColor: 'rgba(161, 206, 220, 0.2)',
    borderRadius: 8,
  },
  demoSection: {
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
