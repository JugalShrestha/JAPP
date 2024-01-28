import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { COLORS } from "../constant";
import MapView, { Marker } from 'react-native-maps';

const UserPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView style={{flex: 1}}/>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View style={styles.usercontainer}>
          <Text style={styles.username}>Jugal Shrestha</Text>
          <Text style={styles.usertitle}>Australian, Male</Text>
          {/* Add this View to contain the image */}
          <View style={styles.imageContainer}>
            <Image
              style={styles.img}
              source={require("../assets/pp-photo.png")}
            />
          </View>
        </View>
        <View style={styles.columnContainer}>
          {/* Tours taken */}
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#F2F2F2",
              borderRadius: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "#d9d9d9",
                borderRadius: 10,
                padding: 10,
                paddingLeft: 25,
                height: 80,
                flexBasis: "70%",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Text style={{ fontSize: 28, fontWeight: "bold" }}>
                Tours Taken
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#d9d9d9",
                borderRadius: 10,
                padding: 10,
                marginLeft: 10,
                height: 80,
                flexBasis: "30%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 35, fontWeight: "bold" }}>204</Text>
            </View>
          </View>


          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: "#d9d9d9",
              // height: 80,
              borderRadius: 20,
            }}
          >
            {/* Rated */}
            <Text
              style={{
                color: "black",
                fontSize: 20,
                padding: 5,
              }}
            >
              Rating
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                gap: 20,
                padding: 10,
              }}
            >
              <Image
                style={styles.tinyLogo}
                source={require("../assets/star-1.png")}
              />
              <Image
                style={styles.tinyLogo}
                source={require("../assets/star-1.png")}
              />
              <Image
                style={styles.tinyLogo}
                source={require("../assets/star-1.png")}
              />
              <Image
                style={styles.tinyLogo}
                source={require("../assets/star-1.png")}
              />
              <Image
                style={styles.tinyLogo}
                source={require("../assets/star-2.png")}
              />
            </View>
          </View>


          <View style={styles.headerinfo}>
            {/* Email      */}
            <Text style={styles.infocontainer}>Email</Text>
            <Text style={styles.infodata}>jappjugal@info@sxc.edu.np</Text>
          </View>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  tinyLogo: {
    width: 30,
    height: 30,
  },
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerinfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#d9d9d9",
    height: 80,
    borderRadius: 20,
  },
  columnContainer: {
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "red",
    paddingVertical: 15,
    width: "100",
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 15,
    gap: 10,
  },
  usercontainer: {
    width: "100",
    height: 200,
    borderRadius: 15,
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "#D9D9D9",
  },
  username: {
    fontSize: 30,
    paddingTop: 120,
    paddingLeft: 15,
    fontWeight: "bold",
  },
  usertitle: {
    paddingLeft: 15,
    fontSize: 18,
    paddingTop: 5,
  },
  infocontainer: {
    paddingLeft: 15,
    marginLeft: 15,
    marginRight: 15,
    color: "#716969",
    fontSize: 16,
  },
  infodata: {
    paddingLeft: 15,
    marginLeft: 15,
    marginRight: 15,
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginTop: -108,
    marginRight: 15,
  },
  img: {
    height: 110,
    width: 110,
    borderRadius: 12,
  },
  settings: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    marginLeft: 15,
    paddingTop: 25,
  },
  img2: {
    height: 30,
    width: 25,
    marginRight: 8,
  },
  infodata2: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  img3: {
    height: 20,
    width: 25,
    marginRight: 8,
  },
  cont1: {
    paddingTop: 25,
  },
});


export default UserPage;
