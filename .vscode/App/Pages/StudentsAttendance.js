import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

import * as Progress from "react-native-progress";

export default function StudentsAttendance() {
  const navigation = useNavigation();

  const handleAddStudentsClick = () => {
    navigation.navigate("AddStudents");
  };

  const handleAttendanceClick = () => {
    navigation.navigate("StudentsAttendanceUpdate");
  };
  const handleTutorAttendanceClick = () => {
    navigation.navigate("TutorsAttendanceUpdate");
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

  const handleHomeClick = () => {
    navigation.navigate("StudentsAttendance");
  };
  const handleStudentProfileClick = () => {
    navigation.navigate("StudentProfile");
  };
  const handleMediatorClick = (type) => {
    // Handle mediator button click based on type
    switch (type) {
      case "Present":
        navigation.navigate("AttendanceHistory"); // Navigate to attendance history page

        break;
      case "Absent":
        // Handle Absent button click
        break;
      case "Leave":
        // Handle Leave button click
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handleAddStudentsClick}>
          <Image
            style={styles.image}
            source={require("./../Assets/Images/status.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleAttendanceClick}>
          <Image
            style={styles.image}
            source={require("./../Assets/Images/attendance.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleReportsClick}>
          <Image
            style={styles.image}
            source={require("./../Assets/Images/reports.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleActivityClick}>
          <Image
            style={styles.image}
            source={require("./../Assets/Images/activity.png")}
          />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Text style={styles.heading}>Today's Attendance</Text>
        <Text style={styles.heading1}>Student's Attendance</Text>
        <Text style={styles.heading2}>Total Students: 50</Text>

        <View style={styles.editButton}> 
          <TouchableOpacity onPress={handleAttendanceClick}>
            <Text style={styles.editButtonText}>Edit Attendance</Text>
          </TouchableOpacity>
          <Image
            style={styles.editPen}
            source={require("./../Assets/Images/editpen.png")}
          />
          <Image
            style={styles.studentImage}
            source={require("./../Assets/Images/students.png")}
          />
        </View>
        <View style={styles.mediator}>
          <TouchableOpacity
            style={styles.mediatorButton}
            onPress={() => handleMediatorClick("Present")}
          >
            <Text style={styles.mediatorButtonText}>Present</Text>
          </TouchableOpacity>
          <View style={styles.verticalLine} />
          <TouchableOpacity
            style={styles.mediatorButton}
            onPress={() => handleMediatorClick("Absent")}
          >
            <Text style={styles.mediatorButtonText}>Absent</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.present}>Present</Text>
        <Progress.Bar
          progress={0.5}
          width={330}
          color="#617AFA"
          height={6}
          borderRadius={30}
          borderColor="#A09F9F"
          marginLeft={15}
        />
        <Text style={styles.presentNumber}>47</Text>
        <Text style={styles.Absent}>Absent</Text>
        <Progress.Bar
          progress={0.5}
          width={330}
          color="red"
          height={6}
          borderRadius={30}
          borderColor="#A09F9F"
          marginLeft={15}
        />
        <Text style={styles.AbsentNumber}>3</Text>

        <Text style={styles.headingTutors}>Tutors's Attendance</Text>
        <Text style={styles.heading2}>Total Tutors: 50</Text>

        <View style={styles.editButton}> 
          <TouchableOpacity onPress={handleTutorAttendanceClick}>
            <Text style={styles.editButtonText}>Edit Attendance</Text>
          </TouchableOpacity>
          <Image
            style={styles.editPen}
            source={require("./../Assets/Images/editpen.png")}
          />
          <Image
            style={styles.studentImage}
            source={require("./../Assets/Images/students.png")}
          />
        </View>
        
        <View style={styles.mediator}>
          <TouchableOpacity
            style={styles.mediatorButton}
            onPress={() => handleMediatorClick("Present")}
          >
            <Text style={styles.mediatorButtonText}>Present</Text>
          </TouchableOpacity>
          <View style={styles.verticalLine} />
          <TouchableOpacity
            style={styles.mediatorButton}
            onPress={() => handleMediatorClick("Absent")}
          >
            <Text style={styles.mediatorButtonText}>Absent</Text>
          </TouchableOpacity>
          <View style={styles.verticalLine} />
          <TouchableOpacity
            style={styles.mediatorButton}
            onPress={() => handleMediatorClick("Leave")}
          >
            <Text style={styles.mediatorButtonText}>Leave</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.present}>Present</Text>
        <Progress.Bar
          progress={0.8}
          width={330}
          color="#617AFA"
          height={6}
          borderRadius={30}
          borderColor="#A09F9F"
          marginLeft={15}
        />
        <Text style={styles.presentNumber}>47</Text>

        <Text style={styles.Absent}>Absent</Text>
        <Progress.Bar
          progress={0.5}
          width={330}
          color="#FF0000"
          height={6}
          borderRadius={30}
          borderColor="#A09F9F"
          marginLeft={15}
        />
        <Text style={styles.AbsentNumber}>20</Text>
        <Text style={styles.leave}>Leave</Text>
        <Progress.Bar
          progress={0.1}
          width={330}
          color="#26D638"
          height={6}
          borderRadius={30}
          borderColor="#A09F9F"
          marginLeft={15}
        />
        <Text style={styles.leaveNumber}>3</Text>

        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={[styles.addButton, { backgroundColor: "black" }]}
            onPress={handleStudentsFormClick}
          >
            <Text style={styles.buttonText}>Add Students</Text>
          </TouchableOpacity>

          {/* Space between buttons */}
          <View style={styles.buttonSpace} />

          {/* Add Tutors Button */}
          <TouchableOpacity
            style={[styles.addButtonRight, { backgroundColor: "black" }]}
            onPress={handleTutorsFormClick}
          >
            <Text style={styles.buttonText}>Add Tutors</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
        <TouchableOpacity onPress={handleAddStudentsClick}>
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
    backgroundColor: "#ffffff",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 20, // Added paddingHorizontal for spacing
  },
  image: {
    height: 50,
    width: 80,
    // marginHorizontal: 5,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 20,
  },
  linesContainer: {
    height: 1.5,
    width: 80,
    backgroundColor: "gray", // You can change the color of the lines
    // paddingLeft: ,
  },
  heading1: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 30,
  },
  heading2: {
    fontSize: 14,
    fontWeight: "500",
    paddingLeft: 30,
    paddingTop: 8,
  },
  editButton: {
    flexDirection: "row",
    width: "46%",
    backgroundColor: "black",
    borderRadius: 20,
    height: 40,
    marginLeft: 28,
    marginTop: 15,
    alignItems: "center",
  },
  headingTutors: {
    paddingTop: 40,
    paddingLeft: 30,
    fontSize: 18,
    fontWeight: "bold",
  },
  editButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "medium",
    padding: 5,
    marginRight: 5,
    marginLeft: 8, // Add marginRight for space
  },
  editPen: {
    height: 25, // Adjust the height as needed
    width: 20, // Adjust the width as needed
  },
  studentImage: {
    marginBottom: 70,
    marginLeft: 64,
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  mediator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 30,
    marginLeft: 15,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 25,
    padding: 5,
    width: "90%",
  },
  mediatorButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  mediatorButtonText: {
    fontSize: 14,
    // fontWeight: "bold",
    color: "black",
  },
  verticalLine: {
    height: 30,
    width: 2,
    backgroundColor: "#A09F9F",
  },
  verticalLine1: {
    height: 30,
    width: 2,
    backgroundColor: "#A09F9F",
  },
  present: {
    marginLeft: 22,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "medium",
  },
  presentNumber: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 20,
    fontSize: 14,
    fontWeight: "normal",
  },
  Absent: {
    marginLeft: 22,
    // marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "normal",
  },
  AbsentNumber: {
    paddingLeft: 20,
    paddingTop: 10,
    fontSize: 14,
    fontWeight: "normal",
  },
  leave: {
    marginLeft: 22,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "normal",
  },
  leaveNumber: {
    paddingLeft: 20,
    paddingTop: 10,
    fontSize: 14,
    fontWeight: "500",
  },
  addButton: {
    flexDirection: "row",
    width: "40%",
    borderRadius: 20,
    height: 40,
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonRight: {
    // flexDirection: "row",
    width: "40%",
    borderRadius: 20,
    height: 40,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    padding: 5,
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonSpace: {
    width: 10, // Adjust the width as needed
  },
  bottomContainer: {
    // position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    // paddingHorizontal: 20,
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
