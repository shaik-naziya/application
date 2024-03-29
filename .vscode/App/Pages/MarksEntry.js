import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function MarksEntry({ navigation }) {
  const handleEnterMarks = () => {
    navigation.navigate('EnterMarks'); // Navigate to the EnterMarks page
  };
  const handlePortfolioPress = () => {
    navigation.navigate("StudentProfile");
  };

  const handleHomeClick = () => {
    navigation.navigate("StudentsAttendance");
  };

  const handleAttendanceClick = () => {
    navigation.navigate("StudentsAttendanceUpdate");
  };

  const handleReportsClick = () => {
    navigation.navigate("MarksEntry");
  };

  const handleActivityClick = () => {
    navigation.navigate("Activities");
  };

  const handleStudentsFormClick = () => {
    navigation.navigate("StudentsForm");
  };

  const handleTutorsFormClick = () => {
    navigation.navigate("TutorsForm");
  };

  const handleStudentProfileClick = () => {
    navigation.navigate("StudentProfile");
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
        <TouchableOpacity onPress={handleHomeClick}>
          <Image
            style={styles.bottomIcon}
            source={require("./../Assets/Images/home.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAttendanceClick}>
          <Image
            style={styles.bottomIcon}
            source={require("./../Assets/Images/attendance.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleStudentsFormClick}>
          <Image
            style={styles.bottomIcon}
            source={require("./../Assets/Images/addButton.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTutorsFormClick}>
          <Image
            style={styles.bottomIcon}
            source={require("./../Assets/Images/addIcon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleStudentProfileClick}>
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
    bottom: 0,
    left: 0,
    right: 0,
    // top: 210,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
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
