import { styled } from "nativewind";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const StyledView = styled(View)


function CreateList({ navigation }) {
    const [name, setName] = useState("");
    

    return (
        <StyledView className="flex-1 justify-center items-center dark: bg-gray-900">
            <Text className="dark: text-white">Create List</Text>
            <TextInput className="dark: text-white" placeholder="Coloque o nome da sua lista" onChangeText={setName}></TextInput>
            <Button title="Create your list" onPress={() => { navigation.navigate('List', {name: name}) }}></Button>
        </StyledView>
    )
}

export default CreateList