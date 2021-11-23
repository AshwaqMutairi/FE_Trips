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
        style={styles.tripDetailImage}
        source={{ uri: baseURL + trip.image }}
        alt="image"
      />
      <Text style={styles.tripDetailTitle}>{trip.title}</Text>
      <Text>{trip.description}</Text>
      <Text>{trip.owner}</Text>
    </View>
  );
};
export default observer(TripDetail);

const styles = StyleSheet.create({
  tripDetailWrapper: {
    marginTop: 50,
  },
  tripDetailImage: {
    width: 150,
    height: 150,
  },
  tripDetailTitle: {
    fontWeight: "bold",
    fontSize: 40,
  },
});
