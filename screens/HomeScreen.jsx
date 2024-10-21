import {
  Box,
  Button,
  Input,
  SearchIcon,
  StatusBar,
  SunIcon,
  Text,
} from 'native-base';
import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Marker} from 'react-native-svg';
import Categories from '../components/Categories';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} />
      <Box display={'flex'} alignItems={'center'} flexDir={'row'} p={2}> 
        <Box
          display={'flex'}
          flex={1}
          rounded={'full'}
          flexDirection={'row'}
          alignItems={'center'}
          p={2}
          mt="2"
          borderColor={'gray.300'}
          borderWidth={1}
          borderRadius={'full'}>
          <SearchIcon size="xl" />
          <Input
            placeholder="Resturant"
            ml={'2'}
            flex={1}
            borderColor={'white'}
          />
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            pl={2}
            //! borderLeft
            borderColor={'gray.300'}
            borderLeftWidth={1}>
            <SunIcon />
            <Text ml={2}>Karachi,PKC</Text>
          </Box>
        </Box>
      </Box>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
