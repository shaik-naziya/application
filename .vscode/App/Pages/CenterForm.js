import React from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

export default function CenterForm() {
  const navigation = useNavigation(); // Initialize the navigation hook

  const handleSubmit = () => {
    // Implement your submit logic here
    alert('Form submitted! We are delighted you are here...');
    navigation.navigate('StudentsAttendance'); // Navigate to the StudentAttendance page
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>Name of the Center:</Text>
        <TextInput style={styles.input} placeholder="Enter center name" />

        <Text style={styles.label}>Address:</Text>
        <TextInput style={styles.input} placeholder="Enter address" />

        <Text style={styles.label}>Contact Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter contact number"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Contact Designation:</Text>
        <TextInput style={styles.input} placeholder="Enter contact designation" />

        <Text style={styles.label}>Email ID:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email ID"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Google Location:</Text>
        <TextInput style={styles.input} placeholder="Enter Google location" />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 56,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: "#000000",
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  submitText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

  
