import { Box, Image, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Minus, Plus } from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  addtoCart,
  removefromCart,
  selectCartItemById,
} from "../slices/CartSlices";

const DishesRow = ({ item }) => {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) => selectCartItemById(state, item.id));
  const handleDecrease = () => {
    dispatch(removefromCart({ id: item.id }));
  };
  const items = useSelector((state) => state.cart.items);

  const handleIncrease = () => {
    dispatch(
      addtoCart({
        ...item,
      })
    );
  };
  console.log(item, "item");
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      bg={"white"}
      px={2}
      py={2}
      mb={"3"}
      mx={2}
      rounded={"lg"}
      shadow={"2"}
    >
      {
        <>
          <Image
            source={item?.image}
            className="rounded-2xl"
            alt="name"
            style={{
              height: 100,
              width: 100,
            }}
          />
          <Box flex={1} pl={"1"}>
            <Text>{item.name}</Text>
            <Text fontSize={"7px"} fontWeight={"bold"}>
              {item?.description}
            </Text>
          </Box>

          <Box display={"flex"} flexDirection={"row"} gap="2">
            <TouchableOpacity
              className="bg-orange-500 p-1 rounded-full"
              onPress={handleDecrease}
              disabled={!totalItems?.length}
              style={{ display: totalItems?.length ? "" : "none" }}
            >
              <Minus stroke={"white"} />
            </TouchableOpacity>
            {item?.quantity}
            <TouchableOpacity
              className="p-1 rounded-full bg-orange-500"
              onPress={handleIncrease}
            >
              <Plus stroke={"white"} />
            </TouchableOpacity>
          </Box>
        </>
      }
    </Box>
  );
};

export default DishesRow;
