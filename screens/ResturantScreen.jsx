import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowBackIcon, Box, Heading, Image, SunIcon, Text } from "native-base";
import React, { useEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import DishesRow from "../components/DishesRow";
import CartIcon from "../components/CartIcon";
import { useDispatch } from "react-redux";
import { setResturant } from "../slices/ResturantSlices";
import { MapPin } from "react-native-feather";

const ResturantScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  console.log(params);
  const item = params;
  const dispatch = useDispatch();
  useEffect(() => {
    if (item && item.id) {
      dispatch(setResturant({ ...item }));
      console.log("items");
    }
  }, [item]);

  return (
    <Box>
      <CartIcon />
      <ScrollView>
        <Box position={"relative"}>
          <Image
            source={item?.image}
            width={"100%"}
            height={300}
            alt={item?.name}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              top: 20,
              left: 10,
              backgroundColor: "white",
              padding: 10,
              borderRadius: 100,
            }}
          >
            <ArrowBackIcon />
          </TouchableOpacity>
        </Box>
        <Box
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          bg={"white"}
          className="-mt-12 pt-7"
        >
          <Box px={4}>
            <Text className="text-3xl" fontWeight={"bold"}>
              {item.name}
            </Text>
            <Box display={"flex"} flexDirection={"row"} my={1} gap={6}>
              <Box display={"flex"} flexDirection={"row"} gap="2">
                <Text>{item?.reviews} rating</Text>
                <Text fontWeight={"bold"} textTransform={"uppercase"}>
                  {item?.category}
                </Text>
              </Box>
              <Box display={"flex"} flexDirection={"row"} gap="4">
                <MapPin stroke={'black'} fill={'orange'} />
                <Text>Nearby {item?.address}</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box bg={"white"} px="4" pt={2}>
          <Heading>Menu</Heading>
          <Box>
            {item.dishes.map((item, index) => {
              return <DishesRow item={{ ...item }} key={index} />;
            })}
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default ResturantScreen;
