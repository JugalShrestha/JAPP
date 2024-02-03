import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import { Image } from 'react-native-elements';
import { COLORS } from '../../constant';
import { SafeAreaView } from 'react-native-safe-area-context';


const ExplorePage = () => {
    const DATA = [
        {
          id: 'a1',
          image: require("../../assets/carasol-1.jpg"),
          location: "sagarmatha",
          name: "Hotel Dolmaling",
          rating:"5.0",
          
        },
        {
          id: 'a2',
          image: require("../../assets/pic1.jpg"),
          location: "himalayan Java coffee",
          name: "Hotel Dolmaling",
          rating:"5.0",
        },
        {
          id: 'a3',
          image: require("../../assets/pic2.jpg"),
          location: "mountain",
          name: "Hotel Dolmaling",
          rating:"5.0",
        },
        {
          id: 'a4',
          image: require("../../assets/carasol-1.jpg"),
          location: "himalayan Java coffee",
          name: "Hotel Dolmaling",
          rating:"5.0",
        },
        {
          id: 'a5',
          image: require("../../assets/carasol-1.jpg"),
          location: "himalayan Java coffee",
          name: "Hotel Dolmaling",
          rating:"5.0",
        },
        {
          id: 'a6',
          image: require("../../assets/carasol-1.jpg"),
          location: "himalayan Java coffee",
          name: "Hotel Dolmaling",
          rating:"5.0",
        },
        {
          id: 'a7',
          image: require("../../assets/carasol-1.jpg"),
          location: "himalayan Java coffee",
          name: "Hotel Dolmaling",
          rating:"5.0",
        },
        {
          id: 'a8',
          image: require("../../assets/carasol-1.jpg"),
          location: "himalayan Java coffee",
          name: "Hotel Dolmaling",
          rating:"5.0",
        },
        {
          id: 'a9',
          image: require("../../assets/carasol-1.jpg"),
          location: "himalayan Java coffee",
          name: "Hotel Dolmaling",
          rating:"5.0",
        },
      ];
      
    const Item = ({ rating,location,name,image }) => {
    return (
    <View style={{ width: 250, marginHorizontal: 10 ,gap:10}}>
        <Image source={image} style={{width: "100%",height:150,borderRadius:15,}}/>
        <View style={{}}>
            <Text style={{fontSize:18, fontWeight:"bold", textTransform:"uppercase"}}>{name}</Text>
            <Text>{location}</Text>
            <Text>{rating}</Text>
        </View>
    </View>
    )};

    return (
    <SafeAreaView style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"flex-start"}}>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={{width:"100%"}}>
            <Text style={{fontSize:25,padding: 15,textTransform:"lowercase",fontWeight:"bold"}}>places you can call home..</Text>
            <View style={{width: "100%", padding: 25,paddingRight:0,paddingLeft:0, backgroundColor:COLORS.s2}}>
                <FlatList
                data={DATA}
                horizontal
                renderItem={({item})=><Item style={{padding:25,backgroundColor:COLORS.n1}} image={item.image} name={item.name} location={item.location} rating={item.rating}/>}
                keyExtractor={item=>item.id}
                />
            </View>
        </View>

        <View style={{width:"100%"}}>
            <Text style={{fontSize:25,padding: 15,textTransform:"lowercase",fontWeight:"bold"}}>to end your hunger..</Text>
            <View style={{width: "100%", padding: 25,paddingRight:0,paddingLeft:0, backgroundColor:COLORS.s2}}>
                <FlatList
                data={DATA}
                horizontal
                renderItem={({item})=><Item style={{padding:25,backgroundColor:COLORS.n1}} image={item.image} name={item.name} location={item.location} rating={item.rating}/>}
                keyExtractor={item=>item.id}
                />
            </View>
        </View>

        <View style={{width:"100%"}}>
            <Text style={{fontSize:25,padding: 15,textTransform:"lowercase",fontWeight:"bold"}}>activities you can do..</Text>
            <View style={{width: "100%", padding: 25,paddingRight:0,paddingLeft:0, backgroundColor:COLORS.s2}}>
                <FlatList
                data={DATA}
                horizontal
                renderItem={({item})=><Item style={{padding:25,backgroundColor:COLORS.n1}} image={item.image} name={item.name} location={item.location} rating={item.rating}/>}
                keyExtractor={item=>item.id}
                />
            </View>
        </View>
        </ScrollView>
    </SafeAreaView>
    )
}
export default ExplorePage