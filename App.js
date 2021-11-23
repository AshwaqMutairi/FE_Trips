// import { NativeBaseProvider } from "native-base";
// // import { NavigationContainer } from "@react-navigation/native";
// import { extendTheme } from "native-base";
// // import Navigation from "./components/Navigation";
// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import Home from "./components/Home";
// import Signup from "./components/Authentication/Signup";

import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation";

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <Home /> */}
    //   <Signup />
    //   {/* <Text>app.js page</Text> */}
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      <NativeBaseProvider>
        <RootNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
