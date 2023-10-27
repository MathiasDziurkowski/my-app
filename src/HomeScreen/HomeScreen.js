import * as React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({navigation}) {
    return (
      <View className="flex-1 items-center justify-center  dark: bg-gray-900">
        <Text className="dark: text-white">Home Screen</Text>
      </View>
    );
  }

  export default HomeScreen;