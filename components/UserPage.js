import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const UserPage = () => {
  return (
    <View style={styles.page}>
      <Text>UserPage</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    page:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    }
})

export default UserPage