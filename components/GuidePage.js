import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../constant'
import { Image } from 'react-native-elements'

const GuidePage = () => {
  return (
    <View style={styles.whole}>
        <View style={styles.card}>
            <View style={styles.price}><Text style={{fontSize:20}}>Rate:  <Text style={{fontSize: 30, fontWeight: 'bold'}}>Rs.800</Text></Text></View>
            <View style={styles.GuideInfo}>
                <View><Text style={styles.GuideName}>Jugal Shrestha</Text></View>
                <View style={styles.GuideId}><Text>G101232</Text></View>
            </View>
            <View style={styles.GuidePhoto}><Image style={{width: "100%",height: "100%",}} source={require("../assets/profile.png")}/></View>
        </View>
        <View style={styles.guided}>
            <Text>Total Tourists Guide</Text><Text>01</Text>
        </View>
        <View style={styles.stars}>
            <Text>Stars</Text><View></View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    whole:{
        position: "fixed",
        bottom: 0,
        height: 599,
        width: "100%",
        gap:25,
    },
    card:{
        backgroundColor: COLORS.p2,
        padding: 15,
        height: "40%",
        borderRadius: 25,
    },
    guided:{
        backgroundColor: COLORS.p2,
        padding: 15,
        height: "25%",
        borderRadius: 25,
    },
    stars:{
        backgroundColor: COLORS.p2,
        padding: 15,
        height: "25%",
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
        width: 60,
        height: 60,
        borderRadius: 25,
        right: 10,
        bottom: 10,
        position: 'absolute',
    }
})

export default GuidePage