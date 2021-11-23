import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { baseURL } from "../stores/instance";
// import styles from "../../styles";

const TripItem = ({ trip, navigation }) => {
  console.log(trip);
  return (
    <View>
      <Text onPress={() => navigation.navigate("TripDetail", { trip: trip })}>
        {trip.title}
      </Text>
      <Image
        source={{ uri: baseURL + trip.image }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
};

export default TripItem;

const styles = StyleSheet.create({});
