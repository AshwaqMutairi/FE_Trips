import React, { useState } from "react";
// import { InputGroup, FormControl, Modal } from "react-bootstrap";
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

const Home = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [trip, setTrip] = useState({
    titel: "",
    image: "",
    description: "",
    owner: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault(event);

    tripStore.Home(user, navigation);
  };
  //   const handleChange = (event) =>
  //     setTrip({ ...trip, [event.target.name]: event.target.value });

  return (
    <Center>
      <Box>
        <Heading size="lg" fontWeight="600" color="ray.300">
          Creat A New Trip!
        </Heading>
        <VStack>
          {/* space={3} mt="5" */}
          <FormControl>
            <FormControl.Label>Trip Title</FormControl.Label>
            <Input onChangeText={(titel) => setTrip({ ...trip, titel })} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Trip Description</FormControl.Label>
            <Input
              type="description"
              onChangeText={(description) => setTrip({ ...trip, description })}
            />
          </FormControl>
        </VStack>
        <HStack>
          <Button onPress={handleSubmit}>create trip</Button>
        </HStack>
      </Box>
    </Center>
  );
};
export default Home;
