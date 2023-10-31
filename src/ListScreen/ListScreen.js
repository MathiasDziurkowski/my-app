import { useIsFocused } from '@react-navigation/native';
import { useMemo, useState } from 'react';
import { View, Text, Button} from 'react-native';
function ListScreen({navigation , route}) {
    const {name} = route.params
    const [lista, setListas] = useState([name])
    const focus = useIsFocused();

    
    const listDisplay = useMemo(() => { 
        return(
            <View>
                <Text>{lista}</Text>
            </View>
        )
    }, [lista])
    return(
        <View className="flex-1 justify-center items-center dark: bg-gray-900 ">
            {listDisplay}
            <Text className="dark: text-white">List Screen</Text>
            <Button title='Go to List Screen' onPress={() => {navigation.navigate('CreateList')}}></Button>
        </View>
    )
}

export default ListScreen