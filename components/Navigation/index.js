import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import TripList from "../TripList";
import TripDetail from "../TripDetail";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import UpdateTrip from "../UpdateTrip";
import CreateTrip from "../CreateTrip";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Signin">
      <Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "pink",
          },
        }}
      />
      <Screen
        name="UpdateTrip"
        component={UpdateTrip}
        options={{
          headerStyle: {
            backgroundColor: "pink",
          },
        }}
      />
      <Screen
        name="CreateTrip"
        component={CreateTrip}
        options={{
          headerStyle: {
            backgroundColor: "pink",
          },
        }}
      />
      <Screen
        name="TripList"
        component={TripList}
        // backgroundColor="gray"
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: "pink",
          },
        })}
      />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={({ navigation, route }) => {
          return {
            headerStyle: {
              backgroundColor: "pink",
            },
            title: route.params.trip.name,
          };
        }}
      />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
    </Navigator>
  );
};

export default RootNavigator;
