import { observer } from "mobx-react";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import tripStore from "../stores/tripStore";
import TripItem from "./TripItem";
import { Spinner, Button, Alert, useToast, HStack, VStack } from "native-base";
import authStore from "../stores/authStore";

// const showAlert = () =>
//   Alert.alert(
//     "Alert Title",
//     "My Alert Msg",
//     [
//       {
//         text: "Cancel",
//         onPress: () => Alert.alert("Cancel Pressed"),
//         style: "cancel",
//       },
//     ],
//     {
//       cancelable: true,
//       onDismiss: () =>
//         Alert.alert(
//           "This alert was dismissed by tapping outside of the alert dialog."
//         ),
//     }
//   );

const TripList = ({ navigation }) => {
  if (tripStore.isLoading) {
    return <Spinner />;
  }
  const toast = useToast();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSignout = () => {
    authStore.signout(user, navigation, toast);
    navigation.replace("Signin");
  };

  const tripList = tripStore.trips.map((trip) => (
    <TripItem navigation={navigation} trip={trip} key={trip._id} />
  ));
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* <View> */}
        <HStack>
          <Button onPress={handleSignout}>Sign-out</Button>
          <Button onPress={handleSignout}>Create New Trip?</Button>
          {/* <Button title="Show alert" onPress={showAlert}>
          Create New Trip?
        </Button> */}
        </HStack>
        <VStack style={{ marginTop: 50 }}>{tripList}</VStack>
        {/* <Text>this is trip list page</Text> */}
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    // backgroundColor: "#e4e4ec",
    backgroundColor: "#fff9ff",
    // marginHorizontal: 0,
  },
  // text: {
  //   fontSize: 42,
  // },
});

export default observer(TripList);
