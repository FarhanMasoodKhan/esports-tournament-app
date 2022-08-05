import React , {useState} from 'react'
import { View, Text, StyleSheet, ScrollView , Image, Pressable, Modal,TextInput, TouchableOpacity,} from 'react-native'

const HomeScreen = ({navigation})  =>{


const [modalVisible, setModalVisible] = useState(false);

const toggleModal = () =>
         {setModalVisible(!modalVisible);
      };

  return (
    <View style={styles.HomeScreenContainer}>
      <ScrollView style={styles.ScrollContainer}
          showsVerticalScrollIndicator={false}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>

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

});

export default HomeScreen;

