import { observer } from "mobx-react";
import { Spinner, Image } from "native-base";
import React from "react";
import { Button } from "react-native-elements";

import { StyleSheet, Text, View } from "react-native";
import tripStore from "../stores/tripStore";
import { baseURL } from "../stores/instance";
import authStore from "../stores/authStore";

const TripDetail = ({ route, navigation }) => {
  const { trip } = route.params;
  const { user } = route.params;

  if (tripStore.isLoading) {
    return <Spinner />;
  }

  const handleDelete = () => {
    tripStore.tripDelete(trip._id);
    navigation.navigate("TripList");
  };

  return (
    <View style={styles.tripDetailWrapper}>
      <Image
        // style={styles.tripDetailImage}
        style={{
          resizeMode: "contain",
          alignItems: "center",
          width: 300,
          height: 300,
        }}
        source={{ uri: baseURL + trip.image }}
        alt="image"
      />
      <Text style={styles.tripDetailTitle}>{trip.title}</Text>
      <Text style={styles.tripDescription}>{trip.description}</Text>
      <Text style={styles.tripDescription}>{trip.owner.username}</Text>

      {authStore.user?._id === trip.owner && (
        <>
          <Button title="delete trip" type="outline" onPress={handleDelete}>
            Delete Trip
          </Button>
          <Button
            title="update trip"
            type="outline"
            onPress={() => navigation.navigate("UpdateTrip", { trip: trip })}
          >
            Update Trip
          </Button>
        </>
      )}

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
    color: "#bed6df",
    textAlign: "center",
  },
  tripDescription: {
    fontSize: 20,
    color: "#ffc6ff",
    textAlign: "center",
  },
});
