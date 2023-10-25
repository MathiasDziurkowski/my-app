import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function CreateList() {
    return(
        <View style={styles.container}>
            <Text>Create List</Text>
            <TextInput placeholder="Coloque o nome da sua lista"></TextInput>
            <Button title="create your list" onPress={() => {}}></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default CreateList