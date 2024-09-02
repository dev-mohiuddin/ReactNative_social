import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/home/Header';
import Avater from '../../components/common/Avater';
import Post from '../../components/home/Post';

const Index = () => {
  return (
    <View className="flex-1 px-4 bg-gray-30">
      <Header />
      <View className="mt-4 flex flex-row ">
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map(() => (
            <Avater
              border
              big
              name="Mohiuddin"
            />
          ))
        }
      </View>

      <View className="mt-5 ">
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map(() => (
            <Post />
          ))
        }

      </View>

    </View>
  );
};

export default Index;
