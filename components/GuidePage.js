import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../constant'

const GuidePage = () => {
  return (
    <View style={styles.whole}>
        <View style={styles.card}>
            <View style={styles.price}><Text style={{fontSize:20}}>Rate:  <Text style={{fontSize: 30, fontWeight: 'bold'}}>Rs.800</Text></Text></View>
            <View style={styles.view}>
                <View style={styles.GuideName}><Text>Jugal Shrestha</Text></View>
                <View style={styles.role}><Text>Guide</Text></View>
            </View>
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
    GuideName:{
        fontSize: 14,
    },
    GuideTitle:{
        fontSize: 12,
    },
})

export default GuidePage