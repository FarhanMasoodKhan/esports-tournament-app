import React from 'react';
import { Text, View,StyleSheet , ImageBackground, Button} from 'react-native';
import Swiper from 'react-native-swiper/src'


const swiper = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={true} >
      {/* -----------------     Slide - 1   -------------------*/}
       <View style = {styles.slidecontainer} >
       <View style={{resizeMode: "contain",height: 300,width: 300}}>
                <ImageBackground style={{resizeMode: "contain",height: 300,width: 300}}
            source={require('../../../assets/vectors/1.png ')}/>
        </View>

         <View style = {styles.HeadingContainer}>
            <Text style = {styles.Title1}>Tournament</Text>
            <Text style = {styles.Title2}>Take part in professional tournament <br />
            with real prizes or create your own and play with friends.</Text>
        </View>
       </View>
      {/* -----------------     Slide - 2   -------------------*/}
       <View style = {styles.slidecontainer} >
            <View style={{resizeMode: "contain",height: 300,width: 300}}>
                <ImageBackground style={{resizeMode: "contain",height: 300,width: 300}}
                source={require('../../../assets/vectors/4.png')}/>
            </View>

            <View style = {styles.HeadingContainer}>
                <Text style = {styles.Title1}>Tournament</Text>
                <Text style = {styles.Title2}>Take part in professional tournament <br />
                with real prizes or create your own and play with friends.</Text>
            </View>
            </View>
      {/* -----------------     Slide - 3   -------------------*/}
        <View style = {styles.slidecontainer} >
        <View style={{resizeMode: "contain",height: 400,width: 400}}>
                <ImageBackground style={{resizeMode: "contain",height: 400,width: 400}}
                    source={require('../../../assets/vectors/9.png')}/>
            </View>

            <View style = {styles.HeadingContainer}>
                <Text style={{color: 'white', fontSize:20, fontWeight: '700',
               fontFamily: 'Roboto',fontSize: 25,}}>Tournament</Text>
                <Text style = {styles.Title2}>Take part in professional tournament <br />
                with real prizes or create your own and play with friends.</Text>
            </View>
            </View>
    </Swiper>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'black',
  },
  slidecontainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  HeadingContainer:{
   paddingHorizontal: 30,
   justifyContent:'center',
   alignItems:'center',
  },
  Title1:{
    color: 'white',
    fontWeight: '700',
    fontFamily: 'Roboto',
    fontSize: 25,
  },
  Title2:{
    color: 'white',
    fontWeight: '700',
    fontFamily: 'Roboto',
    fontSize: 18,
  },
});


export default swiper;