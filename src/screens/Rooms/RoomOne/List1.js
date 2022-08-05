import React , {useRef, useState} from 'react'
import { View, Text, StyleSheet, Image, FlatList, Pressable, ScrollView} from 'react-native';
 


const ListData1 = [
    { 
        id: 0,
        Image: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/child-1835619_960_720.jpg',
        Name: 'Farhan Masood',
        GameID: '7892482',
        Rank: 'Golden Tier',
    },
    { 
        id: 1,
        Image: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/child-1835619_960_720.jpg',
        Name: 'Ahmed ALi',
        GameID: '8799564',
        Rank: 'Silver Tier',
    },
    { 
        id: 2,
        Image: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/child-1835619_960_720.jpg',
        Name: 'Ayesha',
        GameID: '5489432',
        Rank: 'Diamond Tier',
    },
    { 
        id: 3,
        Image: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/child-1835619_960_720.jpg',
        Name: 'Maryam',
        GameID: '5486416',
        Rank: 'Bronze Tier',
    },
];


const  List1 = () => {

    const renderItems = (e) => (
        <>
        <View>
            <Image source={e.item.Image}
              style={styles.Images}  
            />
        </View>
         
        <View>
            <Text>{e.item.Name}</Text>
        </View>
        <View>
            <Text>{e.item.GameID}</Text>
        </View>
        <View>
            <Text>{e.item.Rank}</Text>
        </View>  
        </>
    )
   
  return (
    <FlatList 
    // style={styles.FlatlistContainer}
    //  keyExtractor={item => item.id}
     data={ListData1}  
     renderItem={renderItems}/>
 )
};



const styles = StyleSheet.create({
    FlatlistContainer:{
        backgroundColor:'yellow',
    },
    ListDataStyle:{
        flexDirection: 'row',
        backgroundColor:'pink',
    },
    Images:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
        width: 30,
    },
    Name:{
        color:'white',
    }

})

export default List1;