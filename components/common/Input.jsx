import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Input = (props) => {
    const [isFoused, setIsFocused] = useState(false)

    return (
        <>
            {props.label && <Text className="text-light-20 mb-2 text-base font-medium">{props.label}</Text>}
            <View className={`${isFoused ? "border border-secondary" : "border-0"} h-12 rounded-lg bg-gray-5 relative `} >
                {props.icon &&   <Text className={`absolute top-3 left-4`}>{props.icon}</Text>}
              
                <TextInput
                    className={`h-full text-light-20 text-base pr-4 pl-14 ${props.className} `}
                    placeholder={props.placeholder}
                    secureTextEntry={props.secureTextEntry}
                    value={props.value}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChangeText={props.onChangeText}
                />
            </View>
        </>
    )
}

export default Input