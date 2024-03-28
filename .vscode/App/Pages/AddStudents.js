import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native"; // Import ScrollView


export default function AddStudents({ navigation }) {
  const [selectedOption, setSelectedOption] = useState("students");

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    if (option === "tutors") {
      // Handle the logic for "Tutor's" option here (if needed)
      navigation.navigate("AddTutors");

    }

  };

  const handlePortfolioPress = () => {
    // Navigate to another page when the portfolio logo is clicked
    // You need to replace 'AnotherPage' with the actual name of the target component or screen
    navigation.navigate("StudentProfile");
  };

  const handlePlusPress = () => {
    // Navigate to the next page when the plus image is clicked
    // Replace 'NextPage' with the actual name of the target component or screen
    navigation.navigate("StudentsForm");
  };


 
  useFocusEffect(
    React.useCallback(() => {
      setSelectedOption("students");
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


      
      <ScrollView style={styles.scrollView}>

      <TouchableOpacity onPress={handlePortfolioPress}>
        <View style={styles.portfolioContainer}>
          <Image
            style={styles.portfolioLogo}
            source={require("./../Assets/Images/portfolio.png")}
          />
          <View style={styles.portfolioInfo}>
            <Text style={styles.nameText}>Student 1</Text>
            <Text style={styles.idText}>ID : 01</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.line} />

      <TouchableOpacity onPress={handlePortfolioPress}>
        <View style={styles.portfolioContainer}>
          <Image
            style={styles.portfolioLogo}
            source={require("./../Assets/Images/portfolio.png")}
          />
          <View style={styles.portfolioInfo}>
            <Text style={styles.nameText}>Student 2</Text>
            <Text style={styles.idText}>ID : 02</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.line} />

      <TouchableOpacity onPress={handlePortfolioPress}>
        <View style={styles.portfolioContainer}>
          <Image
            style={styles.portfolioLogo}
            source={require("./../Assets/Images/portfolio.png")}
          />
          <View style={styles.portfolioInfo}>
            <Text style={styles.nameText}>Student 3</Text>
            <Text style={styles.idText}>ID : 03</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.line} />


      <TouchableOpacity onPress={handlePlusPress}>
        <Image
          style={styles.plusImage}
          source={require("./../Assets/Images/plus.png")}
        />
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
  body: {
    backgroundColor: "white",
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
    // marginTop: 5,
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
  plusImage:{
    marginLeft: 280,
    marginTop: 100,
  },
  bottomContainer: {
    // position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 5,
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
