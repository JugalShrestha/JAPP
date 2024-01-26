import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import React, { useState } from 'react'
import { COLORS } from '../constant';

const MapPage = () => {
  const [markers, setMarkers] = useState([
    {latitude: 27.693553,longitude: 85.321311}
    ,{ latitude: 27.695123, longitude: 85.322456 }
    ,{ latitude: 26.695223, longitude: 85.321426 }
    ,{ latitude: 27.695323, longitude: 85.320256 }
    ,{ latitude: 27.695223, longitude: 85.323456 }
]);

const guideIcon = require('../assets/guide.png');

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
            >
              <Image source={guideIcon} style={{width:30,height:30}}/>
            </Marker>
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