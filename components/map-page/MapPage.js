import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Easing} from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import React, { useEffect, useRef, useState } from 'react'
import { COLORS } from '../../constant';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Searchbar from './Searchbar';
import DateTime from './DateTime';
import {doc,getDoc, setDoc} from "firebase/firestore"
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH, FIREBASE_DB } from '../../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

// This is the map page component
const MapPage = () => {
const [confirm, setConfirm] = useState(false);
const [date,setDate] = useState(new Date());
const [time,setTime] = useState("");
const [destination, setDestination] = useState();
const [markers, setMarkers] = useState([]);
const [searching,setSearching] = useState(false);
const [dateTimeConfirm,setDateTimeConfirm] = useState(false);
const mapRef = useRef(null);

const insets = useSafeAreaInsets();

useEffect(()=>{
  onAuthStateChanged(FIREBASE_AUTH,(user)=>{
    setUser(user);
  }) 
  if(user){
    getUserData();
    getAllDestinationData();
  }
},[])

const [user, setUser] = useState(null | User);
const [userData,setUserData] = useState({});
const [destinationData,setDestinationData] = useState([]);

const getUserData = async ()=>{
  const docRef = doc(FIREBASE_DB, "users", user?.uid);
  const docSnap = await getDoc(docRef);
  if(docSnap.exists())
  {
    const data = docSnap.data();
    if (Object.keys(userData).length === 0) {
      setUserData(data);
    } else {
      setUserData({ ...userData, ...data });
    }
    console.log(userData+": map user data");
  }
}

const handleConfirm = async() =>{
  console.log("confirmed: "+destination+","+date.toDateString()+","+time.toTimeString());
  try{
    await setDoc(doc(FIREBASE_DB,"destination",user.uid),{
      destination: destination,
      date: date,
      time: time,
    });
    console.log("confirmed destination!");
    setConfirm(!confirm);
  }
  catch(error){
    console.log(error);
  }
}

const getAllDestinationData = async () =>{
  try{
  const querySnapshot = await getDocs(collection(FIREBASE_DB, "destination"));
  let allData = [];

  querySnapshot.forEach((doc) => {
    // Get the data from the document
    const data = doc.data();
    // Add the data to the array
    allData.push(data);
  });

  // Set the state once with all the accumulated data
  setDestinationData(allData);
  console.log(destinationData);
  } catch (error) {
    console.error("Error getting destination data:", error);
  }
}

//makes it so that marker on the map can be dragged to a location.
const handleDragEnd = (e) => {
  const newCoordinate = e.nativeEvent.coordinate;
  setMarkers([newCoordinate]);
};

//marker destination icon
const pinIcon = require("../../assets/destination-pin.png");

  return (
    <View style={{flex: 1,alignItems: 'center',justifyContent: 'center',position: 'relative',paddingTop: insets.top,position:"relative"}}>
        {/* this is for the searching area components */}
        <View style={styles.map}>
          <MapView ref={mapRef} showsUserLocation={true} style={styles.map}>
          {markers.map((marker, id) => (
            <Marker key={id} coordinate={marker} draggable onDragEnd={handleDragEnd}>
              <Image source={pinIcon} style={{width:40, height:40}}/>
            </Marker>
          ))}
          </MapView>
        </View>
        {userData.isGuide ? 
        <View style={{width:"100%",backgroundColor:COLORS.p1,borderTopWidth:1,padding:10,gap:10}}>
          {destinationData.map((data,id)=>{
            return (
              <View style={{flexDirection:"row",gap:10,justifyContent:"space-between"}}>
            <View key={id} style={{width:"70%",padding:15,backgroundColor:COLORS.s1,borderRadius:15,alignItems:"flex-start",justifyContent:"center"}}>
              <Text>{}</Text>
              <Text>{}</Text>
              <Text>{data.destination}</Text>
            </View>
            <TouchableOpacity style={{width:"27%",alignItems:"center",justifyContent:"center",backgroundColor:COLORS.n1,borderRadius:15}}>
              <Text>Confirm</Text>
            </TouchableOpacity>
            </View>)
          })}
        </View>
        :
        <View style={styles.destiny}>
          <View style={{width:"95%",height:"100%",alignItems:'center',justifyContent:"center",gap:10,}}>
            {/* This is for searching destination */}
            {<Searchbar destination={destination} setSearching={setSearching} setMarkers={setMarkers} mapRef={mapRef} setDestination={setDestination}/>}
            {/* This is for date and time */}
            {searching && <DateTime setDateTimeConfirm={setDateTimeConfirm} dateTimeConfirm={dateTimeConfirm} date={date} time={time} setDate={setDate} setTime={setTime}/>}
            {/* this button is for confirming destination */}
            {dateTimeConfirm && <TouchableOpacity onPress={handleConfirm} style={{padding:10, width: "100%", borderRadius:15, backgroundColor: COLORS.n1, alignItems:"center"}}><Text style={{color:COLORS.p1, fontWeight: "bold", textTransform:"uppercase"}}>{confirm?"cancel":"confirm destination"}</Text></TouchableOpacity>}
          </View>
        </View>}
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