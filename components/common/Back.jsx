
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import BackIcon from '../../assets/icon/Back'

const Back = () => {
    const router = useRouter()
    return (
        <Pressable
            className="w-9 h-9 bg-secondary shadow-md shadow-yellow-500 flex justify-center items-center rounded-3xl"
            onPress={() => router.back()}
        >
            <BackIcon
                className="text-white"
            />
        </Pressable>
    )
}

export default Back