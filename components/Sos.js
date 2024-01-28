import { View, Text, StyleSheet, Image, TouchableOpacity, SectionList } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constant";

const handleCallPress = ({}) => {
    const phoneNumberWithoutSpaces ="102"

    // Use the tel: URI scheme to open the phone app
    const phoneNumberUri = `tel:${phoneNumberWithoutSpaces}`;

    // Check if the Linking API is supported on the device
    Linking.canOpenURL(phoneNumberUri)
    .then((supported) => {
        if (supported) {
        // Open the phone app
        return Linking.openURL(phoneNumberUri);
        } else {
        console.error('Cannot open phone app');
        }
    })
    .catch((error) => console.error('Error opening phone app:', error));
};

const Sos = () => {
    
    const DATA = [
    {
      data: ['Aashra Pradhan', '9845255655', ''],
    },
    {
      data: ['Police', '100', ''],
    },
    {
      data: ['Ambulance', '102', ''],
    },
    {
      data: ['Fire Fighter', '104'],
    },
  ];
  

    const [contacts,setContacts] = useState(false);
    const handleEmergency = () =>{
        setContacts(!contacts)
    }

  return (
    <>
      <View style={styles.no1}>
        <Image style={styles.set} source={require("./settingsos.png")} />
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.circle}>
          <Text style={styles.SOStext}>SOS</Text>
        </TouchableOpacity>
        <View style={styles.box}>
          <TouchableOpacity onPress={()=>handleCallPress()}  style={styles.circle1}>
            <Image style={styles.img1} source={require("./sosambulance.png")} />
          </TouchableOpacity>
          <View style={styles.circle2}>
            <Image style={styles.img2} source={require("./sospolice.png")} />
          </View>
        </View>
        <TouchableOpacity onPress={handleEmergency} style={styles.ec}>
          <Text style={styles.ectext}>Emergency Contact</Text>
        </TouchableOpacity>
        {
            contacts?
            <View style={{position:"absolute",width:"90%",height:"90%", alignItems:"center",justifyContent:"center"}}>
              <TouchableOpacity onPress={handleEmergency} style={{padding:15,position:"absolute",zIndex:2,right:5,top:5,backgroundColor:COLORS.p1,borderRadius:15}}><Text>Close</Text></TouchableOpacity>
                <SectionList
                    style={{backgroundColor: COLORS.n1,width:"100%",height:"100%"}}
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({item}) => (
                        <Text style={{color: COLORS.p1,fontSize: 25}}>{item}</Text>
                    )}
                />
            </View>:""
        }
        
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  no1: {
    marginTop: 40,
    marginEnd: 25,
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  set: {
    height: 38,
    width: 38,
  },
  container: {
    flex: 1,
    justifyContent: "center",

    alignItems: "center",
  },
  circle: {
    backgroundColor: "#EC6408",
    borderColor: "brown",
    borderWidth: 4,
    height: 180,
    width: 180,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  SOStext: {
    fontSize: 30,
    fontWeight: "bold",
  },
  ec: {
    marginTop: 60,
    height: 50,
    width: 200,
    backgroundColor: "#EC6408",
    borderRadius: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "brown",
    borderWidth: 3,
  },
  ectext: {
    fontSize: 19,
    fontWeight: "bold",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 50,
  },
  circle1: {
    height: 60,
    width: 60,
    borderRadius: 40,
    backgroundColor: "#EC6408",
    marginLeft: 5,
    marginRight: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "brown",
    borderWidth: 3,
  },
  circle2: {
    height: 60,
    width: 60,
    borderRadius: 40,
    backgroundColor: "#EC6408",
    marginRight: "30",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "brown",
    borderWidth: 3,
  },
  img1: {
    height: 38,
    width: 38,
    borderRadius: 5,
  },
  img2: {
    height: 38,
    width: 38,
    borderRadius: 5,
  },
});

export default Sos;
