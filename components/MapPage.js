import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import React, { useState } from 'react'
import { COLORS } from '../constant';

const MapPage = () => {
  const [markers, setMarkers] = useState([{latitude: 27.693553,longitude: 85.321311, name: "new-marker"},{latitude: 27.693553,longitude: 85.321311, name: "new-marker"}]);

  return (
    <View style={styles.container}>
      <View style={styles.scrollBar}></View>
      <View style={styles.map}>
        <MapView
          showsUserLocation={true}
          style={styles.map} // Add onPress handler
        >
          {markers.map((marker, id) => (
            <Marker
              key={id}
              coordinate={marker}
              title={marker.name}
            />
          ))}
        </MapView>
      </View>
    </View>
  );
};


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