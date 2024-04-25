import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { bioData } from "../data/Biodata";
import { useNavigation } from "@react-navigation/native";

const BioScreen = () => {
  /**
   * A function that handles the selection of bio and navigates to the 'Home' screen with the selected bio text.
   */
  const navigation = useNavigation();

  const handleBioSelection = (selectedText) => {
    /**
     * A function that handles the selection of bio and navigates to the 'Home' screen with the selected bio text.
     *
     * @param {type} selectedText - description of the selected text parameter
     * @return {type} description of the return value
     */
    navigation.navigate("Home", { selectedBio: selectedText });
  };

  const renderItem = ({ item }) => (
    /**
     * Renders a single item in a FlatList, which is a TouchableOpacity containing a View with a Text component.
     *
     * @param {Object} item - An object containing the data for the item to be rendered.
     * @param {string} item.text - The text to be displayed in the Text component.
     * @return {JSX.Element} A TouchableOpacity component that calls handleBioSelection when pressed.
     */

    <TouchableOpacity onPress={() => handleBioSelection(item.text)}>
      <View style={styles.bioItem}>
        <Text style={styles.bioText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.bioContainer}>
      <Text style={styles.headerText}>Bio Prompt</Text>
      <FlatList
        data={bioData}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  bioContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  bioItem: {
    padding: 5,
    borderRadius: 8,
    marginBottom: 12,
  },
  bioText: {
    fontSize: 13,
    borderColor: "gray",
    padding: 8,
    paddingLeft: 0,
    borderBottomWidth: 0,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
});

export default BioScreen;
