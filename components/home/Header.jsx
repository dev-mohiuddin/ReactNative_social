import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const Header = () => {
  return (
    <View className="flex flex-row items-center justify-between mt-1" >
      <View >
        <Text className="text-light-30 font-black text-2xl tracking-tighter">Vibe<Text className="text-secondary">Stream</Text></Text>
      </View>

      <View className="flex flex-row items-center gap-3" >
        <View className="flex flex-row justify-end items-center w-32 h-8 bg-gray-5 rounded-full">
          <TextInput
            placeholder="Search"
            placeholderTextColor={"white"}
            className="bg-transparent pl-3 h-full flex-1 mr-2 rounded-l-full text-light-20"
          />
          <TouchableOpacity className="mr-1" >
            <Ionicons name="search" size={24} color={"white"} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <AntDesign name="setting" size={24} color="white" />
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Header;
