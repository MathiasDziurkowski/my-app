import { View, Text, Button, StyleSheet} from 'react-native';

;

function ListScreen({navigation}) {
    return(
        <View className="flex-1 justify-center items-center dark: bg-gray-900 ">
            <Text className="dark: text-white">List Screen</Text>
            <Button title='Go to Create List' onPress={() => navigation.navigate("CreateList")}></Button>
        </View>
    )
}

export default ListScreen