import {Alert, Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import PasswordInput from '../../src/components/PasswordInput';
import {styles} from '../../../../App';
import {useState} from 'react';

const backgroundStyle = {
  backgroundColor: 'gray',
  height: '100%',
  padding: '5%',
  display: 'flex',
  alignItems: 'center',
  marginTop: 20,
};

export const LoginPage = ({userLoggedIn}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = text => {
    setPassword(text);
    setIsMatching(text === confirmPassword || confirmPassword === '');
  };

  const handleConfirmPasswordChange = text => {
    setConfirmPassword(text);
    setIsMatching(text === password || text === '');
  };

  const handleFormSubmit = () => {
    if (password === confirmPassword) {
      //Alert.alert('Success', 'Passwords match!');
      userLoggedIn && userLoggedIn(true);
    } else {
      // Passwords don't match, display an error message
      Alert.alert('Error', 'Passwords do not match!');
    }
  };

  const [isMatching, setIsMatching] = useState(true);

  return (
    <SafeAreaView style={backgroundStyle}>
      <TextInput
        placeholder="Username"
        style={[styles.input, {marginBottom: 15}]}
      />
      <PasswordInput
        placeholderText={'Enter password'}
        value={password}
        onChangeText={handlePasswordChange}
      />
      <PasswordInput
        placeholderText="Repeat password"
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
        style={[
          confirmPassword === ''
            ? ''
            : isMatching
            ? passwordStyles.matchingInput
            : passwordStyles.mismatchingInput,
        ]}
      />

      <Button title="Submit" onPress={handleFormSubmit} style={{margin: 10}} />
    </SafeAreaView>
  );
};

const passwordStyles = StyleSheet.create({
  matchingInput: {
    borderColor: 'green',
  },
  mismatchingInput: {
    borderColor: 'red',
  },
});
