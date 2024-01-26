import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import React, { useRef, useState } from 'react'
import { COLORS } from '../constant';

const MapPage = () => {
  const [guide, setGuide] = useState([
    {latitude: 27.693553,longitude: 85.321311}
    ,{ latitude: 27.695123, longitude: 85.322456 }
    ,{ latitude: 26.695223, longitude: 85.321426 }
    ,{ latitude: 27.695323, longitude: 85.320256 }
    ,{ latitude: 27.695223, longitude: 85.323456 }
]);

const [markers, setMarkers] = useState([]);
const [destination, setDestination] = useState('');
const mapRef = useRef(null);

const handleSearch = async () => {
  try {
    const response = await Geocoder.from(destination, { provider: 'openstreetmap' });
    const { lat, lng } = response.results[0].geometry.location;

    const newMarkers = [...markers, { latitude: lat, longitude: lng }];
    setMarkers(newMarkers);

    // Optionally, you can zoom to the new marker
    mapRef.current.animateToRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    });
  } catch (error) {
    console.error('Error during geocoding:', error.message);
  }
};

const guideIcon = require('../assets/guide.png');

  return (
    <View style={styles.container}>
      <View style={styles.destiny}>
        <View style={{width:"80%",alignItems:'center',justifyContent:"center",gap:15,}}>
          <TextInput  onChangeText={(text) => setDestination(text)} placeholder='Search Destination here!' style={{width:"100%",borderWidth:1,padding:10, borderRadius:25}}/>
          <TouchableOpacity style={{borderWidth:1,padding: 10,borderRadius:25,alignSelf:"flex-end"}}onPress={handleSearch} >
            <Text>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.map}>
        <MapView
          ref={mapRef}
          showsUserLocation={true}
          style={styles.map} // Add onPress handler
        >
          {guide.map((marker, id) => (
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
      position: 'relative', 
    },
    destiny:{
      width: "100%",
      position: "absolute",
      bottom: 0,
      height: "20%",
      zIndex: 2,
      alignItems: "center",
      gap: 25,
      justifyContent: "center",
      backgroundColor: COLORS.p1,
      borderTopWidth: 1,
      borderColor: COLORS.p2,
    },
    map:{
      flex: 1,
      position: "absolute",
      top: 15,
      width:"100%",
      height: "100%",
    }
  });

export default MapPage