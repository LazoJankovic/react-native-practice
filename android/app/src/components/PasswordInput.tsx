import {StyleSheet, TextInput} from 'react-native';

const inputStyle = StyleSheet.create({
  height: 40,
  borderWidth: 2,
  borderColor: 'black',
  borderStyle: 'solid',
  padding: 5,
  backgroundColor: 'cyan',
  width: 200,
  marginTop: 10,
  marginHorizontal: 5,
});

export default PasswordInput = ({placeholderText, ...props}) => {
  return (
    <TextInput
      {...props}
      secureTextEntry={true}
      placeholder={placeholderText}
      style={[inputStyle, props.style]}
    />
  );
};
