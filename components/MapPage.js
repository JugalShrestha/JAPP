import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import MapView from 'react-native-maps';
import React from 'react'
import { COLORS } from '../constant';

const MapPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.scrollBar}>
      </View>
      <View style={styles.map}>
        <MapView showsUserLocation={true} style={styles.map}/>
      </View>{/*for maps*/}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollBar:{
      width: "100%",
      position: "absolute",
      top: 0,
      height: 40,
      backgroundColor: COLORS.p1,
    },
    map:{
      flex: 1,
      position: "absolute",
      top: 40,
      width:"100%",
      height: "100%"
    }
  });

export default MapPage