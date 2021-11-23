import React from "react";
import { Text, View, Dimensions } from "react-native";
import {
  extendTheme,
  Switch,
  Button,
  Center,
  Heading,
  VStack,
  HStack,
  useColorMode,
} from "native-base";

import NativeBaseIcon from "../components/NativeBaseIcon";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
// extend the theme
export const theme = extendTheme({ config });

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Trips App home page</Text>
    </View>
  );
};
export default Home;

// const Home = ({ navigation }) => {
//   return (
//     <View>
//       <Center
//         _dark={{ bg: "blueGray.900" }}
//         _light={{ bg: "blueGray.50" }}
//         px={4}
//         height={Dimensions.get("window").height}
//       >
//         <VStack space={5} alignItems="center">
//           <NativeBaseIcon />
//           <Heading size="lg">Trips App</Heading>
//           <ToggleDarkMode />
//           <Button
//             onPress={() => {
//               navigation.navigate("TripList");
//             }}
//           >
//             Show Trip List
//           </Button>
//         </VStack>
//       </Center>
//     </View>
//   );
// };

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

// export default Home;
