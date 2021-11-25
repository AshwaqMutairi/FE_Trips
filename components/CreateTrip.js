import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
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
  Image,
  styles,
  InputGroup,
  FormControl,
  FormData,
  useToast,
} from "native-base";
import tripStore from "../stores/tripStore";
import NativeBaseIcon from "../components/NativeBaseIcon";

const CreateTrip = ({ navigation }) => {
  const toast = useToast();

  const [show, setShow] = useState(false);
  const [trip, setTrip] = useState({
    title: "",
    image: "",
    description: "",
    owner: "",
  });
  const handleSubmit = () => {
    tripStore.createTrip(trip, navigation, toast);
    navigation.navigate("TripList");
  };

  //   const handleChange = (event) =>
  //     setTrip({ ...trip, [event.target.name]: event.target.value });

  /////image picker
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],

        quality: 1,
      });

      if (!result.cancelled) {
        const localUri = result.uri;
        const filename = localUri.split("/").pop();
        const match = /.(\w+)$/.exec(filename);
        const image = {
          uri: localUri,
          name: filename,
          type: match ? `image/${match[1]}` : `image`,
        };
        setTrip({ ...trip, image: image });
      }
    } catch (error) {
      console.log(error);
    }
  };

  /////

  return (
    <View>
      <Box>
        <Heading size="lg" color="gray.400">
          create new trip now!
        </Heading>
        <VStack>
          <FormControl>
            <FormControl.Label>Trip Title</FormControl.Label>
            <Input onChangeText={(title) => setTrip({ ...trip, title })} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Trip Description</FormControl.Label>
            <Input
              onChangeText={(description) => setTrip({ ...trip, description })}
            />
          </FormControl>
          <View>
            <Button
              title="Pick an image from camera roll"
              onPress={pickImage}
            />
            {/* {trip.image && (
              <Image
                source={{ uri: trip.image }}
                style={{ width: 200, height: 200 }}
              />
            )} */}
          </View>
          <Button onPress={handleSubmit}>Create</Button>
        </VStack>
      </Box>
    </View>
  );
};
export default CreateTrip;
