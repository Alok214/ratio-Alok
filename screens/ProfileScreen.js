import React, {useState, useEffect } from 'react';
import {ScrollView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useNavigation, useRoute } from '@react-navigation/native'; 

const ProfileScreen = () => {
  /**
 * Renders the Home Screen component.
 */
  const navigation = useNavigation();
  const route = useRoute();

  const [selectedGender, setselectedGender] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [instagramHandle, setInstagramHandle] = useState('');
  const [bio, setBio] = useState('');
  const [rangeValues, setRangeValues] = useState([18, 25]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  
  useEffect(() => {
    if (route.params && route.params.selectedBio) {
      setBio(route.params.selectedBio);
    }
  }, [route.params]);

  useEffect(() => {
    if (route.params && route.params.selectedCuisines) {
      setSelectedCuisines(route.params.selectedCuisines); 
    }
  }, [route.params]);

  const onValuesChange = (values) => {
      /**
   * A function that handles the values of age range.
   * there should be a at least 4 years difference when a user is determining the age.
   */
    if (values[1] - values[0] >= 4) {
      setRangeValues(values);
    }
  };

  const handleNavigateCuisine = () => {
    /**
   * Navigates to the 'Cuisine' screen.
   */
    navigation.navigate('Cuisine');
  };

  const handleNavigateToBioPage = () => {
      /**
   * Navigates to the 'Bio' screen.
   */
    navigation.navigate('Bio'); 
  };
  const handleGenderSelection = (x) => {
      /**
   * Updates the selected gender state based on user input.
   *
   * param: {string} x - The selected gender value.
   * return {void} 
   */
    setselectedGender(x);
  }
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity >
        <Text style={styles.arrow}>&#8594;</Text>
      </TouchableOpacity>
      <Text style={styles.title}>WHAT ARE YOU LOOKING FOR</Text>

      <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[styles.btn, selectedGender === 'Male' && styles.selectedMale]}
            onPress={() => handleGenderSelection('Male')}
          >
            <Text>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, selectedGender === 'Female' && styles.selectedFemale]}
            onPress={() => handleGenderSelection('Female')}
          >
            <Text>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, selectedGender === 'Both' && styles.selectedBoth]}
            onPress={() => handleGenderSelection('Both')}
          >
            <Text>Both</Text>
          </TouchableOpacity>
        </View>
      
      <View style={styles.ageContainer}>
        <Text style={styles.title}>WHAT IS YOUR IDEAL PARTNER AGE </Text>
        <Text style={styles.title}>{rangeValues[0]}-{rangeValues[1]}</Text>
      </View>

      <View style={styles.slider}>
      <MultiSlider
        values={[rangeValues[0], rangeValues[1]]}
        sliderLength={300}
        min={18}
        max={30}
        step={1}
        onValuesChange={onValuesChange}
        allowOverlap={false}
        snapped
      />
      </View>
       
       <View style={styles.box}>
        <Text style={styles.title}>INSTAGRAM</Text>
        <TextInput
          style={styles.textInput}
          value={instagramHandle}
          onChangeText={setInstagramHandle}
          placeholder="Enter your Instagram handler"
        />
      </View>

      <View style={styles.box}>
      <Text style={styles.title}>CUISINE</Text>
      <View style={styles.cuisineContainer}>
        <TextInput
          style={styles.textInput}
          value={selectedCuisines.join(', ')}
          onChangeText={setCuisine}
          placeholder="Choose up to two cuisines"
        />
        <TouchableOpacity onPress={handleNavigateCuisine}>
          <Image
            style={styles.image}
            source={require("../assets/cuisine.png")}
          />
        </TouchableOpacity>
      </View>
      </View>

      <View style={styles.box}>
      <Text style={styles.title}>WRITE A SHORT BIO</Text>
      <TextInput
        style={styles.textArea}
        value={bio}
        onChangeText={setBio}
        multiline={true}
        numberOfLines={4}
        placeholder="Don't over think about the bio. Just write whatever that pops up on your mind what you want your potential matches to know about you!"
      />
      
      <Text style={styles.lastBox}>Need help with your Bio? <Text style={styles.boldText} onPress={handleNavigateToBioPage}>Here are some Prompts</Text></Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  arrow: {
    fontSize:25,
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  slider: {
    width:'100%',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft:0,
  },
  boldText: {
    fontWeight: 'bold',
  },
  box: {
    flex:1,
    marginBottom:10,
    marginTop:10,
  },
  ageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:5,
    marginTop:10,
  },
  cuisineContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:5,
    marginTop:10,
  },
  title: {
    fontSize: 12,
    marginBottom: 0,
    fontWeight: 'bold',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop:10,
  },
  btn: {
    backgroundColor:'#e8e6e6',
    padding: 10,
    borderRadius: 5,
    paddingLeft: 28,
    paddingRight: 28,
  },
  textInput: {
    marginBottom: 10,
    width:300,
    height: 40,
    borderColor: 'gray',
    padding: 8,
    paddingLeft:0,
    borderBottomWidth: 2,
    borderTopWidth: 0, 
    borderLeftWidth: 0, 
    borderRightWidth: 0,
  },
  boldText: {
    fontWeight: 'bold',
  },
  image: {
    width:20,
    height:20,
    zIndex:10,
  },
  textArea : {
    height:110,
    color:'#333',
    backgroundColor:'#e8e6e6',
    borderRadius:15,
    padding:8,
    marginTop:10,
    textAlignVertical: 'top',
  },
  lastBox : {
    marginTop:20,
    marginBottom:100,
  },
  selectedMale: {
    backgroundColor: 'blue',
  },
  selectedFemale: {
    backgroundColor: 'pink',
  },
  selectedBoth: {
    backgroundColor: 'yellow',
  },
});
export default ProfileScreen;