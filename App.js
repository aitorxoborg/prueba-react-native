import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
      <View style={styles.container}>
        <Text>Has presionado el botón {count} veces.</Text>
        <Button title="Presiona" onPress={() => setCount(count + 1)} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
