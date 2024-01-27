import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../constant';
import { Camera } from 'expo-camera';
import { ImagePicker } from 'expo-image-picker';
import CameraComponent from './CameraComponent';

const TranslatePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.camera}><CameraComponent/></View>
      <View style={styles.left}></View>
      <View style={styles.right}></View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.p1,
      alignItems: 'center',
      justifyContent: 'flexStart',
    },
    camera:{
      width:"90%",
      height: 700,
      marginTop: 50,
      borderRadius: 50,
      backgroundColor: COLORS.p2,
      position: "relative",
    },
    capture:{
      backgroundColor: "red",
      width:50,
      height:50,
      borderRadius: 100,
      borderWidth: 5,
      borderColor: COLORS.p1,
      position: 'absolute',
      bottom: -20,
      right: "45%",
    },
    left:{
      backgroundColor: COLORS.p2,
      borderRadius: 100,
      width: 50,
      height: 50,
      position: "absolute",
      bottom: 20,
      left: 20,
      borderWidth: 10,
      borderColor: COLORS.s1
    },
    right:{
      backgroundColor: COLORS.p2,
      borderRadius: 100,
      width: 50,
      height: 50,
      position: "absolute",
      bottom: 20,
      right: 20,
      borderWidth: 10,
      borderColor: COLORS.s1
    }
  });

export default TranslatePage