import { Box, Flex, Image, useToast } from "native-base";
import React from "react";
import { featured } from "../data/categories";
import MapView, { Marker } from "react-native-maps";
import { Dimensions, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { PhoneIncoming, X } from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../slices/CartSlices";

const DeliveryScreen = () => {
  const navigate = useNavigation();
  const res = useSelector((state) => state.resturant.resturant);
  const dispatch = useDispatch();
  const toast = useToast();

  const cancelOrder = async () => {
    await dispatch(emptyCart());
    navigate.navigate("Home");
    toast({
      title: "Order Cancelled",
      status: "success",
      duration: 2000,
      pos:'top'
    });
  };
  return (
    <View className="flex-1 bg-white">
      <MapView
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        initialRegion={{
          latitude: res.lat,
          longitude: res.lng,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        className="flex-1"
      >
        <Marker
          coordinate={{
            latitude: res.lat,
            longitude: res.lng,
          }}
          title={res.name}
          description={res.description}
          pinColor="red"
        />
      </MapView>
      <Flex
        direction="row"
        py={"4"}
        bgColor={"amber.300"}
        className="rounded-t-2xl relative"
      >
        <Box px={"2"}>
          <Text className="text-xl  p-1">Estimated Time</Text>
          <Text className="text-xl text-black font-extrabold p-1">
            20-30 Minutes
          </Text>
          <Text className="text-md  p-1">Your order on its way</Text>
        </Box>
        <Image
          source={require("../assets/images/deliverygif.gif")}
          width={"10"}
          height={"10"}
          className="my-auto ml-[120px] "
          alt="name"
        />
      </Flex>
      <Box className="bg-amber-300 p-4">
        <TouchableOpacity>
          <Flex
            direction="row"
            justify="space-between"
            bg={"orange.500"}
            rounded={"full"}
            position={"relative"}
            p={2}
          >
            <Image
              source={require("../assets/images/burger.png")}
              width={10}
              height={10}
              className="rounded-full"
              alt="name"
            />

            <Box className="flex-1">
              <Text>Syed Hammad</Text>
              <Text>Your Order</Text>
            </Box>
            <TouchableOpacity className="p-2 bg-white rounded-full mr-1">
              <PhoneIncoming stroke={"green"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelOrder}
              className="p-2 bg-white rounded-full"
            >
              <X stroke={"red"} className="" />
            </TouchableOpacity>
          </Flex>
        </TouchableOpacity>
      </Box>
    </View>
  );
};

export default DeliveryScreen;
