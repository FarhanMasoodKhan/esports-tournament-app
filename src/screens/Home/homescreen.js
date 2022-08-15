import React , {useState, Component, useRef   } from 'react'
import { View, Text, StyleSheet, ScrollView , Image, Pressable, Modal,TextInput, TouchableOpacity,  ImageBackground,
Animated, useWindowDimensions} from 'react-native'
import { Appbar } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";


const HomeScreen = ({navigation})  =>{
  
const _filter = () => {
      // alert('Filtering');
    }
 
const [modalVisible, setModalVisible] = useState(false);
const [Profile, setProfile] = useState(false);

const toggleProfile = () =>
         {setModalVisible(!Profile);
      };

const toggleModal = () =>
         {setModalVisible(!modalVisible);
      };

const images = new Array(3).fill('https://images2.alphacoders.com/597/597965.jpg', 'https://cdn.wallpapersafari.com/51/72/faVQir.jpg');

const scrollX = useRef(new Animated.Value(0)).current;
const { width: windowWidth } = useWindowDimensions();

return (

<View style={styles.HomeScreenContainer}>

 <Appbar.Header style={styles.header}>
       <Modal
          animationType="fade"
          transparent={true}
          visible={Profile}
          onRequestClose={() => {
            setModalVisible(!Profile);
          }}>
             <View  style = {styles.HeaderModelBox}>
             <Pressable
              onPress={() => setProfile(!Profile)}>
              <Image source={require('../../../assets/icons/cross.png')}
                style={styles.CrossIconHeader}
              /></Pressable>
              <View  style = {styles.HeaderModelPerson}>
              <Ionicons name="person"/>
              <Text style = {styles.HeaderModelText}>User Profile</Text>
              </View>
              <View  style = {styles.HeaderModelSetting}>
              <Ionicons name="settings"/>
              <Text style = {styles.HeaderModelText}>Setting</Text>
              </View>
              <View  style = {styles.HeaderModelLogout}>
              <Ionicons name="log-out"/>
              <Text style = {styles.HeaderModelText}>Logout</Text>
              </View>
             </View>
          </Modal>

      <Appbar.Content title="DashBoard" />
      <Appbar.Action icon="bell" onPress={_filter}/>

        <Pressable
          onPress={() => setProfile(!Profile)}>
          <Image source={require('../../../assets/images/person.jpg') }
             style = {styles.HeaderIconImage}/>
        </Pressable>
      </Appbar.Header>

      <ScrollView style={styles.ScrollContainer}
          showsVerticalScrollIndicator={false}>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>


{/* Model  */}
        <View style={styles.ModelBoxContainer}>
        <Image style = {styles.RoundModelImage}
        source={require('../../../assets/images/pubg.png')}
        />
        <Pressable  style={styles.CrossIcon}
          onPress={() => setModalVisible(!modalVisible)}>
          <Image source={require('../../../assets/icons/cross.png')}
            style={styles.CrossIconImage}
          />
        </Pressable>
          <View style={styles.ModelBox}>
            <View style={styles.ModelInputs}>
              <TextInput style={styles.placeholder} 
              placeholder="User Name"/>
              <TextInput style={styles.placeholder}
              placeholder="Game ID"/>
              </View>

              <View style = {styles.RegisterButton}>
              <TouchableOpacity 
                onPress={() => { navigation.navigate("Game1")
                toggleModal();}}>
              <Text style={styles.RegisterBtn}>Register</Text>
              </TouchableOpacity>
              </View>
              
          </View>
      </View>
    </Modal>


{/* swiper */}

<View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ])}
          scrollEventThrottle={1}
        >
          {images.map((image, imageIndex) => {
            return (
              <View
                style={{ width: windowWidth, height: 200 }}
                key={imageIndex}
              >
                <ImageBackground source={{ uri: image }} style={styles.card}/>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1)
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp"
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View>


{/* -------- */}


      <Pressable style={styles.GameContainer}
        onPress={() => setModalVisible(true)}>
        <Image source={require('../../../assets/images/nfs2.jpg')} 
        style={styles.GameImage}
        />
        <Text style={styles.GameText}
        >Play Now</Text>
        </Pressable>

      <Pressable style={styles.GameContainer}
        onPress={() => setModalVisible(true)}> 
        <Image source={require('../../../assets/images/nfs2.jpg')} 
        style={styles.GameImage}
        />
        <Text style={styles.GameText}
        >Play Now</Text>
        </Pressable>

        <Pressable style={styles.GameContainer}
        onPress={() => setModalVisible(true)}> 
        <Image source={require('../../../assets/images/pubg.png')} 
        style={styles.GameImage}
        />
        <Text style={styles.GameText}
        >Starts in 05:03</Text>
        </Pressable>

        <Pressable style={styles.GameContainer}
        onPress={() => setModalVisible(true)}> 
        <Image source={require('../../../assets/images/carrace1.jpg')} 
        style={styles.GameImage}
        />
        <Text style={styles.GameText}
        >In Match</Text>
        </Pressable>

        <Pressable style={styles.GameContainer}
        onPress={() => setModalVisible(true)}> 
        <Image source={require('../../../assets/images/pubgm.jpg')} 
        style={styles.GameImage}
        />
        <Text style={styles.GameText}
        >Starts in 10:03</Text>
        </Pressable>

        <Pressable style={styles.GameContainer}
        onPress={() => setModalVisible(true)}> 
        <Image source={require('../../../assets/images/nfs2.jpg')} 
        style={styles.GameImage}
        />
        <Text style={styles.GameText}
        >In Match</Text>
        </Pressable>

        <Pressable style={styles.GameContainer}
        onPress={() => setModalVisible(true)}> 
        <Image source={require('../../../assets/images/carrace2.jpg')} 
        style={styles.GameImage}
        />
        <Text style={styles.GameText}
        >Starts in 15:03</Text>
        </Pressable>


        <Pressable style={styles.GameContainer}
        onPress={() => setModalVisible(true)}> 
        <Image source={require('../../../assets/images/pubg.png')} 
        style={styles.GameImage}
        />
        <Text style={styles.GameText}
        >Play Now</Text>
        </Pressable>


        <Pressable style={styles.GameContainer}
        onPress={() => setModalVisible(true)}> 
        <Image source={require('../../../assets/images/carrace3.webp')} 
        style={styles.GameImage}
        />
        <Text style={styles.GameText}
        >Starts in 26:03</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  
  header: {
    backgroundColor: '#FF5412',
  },
  HeaderIconImage:{
    height: 30,
    width: 30,
    borderRadius: 100,
  },

  HeaderModelBox:{
    marginLeft: 260,
    marginTop: 58,
    alignContent: 'center',
    backgroundColor: 'white',
    height: 120,
    width: 120,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CrossIconHeader:{
    height: 10,
    width: 10,
    flexDirection: 'row',
  },
  
  HeaderModelText:{
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  HeaderModelPerson:{
    flexDirection: 'row',
  },
  
  HeaderModelSetting:{
    flexDirection: 'row',
  },
  
  HeaderModelLogout:{
    flexDirection: 'row',
  },

  HomeScreenContainer:{
    flex: 1,
    backgroundColor: 'black',
  },
  ScrollContainer:{
      paddingHorizontal: 20,
  },
  GameContainer:{
    height: 200,
    width: '100%',
    paddingVertical: 10,
    justifyContent: 'flex-end', 
    alignItems: 'flex-start',
  },
  GameImage: {
    width: '100%',
    height: '100%',
  },

  GameText:{
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: '600',
    color: 'black',
    position: 'absolute',
    paddingVertical: '5px',
    paddingHorizontal:'20px',
    marginVertical: '5px',
    marginHorizontal: '5px',
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius:50,
  },

//  MODEL BOX STYLES

Bannercontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  ModelBoxContainer:{
    width: '65%',
    height: '45%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(000,000,000,0.8)',
    marginHorizontal: '70px',
    marginVertical: '150px',
    paddingHorizontal: '10px',
    paddingVertical: '10px',
    borderRadius: 50,
  },


  RoundModelImage:{
    top: -80,
    height: '20%',
    width: '30%',
    border: '2px solid black',
    borderRadius: '100%',
  },

  CrossIcon:{
    top: -120,
    left: 90,
    padding: '10px',
  },
  CrossIconImage:{
    height: 20,
    width: 20,
  },

  ModelInputs:{
    bottom: 50, 
    flexDirection:'column',
    color: 'red',

  },
  placeholder:{
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor : 'white',
  },

  RegisterButton:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
    paddingVertical: 10,
    paddingHorizontal: 10,
  }, 
  RegisterBtn:{
      paddingVertical: 7,
      paddingHorizontal: 14,
      borderRadius: 30,
      fontWeight: '600',
      textTransform: 'uppercase',
      backgroundColor: '#FF5412',
      color:'white',
    },


    //  swiper

    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    scrollContainer: {
      height: 200,
      alignItems: "center",
      justifyContent: "center"
    },
    card: {
      flex: 1,
      marginVertical: 4,
      marginHorizontal: 16,
      borderRadius: 5,
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center"
    },
    textContainer: {
      backgroundColor: "rgba(0,0,0, 0.7)",
      paddingHorizontal: 24,
      paddingVertical: 8,
      borderRadius: 5
    },
    normalDot: {
      height: 8,
      width: 8,
      borderRadius: 4,
      backgroundColor: "orange",
      marginHorizontal: 4
    },
    indicatorContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
});

export default HomeScreen;