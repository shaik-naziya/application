import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Login from "./.vscode/App/Pages/Login";
import CreateAccount from "./.vscode/App/Pages/CreateAccount";
import CenterForm from "./.vscode/App/Pages/CenterForm";
import StudentsAttendance from "./.vscode/App/Pages/StudentsAttendance";
import TutorsAttendance from "./.vscode/App/Pages/TutorsAttendance";
import StudentsForm from "./.vscode/App/Pages/StudentsForm";
import TutorsForm from "./.vscode/App/Pages/TutorsForm";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import AddTutors from "./.vscode/App/Pages/AddTutors";
import AddStudents from "./.vscode/App/Pages/AddStudents";

import StudentProfile from "./.vscode/App/Pages/StudentProfile";
import MarksDetails from "./.vscode/App/Pages/MarksDetails";
import StudentsAttendanceUpdate from "./.vscode/App/Pages/StudentsAttendanceUpdate";
import TutorsAttendanceUpdate from "./.vscode/App/Pages/TutorsAttendanceUpdate";
import MarksEntry from "./.vscode/App/Pages/MarksEntry";
import EnterMarks from "./.vscode/App/Pages/EnterMarks";
import Activities from "./.vscode/App/Pages/Activities";
import ActivityPlans from "./.vscode/App/Pages/ActivityPlans";
import AttendaceHistory from "./.vscode/App/Pages/AttendaceHistory";
import TutorsAttendanceHistory from "./.vscode/App/Pages/TutorsAttendanceHistory";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        {/* Add other screens as needed */}
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="CenterForm" component={CenterForm} />
        <Stack.Screen name="StudentsAttendance" component={StudentsAttendance} />
        <Stack.Screen name="TutorsAttendance" component={TutorsAttendance} />
        <Stack.Screen name="AddStudents" component={AddStudents} />
        <Stack.Screen name="StudentsForm" component={StudentsForm} />
        <Stack.Screen name="TutorsForm" component={TutorsForm} />
        <Stack.Screen name="AddTutors" component={AddTutors} />
        <Stack.Screen name="StudentProfile" component={StudentProfile} />
        <Stack.Screen name="MarksDetails" component={MarksDetails} />
        <Stack.Screen name="StudentsAttendanceUpdate" component={StudentsAttendanceUpdate} />
        <Stack.Screen name="TutorsAttendanceUpdate" component={TutorsAttendanceUpdate} />
        <Stack.Screen name="MarksEntry" component={MarksEntry} />
        <Stack.Screen name="EnterMarks" component={EnterMarks} />
        <Stack.Screen name="Activities" component={Activities} />
        <Stack.Screen name="ActivityPlans" component={ActivityPlans} />
        <Stack.Screen name="AttendanceHistory" component={AttendaceHistory} />
        <Stack.Screen name="TutorsAttendanceHistory" component={TutorsAttendanceHistory} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
