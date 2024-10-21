import { Box, Image, Text } from "native-base";
import React, { useEffect } from "react";
import { featured } from "../data/categories";
import { ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, Minus } from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { removefromCart } from "../slices/CartSlices";

const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const restaurant = useSelector((state) => state.resturant.resturant);
  const cart = useSelector((state) => state.cart?.items);
  let total = useSelector((state) =>
    state.cart.items.reduce((t, item) => (t += item.price * item.quantity), 0)
  );
  let deliveryfee = 4;
  const removeItem = (id) => {
    console.log("remove item");
    dispatch(removefromCart({ id: id }));
  };
  useEffect(() => {
    console.log("use effect");
  }, [cart]);
  return (
    <Box className=" flex-1 mt-2 rounded-t-2xl ">
      <Box position={"relative"}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-4 rounded-full p-2 left-2 bg-orange-500 z-10"
        >
          <ArrowLeft stroke={"white"} />
        </TouchableOpacity>
        <Box my={"2"}>
          <Text className="text-center font-bold">Your Cart</Text>
          <Text className="text-center  text-gray-400">{restaurant.name}</Text>
        </Box>
      </Box>
      <Box bg={"orange.100"}>
        <Box className="flex-row p-2 justify-between items-center">
          <Image
            className="rounded-full"
            source={require("../assets/images/bikeguy2.png")}
            width={10}
            height={10}
            alt="name"
          />
          <Box>
            <Text className="text-black font-bold">Your Rider</Text>
          </Box>

          <TouchableOpacity>
            <Text color={"orange.400"}>Change</Text>
          </TouchableOpacity>
        </Box>
      </Box>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 15,
        }}
        className="bg-white pt-5 mt-2"
      >
        {cart?.map((item) => {
          return (
            <Box className="flex-row m-2  items-center px-4 py-2 space-x-3 rounded-md bg-slate-200 shadow-lg">
              <Text className="text-orange-500 font-semibold ">
                {item.quantity}
              </Text>

              <Image
                className="rounded-full "
                source={item.image}
                width={20}
                height={20}
                alt="name"
              />
              <Text className=" flex-1">{item.name}</Text>
              <Text>{item.price}</Text>
              <TouchableOpacity
                className="p-0 rounded-full bg-orange-500"
                onPress={() => removeItem(item.id)}
              >
                <Minus stroke={"white"} />
              </TouchableOpacity>
            </Box>
          );
        })}
      </ScrollView>

      <Box className="py-6 px-5 bg-orange-100 space-y-5">
        <Box className="flex-row justify-between">
          <Text className="">SubTotal</Text>
          <Text className="">${total}</Text>
        </Box>
        <Box className="flex-row justify-between">
          <Text className="">SubTotal</Text>
          <Text className="">${cart.length > 0 ? deliveryfee : 0}</Text>
        </Box>
        <Box className="flex-row justify-between">
          <Text className="">SubTotal</Text>
          <Text className="">${cart.length > 0 ? total + deliveryfee : 0}</Text>
        </Box>
        {cart.length > 0 && (
          <Box>
            <TouchableOpacity
              className="p-3   bg-orange-500 rounded-full"
              onPress={() => navigation.navigate("OrderPreparing")}
            >
              <Text
                fontWeight={"extrabold"}
                textAlign={"center"}
                color={"white"}
                fontSize={"18px"}
              >
                Place Order
              </Text>
            </TouchableOpacity>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CartScreen;
