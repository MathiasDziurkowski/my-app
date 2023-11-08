import { useIsFocused } from '@react-navigation/native';
import { useEffect, useMemo, useState } from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-elements'
import metadata from '../../storage.metadata.json'
import { list } from '@material-tailwind/react';
function ListScreen({ navigation }) {
    const [lista, setListas] = useState([])
    const focus = useIsFocused();

    useEffect(() => { getList() }, [focus])

    const saveList = async () => {
        const saveList = lista || "";
        await AsyncStorage.setItem(metadata.LIST.LISTNAME, JSON.stringify(saveList))
    }
    const getList = async () => {
        const listName = await AsyncStorage.getItem(metadata.LIST.LISTNAME);
        if (listName) {
            setListas(JSON.parse(listName))
        }
    }


    const deleteClick = () => {
        const newLista = [lista]
        newLista.splice(0, 1)
        setListas(newLista)
    }


    const listDisplay = useMemo(() => {

        return (
            <View className="flex-1 gap-5">
                {
                    lista.map((item, index) => {
                        return (

                            <View className="flex flex-row  justify-self-center gap-5 border rounded-xl dark: border-white  bg-emerald-600">
                                <Text className="dark: text-white">{item}</Text>
                                <Pressable onPress={deleteClick}><Icon name='delete'></Icon></Pressable>
                                <Pressable><Icon name='edit'></Icon></Pressable>
                            </View>
                        )
                    })
                }
            </View>
        )
    }, [lista])
    return (
        <View className="flex-auto flex-col gap-5 justify-center items-center align-middle dark: bg-gray-900 ">
            {listDisplay}
            <Text className="dark: text-white">List Screen</Text>
            <Pressable className="dark: bg-black p-6" onPress={() => { navigation.navigate('CreateList') }}><Text className="dark: text-white">Go to List Screen</Text></Pressable>
        </View>
    )
}

export default ListScreen