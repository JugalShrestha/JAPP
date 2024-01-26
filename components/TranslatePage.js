import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TranslatePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.camera}><Text>This is camera</Text></View>
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
    camera:{
      width:"90%",
      height: 70,
      backgroundColor: "red",
    }
  });

export default TranslatePage