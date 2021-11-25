import React, { useState } from "react";

import { Text, View, Dimensions } from "react-native";
import {
  Box,
  extendTheme,
  Switch,
  Button,
  Center,
  Heading,
  VStack,
  HStack,
  useColorMode,
  Input,
  InputGroup,
  FormControl,
} from "native-base";
import tripStore from "../stores/tripStore";
import NativeBaseIcon from "../components/NativeBaseIcon";

// // extend the theme
// export const theme = extendTheme({ config });

const UpdateTrip = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [trip, setTrip] = useState({
    titel: "",
    image: "",
    description: "",
    owner: "",
  });
  const handleSubmit = () => {};

  const handleChange = (event) =>
    setTrip({ ...trip, [event.target.name]: event.target.value });

  return (
    <View>
      <Text>update page</Text>
    </View>
  );
};
export default UpdateTrip;
