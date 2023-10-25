import { View, Text, Button, StyleSheet} from 'react-native';

;

function ListScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text>List Screen</Text>
            <Button title='Go to Create List' onPress={() => navigation.navigate("CreateList")}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


})
export default ListScreen