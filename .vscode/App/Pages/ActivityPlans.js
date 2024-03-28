import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function ActivityPlans() {
    const navigation = useNavigation();
    const handleAddStudentsClick = () => {
        navigation.navigate("AddStudents");
    };
    
    const handleAttendanceClick = () => {
        navigation.navigate("StudentsAttendanceUpdate");
    };
    const handleStudentsFormClick = () => {
      navigation.navigate("StudentsForm");
    };

    
    const handleReportsClick = () => {
        navigation.navigate("MarksEntry");
    };
    const handleHomeClick = () => {
      navigation.navigate("StudentsAttendance");
    };


    const handleStudentProfileClick = () => {
        navigation.navigate("StudentProfile");
    };

    const [activityTitle, setActivityTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [requiredMaterials, setRequiredMaterials] = useState('');

    const handleSubmit = () => {
        // Handle form submission here
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.label}>Activity Title:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter activity title"
                    value={activityTitle}
                    onChangeText={setActivityTitle}
                />

                <Text style={styles.label}>Description:</Text>
                <TextInput
                    style={[styles.input, styles.largeInput]}
                    placeholder="Enter description"
                    value={description}
                    onChangeText={setDescription}
                    multiline
                    numberOfLines={4}
                />

                <Text style={styles.label}>Date:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter date"
                    value={date}
                    onChangeText={setDate}
                />

                <Text style={styles.label}>Time:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter time"
                    value={time}
                    onChangeText={setTime}
                />

                <Text style={styles.label}>Required Materials:</Text>
                <TextInput
                    style={[styles.input, styles.largeInput]}
                    placeholder="Enter required materials"
                    value={requiredMaterials}
                    onChangeText={setRequiredMaterials}
                    multiline
                    numberOfLines={4}
                />

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={handleHomeClick}>
                    <Image
                        style={styles.bottomIcon}
                        source={require("./../Assets/Images/home.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleStudentsFormClick}>
                    <Image
                        style={styles.bottomIcon}
                        source={require("./../Assets/Images/addIcon.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAttendanceClick}>
                    <Image
                        style={styles.bottomIcon}
                        source={require("./../Assets/Images/attendance.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleReportsClick}>
                    <Image
                        style={styles.bottomIcon}
                        source={require("./../Assets/Images/reports.png")}
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
    scrollViewContent: {
        flexGrow: 1,
        padding: 20,
        paddingBottom: 80, // Adjust as needed based on bottom container height
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 56,
        width: "100%",
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    largeInput: {
        height: 100,
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: 'black',
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#fff", // Changed color for visibility
    },
    bottomIcon: {
        width: 70,
        height: 50,
        resizeMode: "contain",
    },
});
