import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constant'
import { Image } from 'react-native-elements'

const GuidePage = () => {
  return (
    <View style={styles.whole}>
        <View style={styles.card}>
            <View style={styles.price}><Text style={{fontSize:20,fontWeight:"bold"}}>Rate:  <Text style={{fontSize: 30 ,fontWeight: 'bold'}}>Rs.3,000</Text></Text></View>
            <View style={styles.GuideInfo}>
                <View><Text style={styles.GuideName}>Jugal Shrestha</Text></View>
                <View style={styles.GuideId}><Text>G101232</Text></View>
            </View>
            <View style={styles.GuidePhoto}><Image style={{width: "100%",height: "100%",objectFit:'cover',borderRadius:25}} source={require("../assets/pp-photo.png")}/></View>
        </View>
        <View style={{flexDirection:"row",padding:25,backgroundColor: COLORS.s2,alignItems:"center", justifyContent: "space-between",borderRadius:25}}>
            <Text style={{fontSize: 20,fontWeight:"bold"}}>Total Tourists Guided</Text><Text style={{fontSize:20,fontWeight:"bold"}}>01</Text>
        </View>
        <View style={styles.stars}>
            <Text style={{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold"}}>Stars</Text>
            <View style={{width:"100%",gap:10,alignItems:"center",justifyContent:"center"}}>    
            </View>
        </View>
        <TouchableOpacity style={{backgroundColor:COLORS.n1,padding:25,borderRadius:25,}}><Text style={{fontSize:40,color:COLORS.p1,fontWeight:"bold",textTransform:"uppercase",alignSelf:"center"}}>Confirm</Text></TouchableOpacity>
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
        borderRadius: 25,
    },
    GuideInfo:{
        position: "absolute",
        bottom: "5%",
        left: "5%",
    },
    GuideName:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    GuideId:{
        fontSize: 12,
    },
    GuidePhoto:{
        width: "50%",
        height: "70%",
        borderRadius: 30,
        right: 10,
        bottom: 10,
        position: 'absolute',
        overflow:"hidden",
    }
})

export default GuidePage