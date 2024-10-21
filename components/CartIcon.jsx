import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { featured } from "../data/categories";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const navigation = useNavigation();
  let total = useSelector((state) =>
    state.cart.items.reduce((t, item) => (t += item.price * item.quantity), 0)
  );
  const CartItems = useSelector((state) => state.cart.items);
  if (!CartItems?.length) return;
  return (
    <Box
      position={"absolute"}
      p={"2"}
      top={"190px"}
      opacity={"0.7"}
      w={"full"}
      zIndex={"50"}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "orange",
        }}
        onPress={() => navigation.navigate("Cart")}
        className="rounded-lg p-4 flex-row justify-between items-center"
      >
        <Text className="rounded-full font-extrabold text-gray-100 text-[18px]">
          View Cart
        </Text>
        <Text className="rounded-full font-extrabold text-2xl">$ {total}</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default CartIcon;
