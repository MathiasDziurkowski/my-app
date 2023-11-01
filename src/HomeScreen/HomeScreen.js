import * as React from 'react';
import { View, Text, Button, Pressable } from 'react-native';

function HomeScreen({ navigation }) {
    return (
      <View className="flex-1 flex-col gap-5 items-center justify-center  dark: bg-gray-900">
        <Text className="dark: text-white">Home Screen</Text>
        <Pressable className="dark: p-6 bg-black rounded-xl" onPress={() => {navigation.navigate('CreateList')}}><Text className="dark: text-white">Go to CreateList Screen</Text></Pressable>
      </View>
    );
  }

  export default HomeScreen;