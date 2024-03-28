import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker as PickerComponent } from "@react-native-picker/picker"; // Import Picker as PickerComponent from @react-native-picker/picker

export default function StudentsForm() {
  const navigation = useNavigation();

  const [selectedOption, setSelectedOption] = useState("TutorsForm");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [pursuingQualification, setPursuingQualification] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [additionalSkills, setAdditionalSkills] = useState("");
  const [teachingSince, setTeachingSince] = useState("");

  const handleSpecializationChange = (value) => {
    setSpecialization(value);
  };

  const handleAdditionalSkillsChange = (value) => {
    setAdditionalSkills(value);
  };

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    if (option === "TutorsForm") {
      navigation.navigate("TutorsForm");
    } else if (option === "StudentsForm") {
      navigation.navigate("StudentsForm");
    }
  };

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

        <Text style={styles.heading}>Email ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email ID"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.heading}>Contact Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter contact number"
          value={contactNumber}
          onChangeText={setContactNumber}
        />

        <Text style={styles.heading}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter address"
          value={address}
          onChangeText={setAddress}
        />

        <Text style={styles.heading}>Pursuing Qualification</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter pursuing qualification"
          value={pursuingQualification}
          onChangeText={setPursuingQualification}
        />

<Text style={styles.heading}>Specialization</Text>
        <View style={styles.inputContainer}>
          <PickerComponent
            selectedValue={specialization}
            onValueChange={handleSpecializationChange}
            style={styles.picker}
          >
            <PickerComponent.Item label="Select specialization" value="" />
            <PickerComponent.Item label="Software" value="Software" />
            <PickerComponent.Item label="Cybersecurity" value="Cybersecurity" />
            <PickerComponent.Item label="Finance" value="Finance" />
            <PickerComponent.Item label="Medicine" value="Medicine" />
            {/* Add more specialization options as needed */}
          </PickerComponent>
        </View>

        <Text style={styles.heading}>Additional Skills</Text>
        <View style={styles.inputContainer}>
          <PickerComponent
            selectedValue={additionalSkills}
            onValueChange={handleAdditionalSkillsChange}
            style={styles.picker}
          >
            <PickerComponent.Item label="Select additional skills" value="" />
            <PickerComponent.Item label="Swimming" value="Swimming" />
            <PickerComponent.Item label="Karate" value="Karate" />
            {/* Add more additional skills options as needed */}
          </PickerComponent>
        </View>
        <Text style={styles.heading}>Teaching Since</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter teaching since"
          value={teachingSince}
          onChangeText={setTeachingSince}
        />


        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>

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
  inputContainer: {
    height: 56,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  picker: {
    height: 40,
    width: "100%",
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
    borderTopColor: "#ccc",
  },
  bottomIcon: {
    width: 70,
    height: 50,
    resizeMode: "contain",
  },


});
