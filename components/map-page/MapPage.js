import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Easing} from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import React, { useEffect, useRef, useState } from 'react'
import { COLORS } from '../../constant';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Searchbar from './Searchbar';
import DateTime from './DateTime';

// This is the map page component
const MapPage = () => {
const [confirm, setConfirm] = useState(false);
const [destination, setDestination] = useState();
const [markers, setMarkers] = useState([]);
const [searching,setSearching] = useState(false);
const [dateTimeConfirm,setDateTimeConfirm] = useState(false);
const mapRef = useRef(null);

const insets = useSafeAreaInsets();

const handleConfirm = () =>{
  setTimeout(()=>{
    setConfirm(!confirm);
  },1000)
}

//makes it so that marker on the map can be dragged to a location.
const handleDragEnd = (e) => {
  const newCoordinate = e.nativeEvent.coordinate;
  setMarkers([newCoordinate]);
};

//marker destination icon
const pinIcon = require("../../assets/destination-pin.png");

  return (
    <View style={{flex: 1,alignItems: 'center',justifyContent: 'center',position: 'relative',paddingTop: insets.top,}}>
        {/* this is for the searching area components */}
        <View style={styles.destiny}>
          <View style={{width:"95%",height:"100%",alignItems:'center',justifyContent:"center",gap:10,}}>
            {/* This is for searching destination */}
            {<Searchbar destination={destination} setSearching={setSearching} setMarkers={setMarkers} mapRef={mapRef} setDestination={setDestination}/>}
            {/* This is for date and time */}
            {searching && <DateTime setDateTimeConfirm={setDateTimeConfirm} dateTimeConfirm={dateTimeConfirm}/>}
            {/* this button is for confirming destination */}
            {dateTimeConfirm && <TouchableOpacity onPress={handleConfirm} style={{padding:10, width: "100%", borderRadius:15, backgroundColor: COLORS.n1, alignItems:"center"}}><Text style={{color:COLORS.p1, fontWeight: "bold", textTransform:"uppercase"}}>{confirm?"cancel":"confirm destination"}</Text></TouchableOpacity>}
          </View>
        </View>
      <View style={styles.map}>
        <MapView ref={mapRef} showsUserLocation={true} style={styles.map}>
        {markers.map((marker, id) => (
          <Marker key={id} coordinate={marker} draggable onDragEnd={handleDragEnd}>
            <Image source={pinIcon} style={{width:40, height:40}}/>
          </Marker>
        ))}
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    destiny:{
      width: "100%",
      position: "absolute",
      bottom: 0,
      padding: 20,
      zIndex: 2,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.p1,
      borderTopWidth: 1,
      borderColor: COLORS.p2,
    },
    map:{
      flex: 1,
      width:"100%",
      height: "100%",
    }
  });

export default MapPage