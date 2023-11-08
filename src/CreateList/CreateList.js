import AsyncStorage from "@react-native-async-storage/async-storage";
import { styled } from "nativewind";
import { useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import metadata from '../../storage.metadata.json'

const StyledView = styled(View)


function CreateList({ navigation }) {
    const [name, setName] = useState("");

    const getList = async () => {
        const listName = await AsyncStorage.getItem(metadata.LIST.LISTNAME);
        if (listName) {
            return JSON.parse(listName) 
        }
    }

    const saveList = async () => {
        var saveList = await getList() || "";
        saveList.push(name) 
        await AsyncStorage.setItem(metadata.LIST.LISTNAME, JSON.stringify(saveList))
    }

    const handleClick = async () => {
        await saveList()
        navigation.navigate('List')
    }



    return (
        <StyledView className="flex-1 flex-col gap-6 justify-center items-center dark: bg-gray-900">
            <Text className="dark: text-white">Create List</Text>
            <TextInput className="dark: text-white border-2 border-white rounded-xl" placeholder="Coloque o nome da sua lista" onChangeText={setName}></TextInput>
            <Pressable className="dark: p-6 bg-black rounded-xl" onPress={handleClick}><Text className="text-white">Create your List</Text></Pressable>
        </StyledView>
    )
}

export default CreateList