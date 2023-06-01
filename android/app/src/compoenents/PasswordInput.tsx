import { StyleSheet, TextInput } from "react-native";


const inputStyle = StyleSheet.create({
      height: 40,
      borderWidth: 1,
      borderColor: 'black',
      borderStyle: 'solid',
      padding: 5,
      backgroundColor: 'cyan',
  });

export default  PasswordInput = ({placeholderText}) => {
    return (
      <TextInput
        style={inputStyle}
        secureTextEntry={true}
        placeholder={placeholderText}
      />
    );
  };