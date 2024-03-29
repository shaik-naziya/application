import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

export default function Activities() {
  const navigation = useNavigation();

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
  const handlePlusPress = () => {
    navigation.navigate("ActivityPlans");
  };


  return (
    <View style={styles.container}>
      <View style={styles.horizontalContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("./../Assets/Images/calender.png")}
            style={styles.calendarImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Wonderla</Text>
            <Text style={styles.subtitleText}>Wonderla Tour Plan</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={handlePlusPress}>
        <Image
          style={styles.plusImage}
          source={require("./../Assets/Images/plus.png")}
        />
      </TouchableOpacity>

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
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    // paddingTop: 10,
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    width: "100%",
    marginTop: 15,
    // marginLeft: 4,
    height: 72,
  },

  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  calendarImage: {
    width: 50, // Adjust as needed
    height: 50, // Adjust as needed
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "column",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitleText: {
    fontSize: 14,
    marginTop: 5,
  },
  plusImage: {
    marginLeft: 272,
    marginTop: 400,
  },
  bottomContainer: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 16,
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
