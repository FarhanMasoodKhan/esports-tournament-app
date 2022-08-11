import React from 'react'
import { View, Text, StyleSheet, Image, FlatList} from 'react-native';
 

const ListData2 = [
    { 
        id: "0",
        Image: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000',
        Name: 'Farhan Masood',
        GameID: '7892482',
        Rank: 'Golden Tier',
    },
    { 
        id: "1",
        Image: 'https://www.w3schools.com/w3images/avatar2.png',
        Name: 'Ahmed ALi',
        GameID: '8799564',
        Rank: 'Silver Tier',
    },
    { 
        id: "2",
        Image: 'https://www.w3schools.com/w3images/avatar6.png',
        Name: 'Ayesha',
        GameID: '5489432',
        Rank: 'Diamond Tier',
    },
    { 
        id: "3",
        Image: 'https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
        Name: 'Maryam',
        GameID: '5486416',
        Rank: 'Bronze Tier',
    },
];


const  List2 = () => {
return (
    <FlatList  style={styles.FlatlistContainer}
     data={ListData2}  
     renderItem={({item}) => (
       <>
    <View style={styles.squadA}>
       <View style={styles.MainViewContainer}>
            <View style={styles.ImagesContainer}>            
                <Image style={{width:50,height:50, borderRadius:100}} 
                source={{uri:item.Image}}/>
            </View>
            <View style={styles.DetailContainer}>
                <Text style={styles.text}> 
                Name: {item.Name}</Text>
                <Text style={styles.text}>
                Game ID: {item.GameID}</Text>
                <Text style={styles.text}>
                Rank: {item.Rank}</Text>     
            </View>  
        </View>
    </View>
        </>
     )}/>
 );
};


const styles = StyleSheet.create({
    FlatlistContainer:{
        backgroundColor: 'black',
    },

    title:{
        color: 'white',
        fontSize: 18,
    },
    
    MainViewContainer:{
        backgroundColor: '#9821F6',
        marginVertical: 8,
        padding: 10,
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },


    DetailContainer:{
        paddingLeft: 15,
    },
    text:{
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    }
})

export default List2;