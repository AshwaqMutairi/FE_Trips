import { observer } from "mobx-react";
import React from "react";
import { View, Text } from "react-native";
import tripStore from "../stores/tripStore";
import TripItem from "./TripItem";
import { Spinner } from "native-base";

const TripList = ({ navigation }) => {
  // if (tripStore.isLoading) {
  //   return <Spinner />;
  // }

  const tripList = tripStore.trips.map((trip) => (
    <TripItem navigation={navigation} trip={trip} key={trip._id} />
  ));
  return (
    <View>
      {tripList}
      {/* <Text>this is trip list page</Text> */}
    </View>
  );
};

export default observer(TripList);
