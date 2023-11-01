import { styled } from "nativewind";
import { useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";

const StyledView = styled(View)


function CreateList({ navigation }) {
    const [name, setName] = useState("");
    

    return (
        <StyledView className="flex-1 flex-col gap-6 justify-center items-center dark: bg-gray-900">
            <Text className="dark: text-white">Create List</Text>
            <TextInput className="dark: text-white border-2 border-white rounded-xl" placeholder="Coloque o nome da sua lista" onChangeText={setName}></TextInput>
            <Pressable className="dark: p-6 bg-black rounded-xl" onPress={() => { navigation.navigate('List', {name: name}) }}><Text className="text-white">Create your List</Text></Pressable>
        </StyledView>
    )
}

export default CreateList