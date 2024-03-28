import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import * as Progress from 'react-native-progress';


export default function TutorsAttendance() {
  const navigation = useNavigation();

  return (
<View style={styles.container}>
      <Image
        // style={styles.imagetop}
        // source={require("./../Assets/Images/loginphoto.png")}
      />
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageleft}
          source={require("./../Assets/Images/addIcon.png")}
        />
        <Image
          style={styles.imagemiddle}
          source={require("./../Assets/Images/attendance.png")}
        />
        <Image
          style={styles.imageright}
          source={require("./../Assets/Images/editpen.png")}
        />
      </View>
      <Text style={styles.heading}>Today's Attendance</Text>
      <Text style={styles.heading1}>Tutors's Attendance</Text>
      <Text style={styles.heading2}>Total Tutors: 50</Text>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>
          Edit Attendance
        </Text>
        <Image
          style={styles.editPen}
          source={require("./../Assets/Images/editpen.png")}
        />
        <Image style={styles.studentImage} source={require("./../Assets/Images/tutorsImage.png")} />
      </TouchableOpacity>

      <View style={styles.mediator}>
        <Text style={styles.mediatorText}>Present</Text>
        <View style={styles.verticalLine} />
        <Text style={styles.mediatorText}>Absent</Text>
      </View>
      <Text style={styles.present}>Present</Text>
      <Progress.Bar progress={0.5} width={370} color="#3498db" height={10} borderRadius={30} marginLeft={15} />
      <Text style={styles.presentNumber}>47</Text>
        <Pressable onPress={() => navigation.navigate("TutorsAttendance")}>
        <Text style={styles.Absent}>Absent</Text>
      <Progress.Bar progress={0.5} width={370} color="red" height={10} borderRadius={30} marginLeft={15} />
      <Text style={styles.AbsenttNumber}>3</Text>
       <Text>Click here</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  imagetop: {
    height: 50,
    width: 80,
    margin: 10,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageleft: {
    height: 50,
    width: 80,
    marginHorizontal: 5,
  },
  imagemiddle: {
    height: 50,
    width: 80,
    marginHorizontal: 5,
  },
  imageright: {
    height: 50,
    width: 80,
    marginHorizontal: 5,
  },
  heading: {
    fontSize: 24,
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
    fontSize: 22,
    paddingLeft: 30,
  },
  heading2: {
    fontSize: 16,
    paddingLeft: 30,
    paddingTop: 8,
  },
  editButton: {
    flexDirection: 'row',
    width: "46%",
    backgroundColor: "black",
    borderRadius: 20,
    height: 40,
    marginLeft: 28,
    marginTop: 15,
    alignItems: 'center',
  },
  editButtonText: {
    color: "white",
    fontSize: 16,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 30,
    marginLeft: 15,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 25,
    padding: 5,
    width: '90%',
  },
  mediatorText: {
    fontSize: 16,
  },
  verticalLine: {
    height: 30,
    width: 2,
    backgroundColor: 'black',
  },
  present: {
    marginLeft: 22,
    marginBottom: 10,
    fontSize: 22,
  },
  presentNumber:{
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 20,
    fontSize: 20,  
  },
  Absent: {
    marginLeft: 22,
    // marginTop: 20,
    marginBottom: 10,
    fontSize: 22,
  },
  AbsentNumber:{
    paddingLeft: 20,
    paddingTop: 10,
    fontSize: 20,  
  },
});

