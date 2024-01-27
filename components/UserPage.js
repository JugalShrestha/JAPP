import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

const UserPage = () => {
  return (
    <>
   
    {/* <ScrollView style={styles.page}> */}
    <View style={styles.usercontainer}>
      <Text style={styles.username}>Jugal Shrestha</Text>
      <Text style={styles.usertitle}>Australian, male</Text>
      {/* Add this View to contain the image */}
      <View style={styles.imageContainer}>
          <Image
            style={styles.img}
            source={require('../assets/profile.png')}
          />
        </View>
      </View>

      <Text style={styles.infocontainer}>
      Full Legal Name
      </Text>
      <Text style={styles.infodata}>
      Jugal Shrestha
      </Text>
      
      <Text style={styles.infocontainer}>
      Email Address
      </Text>
      <Text style={styles.infodata}>
      jappjugal@info@sxc.edu.np
      </Text>
      <Text style={styles.infocontainer}>
      Contact Number
      </Text>
      <Text style={styles.infodata}>
      +977 9845678987
      </Text>
      <Text style={styles.infocontainer}>
      Gender
      </Text>
      <Text style={styles.infodata}>
      Male
      </Text>
      <View style={styles.cont1}>
      <View style={styles.settings}>
          <Image
            style={styles.img2}
            source={require('../assets/settings.webp')}
          />
          <Text style={styles.infodata2}>Settings</Text>
        </View>
        <View style={styles.settings}>
          <Image
            style={styles.img3}
            source={require('../assets/prof.jpg')}
          />
          <Text style={styles.infodata2}>Edit Profile</Text>
        </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    page:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    usercontainer:{
      width:"100",
      height:200,
      borderRadius: 15,
      marginTop:50,
      marginLeft:15,
      marginRight:15,
      backgroundColor: "#D9D9D9",
    },
    username:{
      fontSize:30,
      paddingTop:120,
      paddingLeft:15,
      fontWeight:'bold',

    },
    usertitle:{
paddingLeft: 15,
fontSize:18,
paddingTop:5,

    },
    infocontainer:{
      paddingLeft:15,
      marginTop:30,
      marginLeft:15,
      marginRight:15,
      color: "#716969",
      fontSize:16,
    },
    infodata:{
      paddingLeft:15,
    paddingTop:5,
      marginLeft:15,
      marginRight:15,
      color: "black",
      fontSize:14,
    },
   // New styles for image container
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginTop: -108,
    marginRight:15,
  },
  img: {
    height: 110,
    width: 110,
    borderRadius:12,
  },
  settings:{
    
    flexDirection: 'row',  // Set flexDirection to 'row'
    alignItems: 'center',  // Align items in the center vertically
    paddingLeft: 15,
    marginLeft: 15,
    paddingTop: 25,
  },
  img2:{
    height:30,
    width:25,
    marginRight: 8,  // Add some margin between the image and text
  },
  infodata2:{
  
    color: "black",
    fontSize:14,
    fontWeight:"bold",
  },
  img3:{
    height:20,
    width:25,
    marginRight: 8,  // Add some margin between the image and text
  },
  cont1:{
    paddingTop:25,
  }
})

export default UserPage