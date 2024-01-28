import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constant'
import { Image } from 'react-native-elements'

const GuidePage = () => {
    const [hire,setHire] = useState(false)
    const handleHire = () =>{
        setHire(true)
        alert("Request sent");
    }
  return (
    hire? "":
    <View style={styles.whole}>
        <View style={styles.card}>
            <View style={styles.price}><Text style={{fontSize:20,fontWeight:"bold"}}>Rate:  <Text style={{fontSize: 30 ,fontWeight: 'bold'}}>Rs.300</Text></Text></View>
            <View style={styles.GuideInfo}>
                <View><Text style={styles.GuideName}>Pratyoosh Shrestha</Text></View>
                <View style={styles.GuideId}><Text>ID: G101232</Text></View>
            </View>
            <View style={styles.GuidePhoto}><Image style={{width: "100%",height: "100%",objectFit:'cover',borderRadius:25}} source={require("../assets/random-person-image.jpg")}/></View>
        </View>
        <View style={{flexDirection:"row",alignItems:"center", justifyContent: "space-between",borderRadius:25}}>
            <Text style={{fontSize: 20,fontWeight:"bold", backgroundColor:COLORS.s2,padding:20,borderRadius:25}}>Total Tourists Guided</Text>
            <Text style={{fontSize:30,fontWeight:"bold",backgroundColor:COLORS.s2,padding:20,borderRadius:25}}>11</Text>
        </View>
        <View style={styles.stars}>
            <Text style={{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold"}}>Stars</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                gap:20
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
        <TouchableOpacity onPress={handleHire} style={{backgroundColor:COLORS.n1,padding:25,borderRadius:25,}}><Text style={{fontSize:40,color:COLORS.p1,fontWeight:"bold",textTransform:"uppercase",alignSelf:"center"}}>{hire?"confirmed":"confirm"}</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    whole:{
        position: "absolute",
        backgroundColor:COLORS.p1,
        padding:15,
        borderRadius:25,
        bottom: 40,
        height: 490,
        width: "100%",
        justifyContent: "center",
        gap:25,
    },
    card:{
        backgroundColor: COLORS.s2,
        padding: 15,
        height: "30%",
        borderRadius: 25,
    },
    guided:{
        backgroundColor: COLORS.s2,
        padding: 15,
        height: "15%",
        borderRadius: 25,
    },
    stars:{
        backgroundColor: COLORS.s2,
        padding: 15,
        height: "15%",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 25,
    },
    GuideInfo:{
        position: "absolute",
        bottom: "5%",
        left: "5%",
        zIndex: 2,
    },
    GuideName:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    GuideId:{
        fontSize: 12,
    },
    GuidePhoto:{
        width: 100,
        height: 100,
        borderRadius: 100,
        right: 10,
        bottom: 10,
        position: 'absolute',
        overflow:"hidden",
    },tinyLogo: {
        width: 30,
        height: 30,
      },
})

export default GuidePage