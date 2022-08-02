import { View, Text, StyleSheet, Image, ImageBackground} from 'react-native'
import React from 'react'


const SplashScreen = () => {
  return (
    <View style = {styles.MainViewContainer} >

        <View style = {styles.IMGcontainer}>
            <ImageBackground  style = {styles.IMGcontainer}
            source={require('../../assets/logos/6.png')}
            />
        </View>

        <View style = {styles.HeadingContainer}>
            <Text style = {styles.Title}>E-Sports</Text>
            <Text style = {styles.Title}>Gaming</Text>
        </View>

    </View>
  )
}


const styles = StyleSheet.create({
    MainViewContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    IMGcontainer:{
        paddingTop: 50,
        height: '80%',
        width: '100%',
   
    },
    HeadingContainer:{
       position: 'absolute',
       paddingTop: 100,
    },
    Title:{
        color:'white',
        fontWeight: '700',
        fontSize: 32,
        padding: 5,
    }
})

export default SplashScreen;