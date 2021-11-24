import { observer } from "mobx-react";
import { Spinner, Image } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tripStore from "../stores/tripStore";
import { baseURL } from "../stores/instance";

const TripDetail = ({ route }) => {
  const { trip } = route.params;

  if (tripStore.isLoading) {
    return <Spinner />;
  }

  return (
    <View style={styles.tripDetailWrapper}>
      <Image
        // style={styles.tripDetailImage}
        style={{ resizeMode: "contain", width: 300, height: 300 }}
        source={{ uri: baseURL + trip.image }}
        alt="image"
      />
      <Text style={styles.tripDetailTitle}>{trip.title}</Text>
      <Text style={styles.tripDescription}>{trip.description}</Text>
      <Text style={styles.tripDescription}>{trip.owner.username}</Text>
      {console.log(trip.owner.username)}
    </View>
  );
};
export default observer(TripDetail);

const styles = StyleSheet.create({
  tripDetailWrapper: {
    marginTop: 50,
  },
  tripDetailImage: {
    display: "flex",
    resizeMode: "contain",
    width: 250,
    height: 250,
    justifyContent: "space-around",
    alignItems: "center",
  },
  tripDetailTitle: {
    fontWeight: "bold",
    fontSize: 40,
    color: "gray",
    textAlign: "center",
  },
  tripDescription: {
    fontSize: 20,
    color: "pink",
    textAlign: "center",
  },
});
