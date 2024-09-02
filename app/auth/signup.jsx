
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router"
import SocialIcons from "../../components/common/SocialIcons";
import Back from "../../components/common/Back";

const SignUp = () => {

  const router = useRouter()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View className="bg-gray-20 h-full px-4 relative">
      <View className="absolute top-2 left-3">
        <Back />
      </View>
      <View className="mt-36">
        <Text className="text-3xl text-light-30 font-extrabold tracking-tighter">Create your Account</Text>
      </View>
      <View className="mt-4">
        <TextInput
          onChangeText={setEmail}
          placeholder={"Name"}
          placeholderTextColor={"white"}
          value={email}
          className="bg-gray-5 rounded-xl py-3 pl-5"
        />
        <TextInput
          onChangeText={setEmail}
          placeholder={"Email"}
          placeholderTextColor={"white"}
          value={email}
          className="bg-gray-5 mt-3 rounded-xl py-3 pl-5"
        />
        <TextInput
          secureTextEntry={true}
          onChangeText={setPassword}
          placeholder={"Password"}
          placeholderTextColor={"white"}
          value={password}
          className="bg-gray-5 mt-3 rounded-xl py-3 pl-5"
        />
        <TouchableOpacity
          className="my-2 flex items-end"
        >
          <Text className="text-light-10 font-normal">Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => router.push("/home")}
        className="h-12 bg-secondary shadow-md shadow-secondary flex justify-center items-center rounded-xl" >
        <Text className="text-light-20 font-medium text-base">Sign Up</Text>
      </TouchableOpacity>

      <View className="mt-10">
        <Text className="text-light-20 text-center">Or Continue With</Text>
        <View className="mt-4">
          <SocialIcons />
        </View>
        <View className="mt-16 flex flex-row items-center justify-center">
          <Text className="text-light-20">Already have a account?</Text>
          <TouchableOpacity onPress={() => router.push("auth/signin")}>
            <Text className="text-secondary underline"> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  );
};

export default SignUp;