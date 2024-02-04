import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../../constant";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons';
import { FIREBASE_AUTH, FIREBASE_DB } from "../../firebaseConfig";
import { User, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Button } from "react-native-elements";

const UserPage = () => {

  useEffect(()=>{
    onAuthStateChanged(FIREBASE_AUTH,(user)=>{
      setUser(user);
    }) 
    user && getUserData();
  },[])

  const [user, setUser] = useState(null | User);
  const [userData,setUserData] = useState({});
  const [guide,setGuide] = useState(false);

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
      console.log(userData);
    }
  }

  const changeUserMode = async () =>{
    setGuide(!guide);
      try {
        await setDoc(doc(FIREBASE_DB, 'users', user.uid), { isGuide: !guide }, { merge: true });
        getUserData();
      } catch (error) {
        console.error('Error updating user data:', error);
      }
  }

  const handleSignOut = () =>{
    FIREBASE_AUTH.signOut();
  }

  return (
    <SafeAreaView style={{width:"100%",alignItems:"center"}}>
      <View style={{ display:"flex", justifyContent: "flex-start",width:"90%",alignItems:"center",paddingTop:15,gap:15}}>
        <View style={{position:"relative",flexDirection:"row",justifyContent:"space-between",width:"100%",alignItems:"flex-end",borderRadius:25,padding:15,overflow:"hidden",backgroundColor:COLORS.s2}}>
          {/* for the background cover photo */}
          <View style={{position:"absolute",zIndex:1,width:"100%",height:"100%",top:0,left:0}}>
            {/* <Image style={{width:"100%",height:"100%",objectFit:"cover"}} source={require('../../assets/pp-photo.png')}/> */}
          </View>
          {/* for the username and address */}
          <View style={{zIndex:2}}>
            {/* for the user rating */}
            <View style={{flexDirection:"row",gap:5}}>
              <Feather name="star" size={15} color={COLORS.p2}/>
              <Feather name="star" size={15} color={COLORS.p2}/>
              <Feather name="star" size={15} color={COLORS.p2}/>
              <Feather name="star" size={15} color={COLORS.p2}/>
              <Feather name="star" size={15} color={COLORS.p2}/>
              <Text style={{fontWeight:"bold"}}>0.0</Text>
            </View>
            <Text style={{fontSize:18,fontWeight:"bold"}}>{user.displayName}</Text>
            <Text style={{fontSize:14}}>{userData.address}</Text>
          </View>
          {/* Add this View to contain the image */}
          <View style={{zIndex:2,width:150,height:150,overflow:"hidden",borderRadius:25,elevation:20}}>
            <Image
              style={{width:"100%",height:"100%"}}
              source={require("../../assets/pp-photo.png")}
            />
          </View>
        </View>

        {/* to show user history */}
        <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"flex-start", gap:15,padding:15,backgroundColor:COLORS.s1,borderRadius:25}}>
          <Feather name="clock" size={20} color={COLORS.p2}/>
          <Text style={{fontWeight:"bold",fontSize:15,}}>Show tour history</Text>
        </View>

        {/* to show language stack of user */}
        <View style={{width:'100%',justifyContent:"flex-start",gap:10}}>
          <Text>Language</Text>
          {userData.languages && (
            <ScrollView horizontal style={{width:"100%",flexDirection:"row",gap:10,}}>
              {userData.languages.map((lang,id)=>{
                console.log(lang,id);
                return <Text key={id} style={{padding:10,margin:5,backgroundColor:COLORS.s2,borderRadius:15,paddingLeft:25,paddingRight:25}}>{lang}</Text>
              })}
            </ScrollView>
          )}
        </View>

        {/* to show about the user */}
        <View style={{width:'100%',justifyContent:"flex-start",gap:10}}>
          <Text>About Jugal!</Text>
          <View style={{width:"100%",flexDirection:"row",backgroundColor:COLORS.s2,height:100,borderRadius:15}}>
          </View>
        </View>

        {/*to change to guide mode*/}
        <TouchableOpacity onPress={changeUserMode} style={{width:"100%",alignItems:"center",padding:10,backgroundColor:COLORS.s1,borderRadius:25}}>
          <Text style={{fontSize:20,fontWeight:"bold"}}>{userData.isGuide ?"On Guide Mode":"On Tourist Mode"}</Text>
        </TouchableOpacity>

        {/* to sign out */}
        <TouchableOpacity onPress={handleSignOut} style={{width:"100%",alignItems:"center",justifyContent:"center", gap:15,padding:15,backgroundColor:COLORS.p2,borderRadius:25}}>
          <Text style={{color:COLORS.s1,textTransform:"uppercase",fontSize:20,fontWeight:"bold",alignItems:"center",justifyContent:"center"}}>Sign out</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export default UserPage;
