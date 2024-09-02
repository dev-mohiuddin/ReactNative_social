import { View, Text, Image } from 'react-native'
import React from 'react'
import { useRouter } from "expo-router";
import AppIntroSlider from "react-native-app-intro-slider";
import { slides } from '../../assets/staticData';

const Onboard = () => {
    const router = useRouter()

    return (
        <AppIntroSlider
            className="bg-gray-10"
            data={slides}
            renderItem={({ item }) => {
                return (
                    <View className="items-center">
                        <Image
                            className="h-[65%] w-full object-cover gap-3r"
                            source={item.image}
                            resizeMode="contain"
                        />
                        <View className="flex flex-col gap-2 justify-center items-center">
                            <Text className="text-3xl font-bold text-light-30" >
                                {item.title}
                            </Text>
                            <Text className="text-base font-medium text-light-20" >
                                {item.subtitle}
                            </Text>
                        </View>
                    </View>
                )
            }}
            activeDotStyle={{
                backgroundColor: '#d97706',
                width: 30,
            }}
            showSkipButton
            renderNextButton={() => buttonLabel("Next")}
            renderSkipButton={() => buttonLabel("Skip")}
            renderDoneButton={() => buttonLabel("Get Start")}
            onDone={() => {
                router.push("/auth/signin")
            }}
        />
    )
}

export default Onboard

const buttonLabel = (label) => {
    return (
        <View className="px-4 h-10 flex justify-center items-center bg-secondary rounded-full">
            <Text className="text-light-30">
                {label}
            </Text>
        </View>
    )
}