import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export default function AddStudents({ navigation }) {
    const [selectedOption, setSelectedOption] = useState("students");
  
    const handleOptionPress = (option) => {
      setSelectedOption(option);
      if (option === "students") {
        navigation.navigate("StudentsAttendanceUpdate"); // Navigate to the "StudentsAttendanceUpdate" page
      } else if (option === "tutors") {
        navigation.navigate(""); // Navigate to the "TutorsAttendanceUpdate" page
      }
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
  
  
    // Use the useFocusEffect hook to update the selectedOption based on the screen focus
    useFocusEffect(
      React.useCallback(() => {
        setSelectedOption("tutors"); // Set "Tutors" as the selected option when on the "TutorsAttendanceUpdate" page
      }, [])
    );
  
  return (
    <View style={styles.body}>
      <View style={styles.searchBarContainer}>
        <Image
          style={styles.searchBarLogo}
          source={require("./../Assets/Images/search.png")}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          // Add any additional props or styling as needed
        />
      </View>

      <View style={styles.line} />

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === "students" && styles.selectedOption,
          ]}
          onPress={() => handleOptionPress("students")}
        >
          <Text style={styles.optionText}>Student's</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === "tutors" && styles.selectedOption,
          ]}
          onPress={() => handleOptionPress("tutors")}
        >
          <Text style={styles.optionText}>Tutor's</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity onPress={handlePortfolioPress}>
          <View style={styles.portfolioContainer}>
            <Image
              style={styles.portfolioLogo}
              source={require("./../Assets/Images/portfolio.png")}
            />
            <View style={styles.portfolioInfo}>
              <Text style={styles.nameText}>Tutor 1</Text>
              <Text style={styles.idText}>ID : 01</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Add Present and Absent buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.presentButton}>
            <Text style={styles.presentButtonText}>Present</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.absentButton}>
            <Text style={styles.absentButtonText}>Absent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.leaveButton}>
  <Text style={styles.leaveButtonText}>Leave</Text>
</TouchableOpacity>

        </View>
        <TouchableOpacity onPress={handlePortfolioPress}>
          <View style={styles.portfolioContainer}>
            <Image
              style={styles.portfolioLogo}
              source={require("./../Assets/Images/portfolio.png")}
            />
            <View style={styles.portfolioInfo}>
              <Text style={styles.nameText}>Tutor 2</Text>
              <Text style={styles.idText}>ID : 02</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Add Present and Absent buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.presentButton}>
            <Text style={styles.presentButtonText}>Present</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.absentButton}>
            <Text style={styles.absentButtonText}>Absent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.leaveButton}>
  <Text style={styles.leaveButtonText}>Leave</Text>
</TouchableOpacity>

        </View>
        <TouchableOpacity onPress={handlePortfolioPress}>
          <View style={styles.portfolioContainer}>
            <Image
              style={styles.portfolioLogo}
              source={require("./../Assets/Images/portfolio.png")}
            />
            <View style={styles.portfolioInfo}>
              <Text style={styles.nameText}>Tutor 3</Text>
              <Text style={styles.idText}>ID : 03</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Add Present and Absent buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.presentButton}>
            <Text style={styles.presentButtonText}>Present</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.absentButton}>
            <Text style={styles.absentButtonText}>Absent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.leaveButton}>
  <Text style={styles.leaveButtonText}>Leave</Text>
</TouchableOpacity>

        </View>
        <TouchableOpacity onPress={handlePortfolioPress}>
          <View style={styles.portfolioContainer}>
            <Image
              style={styles.portfolioLogo}
              source={require("./../Assets/Images/portfolio.png")}
            />
            <View style={styles.portfolioInfo}>
              <Text style={styles.nameText}>Tutor 4</Text>
              <Text style={styles.idText}>ID : 04</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Add Present and Absent buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.presentButton}>
            <Text style={styles.presentButtonText}>Present</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.absentButton}>
            <Text style={styles.absentButtonText}>Absent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.leaveButton}>
  <Text style={styles.leaveButtonText}>Leave</Text>
</TouchableOpacity>

        </View>
        <TouchableOpacity onPress={handlePortfolioPress}>
          <View style={styles.portfolioContainer}>
            <Image
              style={styles.portfolioLogo}
              source={require("./../Assets/Images/portfolio.png")}
            />
            <View style={styles.portfolioInfo}>
              <Text style={styles.nameText}>Tutor 5</Text>
              <Text style={styles.idText}>ID : 05</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Add Present and Absent buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.presentButton}>
            <Text style={styles.presentButtonText}>Present</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.absentButton}>
            <Text style={styles.absentButtonText}>Absent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.leaveButton}>
  <Text style={styles.leaveButtonText}>Leave</Text>
</TouchableOpacity>

        </View>
        <TouchableOpacity onPress={handlePortfolioPress}>
          <View style={styles.portfolioContainer}>
            <Image
              style={styles.portfolioLogo}
              source={require("./../Assets/Images/portfolio.png")}
            />
            <View style={styles.portfolioInfo}>
              <Text style={styles.nameText}>Tutor 6</Text>
              <Text style={styles.idText}>ID : 06</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Add Present and Absent buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.presentButton}>
            <Text style={styles.presentButtonText}>Present</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.absentButton}>
            <Text style={styles.absentButtonText}>Absent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.leaveButton}>
  <Text style={styles.leaveButtonText}>Leave</Text>
</TouchableOpacity>

        </View>

        <Text style={styles.summary}>Summary</Text>
        <View style={styles.summaryContainer}>
          {/* Right Box */}
          <View style={styles.summaryBox1}>
            <Image
              style={styles.icon}
              source={require("./../Assets/Images/right.png")}
            />
            <Text style={styles.statusText}>Present</Text>
            <Text style={styles.numberText}>5</Text>
          </View>

          {/* Wrong Box */}
          <View style={styles.summaryBox2}>
            <Image
              style={styles.icon}
              source={require("./../Assets/Images/wrong.png")}
            />
            <Text style={styles.statusText}>Absent</Text>
            <Text style={styles.numberText}>2</Text>
          </View>
        

        {/* Leave Box */}
        <View style={styles.summaryBox3}>
          <Image
            style={styles.icon}
            source={require("./../Assets/Images/wrong.png")} // Replace "leave.png" with your actual image for Leave
          />
          <Text style={styles.statusText}>Leave</Text>
          <Text style={styles.numberText}>3</Text>
        </View> 
      </View>


        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Attendance</Text>
        </TouchableOpacity>
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
  body: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between", // Adjust as needed
  },
  
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 15,
  },
  searchBarLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
  },
  optionButton: {
    padding: 10,
    borderRadius: 10,
  },
  selectedOption: {
    backgroundColor: "#e0e0e0",
  },
  optionText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  line: {
    height: 2,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  portfolioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 20,
  },
  portfolioLogo: {
    height: 60,
    width: 60,
  },
  portfolioInfo: {
    marginLeft: 10,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  idText: {
    fontSize: 14,
    color: "#637087",
  },
  buttonsContainer: {
    flexDirection: "row",
    // justifyContent: "space-around",
    gap: 20,
    marginTop: 15,
    paddingHorizontal: 20,
  },
  presentButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  absentButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: "#637087",
    borderWidth: 2,
  },
  presentButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  absentButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  leaveButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: "#637087",
    borderWidth: 2,
  },
  leaveButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  scrollViewContent: {
    // paddingHorizontal: 20,
    paddingBottom: 20, // Adjusted to accommodate the bottom container
  },
  summary: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 15,
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
  },  summaryContainer: {
    flexDirection: "row",
    // justifyContent: "space-around",
    marginTop: 20,
    position: "absolute",
  },
  summaryBox1: {
    justifyContent: "space-around",
    position: "relative",
    borderWidth: 2,
    width: 150,
    height: 112,
    borderRadius: 10,
    borderColor: "green",
    left: 30,
    // marginTop: 10,
    // marginLeft: 170,
  },
  summaryBox2: {
    position: "relative",
    justifyContent: "space-around",
    borderWidth: 2,
    width: 150,
    height: 112,
    borderRadius: 10,
    borderColor: "red",
    left: 80,
    // marginTop: 10,
    // marginLeft: 320,
  },

  summaryBox3: {
    justifyContent: "space-around",
    position: "relative",
    borderWidth: 2,
    width: 150,
    height: 112,
    borderRadius: 10,
    borderColor: "blue",
    top: 130,
    right: 206,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 15,
    marginTop: 15,
  },
  statusText: {
    fontSize: 16,
    marginLeft: 15,
    fontWeight: "bold",
  },
  numberText: {
    fontSize: 16,
    color: "#637087",
    marginLeft: 15,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "#000000",
    paddingVertical: 12,
    width: "90%",
    paddingHorizontal: 24,
    borderRadius: 20,
    marginTop: 150,
    marginLeft: 15,
    alignItems: "center",
    marginBottom: 5,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
