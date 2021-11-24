import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
// import { fontStyle } from "styled-system";
import { baseURL } from "../stores/instance";
// import styles from "../../styles";

const TripItem = ({ trip, navigation }) => {
  console.log(trip);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: "30",
          fontWeight: "bold",
          letterSpacing: "2",
          color: "pink",
        }}
        onPress={() => navigation.navigate("TripDetail", { trip: trip })}
      >
        {trip.title}
      </Text>
      <Image
        source={{ uri: baseURL + trip.image }}
        style={{
          resizeMode: "contain",
          width: 300,
          height: 300,
          marginBottom: 40,
          // shadowColor: "gray",
        }}
      />
    </View>
  );
};

export default TripItem;

// const styles = StyleSheet.create({});
const styles = StyleSheet.create({
  container: {
    display: "flex",
    // flexDirection: "vertical",
    justifyContent: "space-around",
    alignItems: "center",
    // height: "100%",
    textAlign: "center",
  },
});
