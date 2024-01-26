import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import React, { useRef, useState } from 'react'
import { COLORS } from '../constant';
import SearchBox from 'react-native-search-box';

const MapPage = () => {
  const [guide, setGuide] = useState([
    {latitude: 27.693553,longitude: 85.321311}
    ,{ latitude: 27.695123, longitude: 85.322456 }
    ,{ latitude: 26.695223, longitude: 85.321426 }
    ,{ latitude: 27.695323, longitude: 85.320256 }
    ,{ latitude: 27.695223, longitude: 85.323456 }
]);

const [destination,setDestination] = useState();
const [markers, setMarkers] = useState([]);
const mapRef = useRef(null);
const handleSearch = async (text) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${text}`
    );
    const data = await response.json();

    if (data && data.length > 0) {
      const firstResult = data[0];
      const newMarker = {
        latitude: parseFloat(firstResult.lat),
        longitude: parseFloat(firstResult.lon),
      };

      setMarkers([newMarker]);
      mapRef.current.animateToRegion({
        latitude: newMarker.latitude,
        longitude: newMarker.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      });
    }
  } catch (error) {
    console.error('Error searching location:', error);
  }
};

const guideIcon = require('../assets/guide.png');

  return (
    <View style={styles.container}>
      <View style={styles.destiny}>
        <View style={{width:"80%",alignItems:'center',justifyContent:"center",gap:15,}}>
          <TextInput onChangeText={(text) => {setDestination(text);handleSearch(text);}} placeholder='Search Destination here!' style={{width:"100%",borderWidth:1,padding:10, borderRadius:25}}/>
        </View>
      </View>
      <View style={styles.map}>
        <MapView
        ref={mapRef}
          showsUserLocation={true}
          style={styles.map}
        >
          {markers.map((marker, id) => (
          <Marker key={id} coordinate={marker} />
        ))}
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