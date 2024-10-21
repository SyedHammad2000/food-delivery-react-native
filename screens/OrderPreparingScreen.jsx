import {Box, Container, Image, Text} from 'native-base';
import React, { useEffect } from 'react';

const OrderPreparingScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('DeliveryScreen')
        },3000)

    },[])
  return (
    <Box className="flex-1 justify-center items-center  px-4 bg-white">
      <Image
        source={require('../assets/images/deliverygif.gif')}
        width={80}
        height={80}
        alt='name'
      />
    </Box>
  );
};

export default OrderPreparingScreen;
