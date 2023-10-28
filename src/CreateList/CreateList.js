import { styled } from "nativewind";
import { Button, Text, TextInput, View } from "react-native";

const StyledView = styled(View)

function CreateList(props) {
    

    return(
        <StyledView className="flex-1 justify-center items-center dark: bg-gray-900">
            <Text className="dark: text-white">Create List</Text>
            <TextInput className="dark: text-white" placeholder="Coloque o nome da sua lista" onChangeText={props.tarefa}></TextInput>
            <Button title="Create your list" onPress={() => {handleClick}}></Button>
        </StyledView>
    )
}

export default CreateList