import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import TripList from "../TripList";
import TripDetail from "../TripDetail";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="TripList">
      <Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#50bfc3",
          },
        }}
      />
      <Screen
        name="TripList"
        component={TripList}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: "#1784b2",
          },
        })}
      />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={({ navigation, route }) => {
          return {
            headerStyle: {
              backgroundColor: "#356290",
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
