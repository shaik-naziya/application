import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";


export default function StudentProfile({ navigation }) {
  const [selectedOption, setSelectedOption] = useState("Attendance"); // Define selectedOption state
  
  const handleOptionPress = (option) => {
    setSelectedOption(option); // Update selected option
    if (option === "Attendance") {
      // Navigate to Marks page
      navigation.navigate("StudentProfile");
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      setSelectedOption("Marks");
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.portfolio}
          source={require("./../Assets/Images/portfolio.png")}
        />
        <View style={styles.portfolioDetails}>
          <Text style={styles.studentName}>Syed Ahil </Text>
          <Text style={styles.standard}>Class: 5</Text>
          <Text style={styles.idText}>ID : 01</Text>
          <Text style={styles.fatherName}>Father: Syed Arham</Text>
        </View>
      </View>
      
      <View style={styles.contactContainer}>
        <View style={styles.contactItem}>
          <Image
            style={styles.icon}
            source={require("./../Assets/Images/phone.png")}
          />
          <Text style={styles.contactText}>Phone: +91 123 456 7890</Text>
        </View>
        <View style={styles.contactItem}>
          <Image
            style={styles.icon}
            source={require("./../Assets/Images/emailImage.png")}
          />
          <Text style={styles.contactText}>Email: syedahil@email.com</Text>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === "Attendance" && styles.selectedAttendanceOption,
          ]}
          onPress={() => handleOptionPress("Attendance")}
        >
          <Text style={styles.optionText}>Attendance</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === "Marks" && styles.selectedMarksOption,
          ]}
          onPress={() => handleOptionPress("Marks")}
        >
          <Text style={styles.optionText}>Marks</Text>
        </TouchableOpacity>
      </View>
       <View style={styles.line} />

       <View style={styles.calendarContainer}>
        <View style={styles.calendarBox}>
          <Image
            style={styles.calendarIcon}
            source={require("./../Assets/Images/calender.png")}
          />
          <View style={styles.monthYearContainer}>
            <Text style={styles.monthText}>TestName: FA2</Text>
            <Text style={styles.attendanceText}>Grade A+</Text>
          </View>
          <TouchableOpacity style={styles.dropdownArrowContainer}>
            <Image
              style={styles.dropdownArrowIcon}
              source={require("./../Assets/Images/dropdownicon.png")}
            />
          </TouchableOpacity>
        </View>
      </View>


       <View style={styles.calendarContainer}>
        <View style={styles.calendarBox}>
          <Image
            style={styles.calendarIcon}
            source={require("./../Assets/Images/calender.png")}
          />
          <View style={styles.monthYearContainer}>
            <Text style={styles.monthText}>TestName: FA1</Text>
            <Text style={styles.attendanceText}>Grade A+</Text>
          </View>
          <TouchableOpacity style={styles.dropdownArrowContainer}>
            <Image
              style={styles.dropdownArrowIcon}
              source={require("./../Assets/Images/dropdownicon.png")}
            />
          </TouchableOpacity>
 
        </View>
      </View>

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
        backgroundColor: "white",
    },
    profileContainer: {
    // backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  portfolio: {
    margin: 10,
    width: 128,
    height: 128,
  },
  studentName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  fatherName: {
    fontSize: 14,
    color: "#637087",
  },
  idText: {
    fontSize: 14,
    color: "#637087",
  },
  standard: {
    fontSize: 14,
    color: "#637087",
  },
  contactContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  contactText: {
    fontSize: 14,
    color: "#000000",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  optionButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    // backgroundColor: "#e0e0e0",
    marginHorizontal: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedOption: {
    backgroundColor: "#e0e0e0",
  },
  line: {
    height: 2,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  calendarContainer: {
    marginLeft: 5,
  },
  calendarBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: 344,
    padding: 10,
    marginBottom: 15,
    borderColor: "#ccc",
  },
  calendarContainer2: { // Corrected style name
    marginLeft: 10,
  },
  monthYearContainer: {
    flexDirection: "column",
    marginLeft: 10,
  },
  monthText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  attendanceText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  selectedAttendanceOption: {
    backgroundColor: "#e0e0e0", // Highlight color for Attendance button
  },
  selectedMarksOption: {
    backgroundColor: "#e0e0e0", // Highlight color for Marks button
  },

  dropdownArrowContainer: {
    marginLeft: "auto",
    marginRight: 5,
  },
  dropdownArrowIcon: {
    width: 10,
    height: 15,
  },

  bottomContainer: {
    // position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 63
    ,
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
