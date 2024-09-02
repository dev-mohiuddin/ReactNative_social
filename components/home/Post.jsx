import { View, Text, Image } from 'react-native'
import React from 'react'
import Avater from '../common/Avater'
import postImage from '../../assets/images/appimage/post1.png'

const Post = () => {
    return (
        <View className="p-2 bg-gray-5 rounded-xl mt-5">
            {/* Post Header */}
            <View className="flex-row">
                <Avater />
                <View>
                    <View className="flex-row gap-2 relative">
                        <Text className="text-light-30 text-base font-bold tracking-tight">Mohiuddin</Text>
                        <Text className="text-sm text-light-10 top-1 " >সুন্দর অনুভব করছেন 😘</Text>
                    </View>
                    <View className="flex-row ">
                        {/* <Text className="font-normal italic text-light-20">@username</Text> */}
                        <Text className="text-xs font-thin text-light-30" >3d ago</Text>
                    </View>
                </View>
            </View>

            <View className="mt-2" >
                <Text className="text-light-20 ml-1 text-[15px] leading-6">
                    এটি আমার আজকে ফেসবুকে প্রথম পোষ্ট। আমার খুব ভালো লাগছে যে আমি ভাইবস্ট্রিম ব্যবহার করতে পারছি।
                </Text>
            </View>

            <View className="h-52 w-full mt-3">
                <Image
                    source={postImage}
                    className="w-full h-full object-cover rounded-xl"
                />
            </View>
            <View className="flex-row justify-between px-1 my-2">

                <View className="flex-row gap-3">
                    <Text className="text-light-20">Love</Text>
                    <Text className="text-light-20">Coment</Text>
                </View>
                <View>
                    <Text className="text-light-20">saved</Text>
                </View>
            </View>
        </View>
    )
}

export default Post