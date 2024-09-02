import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import GoogleIc from '../../assets/icon/GoogleIc'
import GithubIc from '../../assets/icon/GithubIc'

const SocialIcons = () => {
    return (
        <View className="flex flex-row items-center justify-center">
            <TouchableOpacity className="bg-secondary/20 mx-2 rounded-lg px-16 py-2">
                <GoogleIc
                    className="text-secondary"
                />
            </TouchableOpacity>
            <TouchableOpacity className="bg-secondary/20 mx-2 rounded-lg px-16 py-2">
                <GithubIc
                    className="text-secondary"
                />
            </TouchableOpacity>
        </View>
    );
};

export default SocialIcons;