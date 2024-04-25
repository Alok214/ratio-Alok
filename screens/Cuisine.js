import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { cuisines } from "../data/CuisineData";

const CuisineSelectionScreen = () => {
  /**
   * Handles the selection of cuisines by adding or removing them from the selectedCuisines state.
   */
  const navigation = useNavigation();
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  const handleSelectCuisine = (cuisine) => {
    /**
     * Handles the selection of cuisines by adding or removing them from the selectedCuisines state.
     *
     * @param {string} cuisine - The cuisine to be selected or deselected.
     * @return {void} This function does not return anything.
     */
    if (selectedCuisines.length < 2 || selectedCuisines.includes(cuisine)) {
      setSelectedCuisines((prevSelected) => {
        if (prevSelected.includes(cuisine)) {
          return prevSelected.filter((item) => item !== cuisine);
        } else {
          return [...prevSelected, cuisine];
        }
      });
    } else {
      alert("Please select up to two cuisines");
    }
  };

  const goBack = () => {
    /**
     * Navigates back to the 'Home' screen.
     *
     * @return {void} This function does not return anything.
     */
    navigation.navigate("Home");
  };

  const handleCuisine = () => {
    /**
     * Navigates to the 'Home' screen and passes the selected cuisines as a parameter.
     *
     * @return {void} This function does not return anything.
     */
    navigation.navigate("Home", { selectedCuisines });
  };

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={goBack}>
          <Text style={{ fontSize: 18, textDecorationLine: "underline" }}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCuisine}>
          <Text style={{ fontSize: 18, textDecorationLine: "underline" }}>
            Done
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.headerText}>Cuisine</Text>
        <Text style={styles.subHeaderText}>
          Let everyone know what cuisine you love to eat. Choose up to two
          cuisines to add to your profile.
        </Text>
      </View>

      <View style={styles.selectedCuisinesContainer}>
        <View style={styles.selectedCuisines}>
          {selectedCuisines.map((cuisine) => (
            <Text key={cuisine} style={styles.selectedCuisine}>
              {cuisine}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.subContainer}>
        {cuisines.map((region) => (
          <View key={region.name} style={styles.regionContainer}>
            <Text style={styles.regionText}>{region.name}</Text>
            <View style={styles.optionsContainer}>
              {region.options.map((cuisine) => (
                <TouchableOpacity
                  key={cuisine}
                  style={[
                    styles.optionButton,
                    selectedCuisines.includes(cuisine) && styles.selectedOption,
                  ]}
                  onPress={() => handleSelectCuisine(cuisine)}
                >
                  <Text style={styles.optionText}>{cuisine}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 12,
  },
  subContainer: {
    marginBottom: 100,
  },
  regionContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
  regionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  optionButton: {
    // padding: 2,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 1,
    margin: 3,
    width: "31%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ede7e6",
  },
  selectedOption: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  optionText: {
    fontSize: 12,
    color: "#333",
  },
  selectedCuisinesContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  selectedCuisines: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  selectedCuisine: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default CuisineSelectionScreen;
