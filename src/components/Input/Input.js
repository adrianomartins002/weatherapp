import { TextInput } from 'react-native';

export default function TextInputBase({
onTextChange,
textValue
}){
    return(
        <TextInput placeholder='Name' 
        onChangeText={onTextChange}
        value={textValue}
        style={{
            width: 300,
            height: 40,
            paddingLeft: 14,
            borderBottomColor: '#CCC',
            borderBottomWidth: 1,
            fontSize: 18
            // backgroundColor: 'red'
        }}></TextInput>
    )
}