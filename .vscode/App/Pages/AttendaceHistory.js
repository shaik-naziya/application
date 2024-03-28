import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

export default function AddStudents({ navigation }) {
  const [selectedOption, setSelectedOption] = useState("students");

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    if (option === "tutors") {
      navigation.navigate("AddTutors");
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

  return (
    <View style={styles.body}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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

        {/* Heading */}
        <Text style={styles.heading}>History</Text>

        {/* Row of buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonToday}>
            <Text style={styles.buttonTextToday}>Today</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOptionPress("Yesterday")}
          >
            <Text>Yesterday</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOptionPress("Custom Date")}
          >
            <Text>Custom Date</Text>
          </TouchableOpacity>
        </View>

        {/* Two containers in a row */}
        <View style={styles.containerRow}>
          <View style={styles.container}>
            <Text style={styles.text}>Present</Text>
            <Text style={styles.numberText}>12</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Absent</Text>
            <Text style={styles.numberText}>10</Text>
          </View>
        </View>
        {/* Add more TouchableOpacity components for portfolio items as needed */}

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
        <TouchableOpacity onPress={handlePortfolioPress}>
          <View style={styles.portfolioContainer}>
            <Image
              style={styles.portfolioLogo}
              source={require("./../Assets/Images/portfolio.png")}
            />
            <View style={styles.portfolioInfo}>
              <Text style={styles.nameText}>Student 4</Text>
              <Text style={styles.idText}>ID : 04</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePortfolioPress}>
          <View style={styles.portfolioContainer}>
            <Image
              style={styles.portfolioLogo}
              source={require("./../Assets/Images/portfolio.png")}
            />
            <View style={styles.portfolioInfo}>
              <Text style={styles.nameText}>Student 5</Text>
              <Text style={styles.idText}>ID : 05</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePortfolioPress}>
          <View style={styles.portfolioContainer}>
            <Image
              style={styles.portfolioLogo}
              source={require("./../Assets/Images/portfolio.png")}
            />
            <View style={styles.portfolioInfo}>
              <Text style={styles.nameText}>Student 6</Text>
              <Text style={styles.idText}>ID : 06</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePortfolioPress}>
          <View style={styles.portfolioContainer}>
            <Image
              style={styles.portfolioLogo}
              source={require("./../Assets/Images/portfolio.png")}
            />
            <View style={styles.portfolioInfo}>
              <Text style={styles.nameText}>Student 7</Text>
              <Text style={styles.idText}>ID : 07</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* Repeat the above TouchableOpacity for other portfolio items */}
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
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 10, // Adjust as needed for bottom container height
  },

  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    paddingVertical: 5,
    backgroundColor: "#F0F2F5",
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
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
    marginLeft: 10,
  },
  buttonToday: {
    backgroundColor: "#000000",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    fontSize: 14,
  },
  buttonTextToday: {
    color: "white",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#F0F2F5",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    fontSize: 14,
  },
  containerRow: {
    flexDirection: "row",
    gap: 22,
  },
  container: {
    flex: 1,
    backgroundColor: "#F0F2F5",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    height: 110,
    width: 150,
    margin: 10,
  },
  text: {
    fontSize: 16,
    marginLeft: 30,
    marginTop: 10,
  },
  numberText: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 30,
  },
  portfolioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
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
