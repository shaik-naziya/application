import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export default function StudentsForm() {
  const navigation = useNavigation();

  const [selectedOption, setSelectedOption] = useState("StudentsForm");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [classValue, setClassValue] = useState("");
  const [school, setSchool] = useState("");
  const [schoolAddress, setSchoolAddress] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [fatherIncome, setFatherIncome] = useState("");
  const [siblings, setSiblings] = useState("");
  const [homeOwnership, setHomeOwnership] = useState("");
  const [disability, setDisability] = useState("");
  const [orphan, setOrphan] = useState("");

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    if (option === "TutorsForm") {
      // Handle the logic for "Tutor's" option here (if needed)
      navigation.navigate("TutorsForm");
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      setSelectedOption("StudentsForm");
    }, [])
  );

  const handleNameChange = (text) => setName(text);
  const handleFatherNameChange = (text) => setFatherName(text);
  const handleEmailChange = (text) => setEmail(text);
  const handleDobChange = (text) => setDob(text);
  const handleHomeAddressChange = (text) => setHomeAddress(text);
  const handleContactNumberChange = (text) => setContactNumber(text);
  const handleFatherIncomeChange = (text) => setFatherIncome(text);
  const handleSchoolAddressChange = (text) => setSchoolAddress(text);

  const handleSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === "StudentsForm" && styles.selectedOption,
            ]}
            onPress={() => handleOptionPress("StudentsForm")}
          >
            <Text style={styles.optionText}>StudentsForm</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === "TutorsForm" && styles.selectedOption,
            ]}
            onPress={() => handleOptionPress("TutorsForm")}
          >
            <Text style={styles.optionText}>TutorsForm</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
      </View>

      <ScrollView contentContainerStyle={styles.middleContainer}>
        <Text style={styles.heading}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.heading}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter date of birth"
          value={dob}
          onChangeText={setDob}
        />
        <Text style={styles.heading}>Father's Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter father's name"
          value={fatherName}
          onChangeText={setFatherName}
        />
        <Text style={styles.heading}>Contact Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter contact number"
          value={contactNumber}
          onChangeText={setContactNumber}
        />
        <Text style={styles.heading}>Email ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email ID"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.heading}>Class</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter class"
          value={classValue}
          onChangeText={setClassValue}
        />
        <Text style={styles.heading}>School</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter school"
          value={school}
          onChangeText={setSchool}
        />
        <Text style={styles.heading}>School Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter school address"
          value={schoolAddress}
          onChangeText={setSchoolAddress}
        />
        <Text style={styles.heading}>Home Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter home address"
          value={homeAddress}
          onChangeText={setHomeAddress}
        />
        <Text style={styles.heading}>Father's Annual Income</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter father's annual income"
          value={fatherIncome}
          onChangeText={setFatherIncome}
        />
        <Text style={styles.heading}>Number of Siblings</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter number of siblings"
          value={siblings}
          onChangeText={setSiblings}
        />
        <Text style={styles.heading}>Home Rented/Owned</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter home rented/owned"
          value={homeOwnership}
          onChangeText={setHomeOwnership}
        />
        <Text style={styles.heading}>Any Disability</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter any disability"
          value={disability}
          onChangeText={setDisability}
        />
        <Text style={styles.heading}>Orphan</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter orphan status"
          value={orphan}
          onChangeText={setOrphan}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>


      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("StudentsAttendance")}
        >
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
        <TouchableOpacity
          onPress={() => navigation.navigate("StudentsAttendanceUpdate")}
        >
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
  },
  topContainer: {
    zIndex: 1,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
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
  middleContainer: {
    // flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20, // Adjust as needed
  },
  input: {
    height: 56,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 16,
    marginBottom: 5,
  },
  submitButton: {
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
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
