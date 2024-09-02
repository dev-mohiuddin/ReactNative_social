import { View, Text, Image } from 'react-native'
import React from 'react'
import profileImage from '../../assets/images/appimage/avater.png'

const Avater = (props) => {
    return (
        <View className="mr-3.5">
            <View className={`
            ${props.border ? "border-2 border-secondary" : ""}
            ${props.big ? "!h-16 !w-16" : "h-12 w-12" } overflow-hidden rounded-full `}>
                <Image
                    className="h-full w-full object-cover"
                    source={profileImage}
                />
            </View>
            {props.name && <Text className="text-light-20 font-semibold">{props.name}</Text>}
        </View>
    )
}

export default Avater