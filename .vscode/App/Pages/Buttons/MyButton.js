import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function MyButton  () {
  const [buttonTitle, setButtonTitle] = useState('Click me');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleButtonPress = () => {
    // Change button properties when pressed
    setButtonTitle('Pressed!');
    setButtonDisabled(false);

    // Additional logic or actions can be performed here
  };

  return (
    <View style={styles.container}>
      <Button
        title={buttonTitle}
        onPress={handleButtonPress}
        disabled={buttonDisabled}
        style={styles.button} // Apply styles directly to the button
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    // Define your styles for the button
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 22,
    padding: 10,
    borderRadius: 20,
    width: "80%"
  },
});

