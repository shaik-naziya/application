import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function MarksEntry({ navigation }) {
  const handleEnterMarks = () => {
    navigation.navigate('EnterMarks'); // Navigate to the EnterMarks page
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Your horizontal containers */}
        {Array.from({ length: 10 }).map((_, index) => (
          <View style={styles.horizontalContainer} key={index}>
            <View style={styles.detailsContainer}>
              <Text style={styles.name}>Name: John Doe</Text>
              <Text style={styles.id}>ID: 12345</Text>
            </View>
            <TouchableOpacity style={styles.enterMarksButton} onPress={handleEnterMarks}>
              <Text style={styles.buttonText}>Enter Marks</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Bottom container */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("StudentsAttendance")}>
          <Image
            style={styles.bottomIcon}
            source={require("./../Assets/Images/home.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("StudentsForm")}>
          <Image
            style={styles.bottomIcon}
            source={require("./../Assets/Images/addIcon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("StudentsAttendanceUpdate")}>
          <Image
            style={styles.bottomIcon}
            source={require("./../Assets/Images/attendance.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ReportsPage")}>
          <Image
            style={styles.bottomIcon}
            source={require("./../Assets/Images/reports.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("StudentProfile")}>
          <Image
            style={styles.bottomIcon}
            source={require("./../Assets/Images/profile.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100, // Adjust as per bottom container height
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    width: "95%",
    marginTop: 15,
    marginLeft: 8,
    height: 72,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  id: {
    fontSize: 16,
    marginTop: 5,
    color: "#3D404A",
  },
  enterMarksButton: {
    backgroundColor: '#000000',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 38,
    width: 110,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#fff",
  },
  bottomIcon: {
    width: 70,
    height: 50,
    resizeMode: "contain",
  },
});
