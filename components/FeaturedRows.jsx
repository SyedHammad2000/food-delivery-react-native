import { useNavigation } from "@react-navigation/native";
import { Box, Heading, Text, View } from "native-base";
import React from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

const FeaturedRows = ({ title, description, id, resturant }) => {
  const navigation = useNavigation();

  return (
    <>
      <Box
        mt={2}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Box gap={1} p={1}>
          <Heading>{title}</Heading>
          <Text width={"200px"}>{description}</Text>
        </Box>
        <TouchableOpacity>
          <Text color={"orange.400"} my={"auto"} underline fontSize={"xl"}>
            See All
          </Text>
        </TouchableOpacity>
      </Box>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {resturant?.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate("Resturant", { ...item })}
            >
              <Box
                rounded={"md"}
                mr={"6px"}
                className="bg-white  rounded-xl "
                shadow={"2"}
              >
                <Image
                  className="h-36 w-64 rounded-t-3xl "
                  source={item.image}
                  alt="name    "
                />
                <Box p={2}>
                  <Text fontSize={"md"} pl={2} pb={"2"} fontWeight={"bold"}>
                    {item?.name}
                  </Text>
                </Box>
              </Box>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </>
  );
};

export default FeaturedRows;
