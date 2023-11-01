import { useIsFocused } from '@react-navigation/native';
import { useEffect, useMemo, useState } from 'react';
import { View, Text, Button, Pressable} from 'react-native';
import { Icon } from 'react-native-elements'
function ListScreen({navigation , route}) {
    const {name} = route.params
    const [lista, setListas] = useState([name])
    const focus = useIsFocused();
    
    const deleteClick = () => {
        const newLista = [lista]
        newLista.splice(0,1)
        setListas(newLista)
    }

    
    const listDisplay = useMemo(() => { 
        
        if (lista.length > 0){
        return(
            <View className="flex flex-row  justify-self-center gap-5 border rounded-xl dark: border-white  bg-emerald-600">
                <Text className="dark: text-white">{lista}</Text>
                <Pressable onPress={deleteClick}><Icon name='delete'></Icon></Pressable>
                <Pressable><Icon name='edit'></Icon></Pressable>
            </View>
        )
        }
    }, [lista])
    return(
        <View className="flex-auto flex-col gap-5 justify-center items-center align-middle dark: bg-gray-900 ">
            {listDisplay}
            <Text className="dark: text-white">List Screen</Text>
            <Pressable className="dark: bg-black p-6"  onPress={() => {navigation.navigate('CreateList')}}><Text className="dark: text-white">Go to List Screen</Text></Pressable>
        </View>
    )
}

export default ListScreen