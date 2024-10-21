import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ResturantScreen from "./screens/ResturantScreen";
import CartScreen from "./screens/CartScreen";
import OrderPreparingScreen from "./screens/OrderPreparingScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Resturant" component={ResturantScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen
              name="OrderPreparing"
              component={OrderPreparingScreen}
            />
            <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;

// import { NativeBaseProvider, Text } from "native-base";
// import React from "react";
// import { View } from "react-native";

// const App = () => {
//   return (
//     <NativeBaseProvider>
//       <View>
//         <Text>Hello World</Text>
//       </View>
//     </NativeBaseProvider>
//   );
// };

// export default App;
