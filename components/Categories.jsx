import { Box, Flex, Image, Text } from "native-base";
import React, { useEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { categories, featured } from "../data/categories";
import FeaturedRows from "./FeaturedRows";
import { getCategories } from "../api";

const Categories = () => {
  useEffect(() => {
    getCategories().then((data) => {
      console.log(data, "categories");
    });
  }, []);
  return (
    <Box>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        <Box
          display={"flex"}
          flex={1}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {categories?.map((item) => {
            return (
              <>
                <Flex mr={"5px"} key={item.id}>
                  <TouchableOpacity
                    style={{
                      padding: 1,
                      backgroundColor: "grey",
                      borderRadius: 100,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={item?.image}
                      alt="image"
                      width={50}
                      height={50}
                    />
                  </TouchableOpacity>
                  <Text textAlign={"center"}>{item?.name}</Text>
                </Flex>
              </>
            );
          })}
        </Box>
        <Box>
          {featured.map((item, ind) => {
            return (
              <FeaturedRows
                key={ind}
                title={item.title}
                description={item.description}
                id={item.id}
                resturant={item.restaurant}
              />
            );
          })}
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Categories;
