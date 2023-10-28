import { useState } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';



function ListScreen(props) {
    const [lista, setListas] = useState([""])
    
    return(
        <View className="flex-1 justify-center items-center dark: bg-gray-900 ">
            <Text className="dark: text-white">List Screen</Text>
            
        </View>
    )
}

export default ListScreen