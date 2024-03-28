import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function StudentProfile({ navigation }) {
  const [date, setDate] = useState("");
  const [testName, setTestName] = useState("");
  const [urdu, setUrdu] = useState("");
  const [hindi, setHindi] = useState("");
  const [english, setEnglish] = useState("");
  const [mathematics, setMathematics] = useState("");
  const [science, setScience] = useState("");
  const [social, setSocial] = useState("");
  const [environmentalStudies, setEnvironmentalStudies] = useState("");
  const [rank, setRank] = useState("");
  const handleSubmit = () => {
  };

  return (
    <View style={{ flex: 1 }}>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <Image
              style={styles.portfolio}
              source={require("./../Assets/Images/portfolio.png")}
            />
            <View style={styles.portfolioDetails}>
              <Text style={styles.studentName}>Syed Ahil</Text>
              <Text style={styles.standard}>Class: 5</Text>
              <Text style={styles.idText}>ID: 01</Text>
              <Text style={styles.fatherName}>Father: Syed Arham</Text>
            </View>
          </View>

          <View style={styles.inputRow}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Date:</Text>
              <TextInput
                style={styles.inputTop}
                placeholder="Enter date"
                value={date}
                onChangeText={setDate}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Test Name:</Text>
              <TextInput
                style={styles.inputTop}
                placeholder="Enter test name"
                value={testName}
                onChangeText={setTestName}
              />
            </View>
          </View>

          <View style={styles.middleContainer}>
            <Text style={styles.heading}>Urdu:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Urdu marks"
              value={urdu}
              onChangeText={setUrdu}
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.heading}>Hindi</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Hindi Marks"
            value={hindi}
            onChangeText={setHindi}
            keyboardType="numeric"
          />
          <Text style={styles.heading}>English</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter English Marks"
            value={english}
            onChangeText={setEnglish}
          />
          <Text style={styles.heading}>Mathematics</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Mathematics Marks"
            value={mathematics}
            onChangeText={setMathematics}
          />
          <Text style={styles.heading}>Science</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Science Marks"
            value={science}
            onChangeText={setScience}
          />
          <Text style={styles.heading}>Social</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Social Marks"
            value={social}
            onChangeText={setSocial}
          />
          <Text style={styles.heading}>EnvironmentalStudies</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter EnvironmentalStudies Marks"
            value={environmentalStudies}
            onChangeText={setEnvironmentalStudies}
          />
          <Text style={styles.heading}>Rank</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Rank"
            value={rank}
            onChangeText={setRank}
          />
                  <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>

        </View>
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
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: "white",
    // paddingVertical: 20,
    paddingHorizontal: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  portfolio: {
    marginEnd: 10,
    width: 128,
    height: 128,
  },
  portfolioDetails: {
    marginLeft: 10,
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
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  labelContainer: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  middleContainer: {
    flexGrow: 1,
    paddingTop: 10,
    // paddingHorizontal: 20,
    // paddingBottom: 20, // Adjust as needed
  },
  
  inputTop: {
    height: 56,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  input: {
    height: 56,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 25,
    paddingHorizontal: 10,
  },

  subjectsContainer: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  submitButton: {
    backgroundColor: "#000000",
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    // marginTop: 5,
    marginBottom: 10,
  },
  submitText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomContainer: {
    // position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
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
