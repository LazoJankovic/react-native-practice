/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {PropsWithChildren} from 'react';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import PasswordInput from './android/app/src/components/PasswordInput';
import {LoginPage} from './android/app/routes/loginPage';
import {useState} from 'react';
import MainPage from './android/app/routes/mainPage';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Create a callback function to update the isLoggedIn state
  const handleLogin = value => {
    setIsLoggedIn(value);
  };
  return (
    <View style={styles.mainView}>
      {/* <LoginPage userLoggedIn={handleLogin} />*/}

      {true ? <MainPage /> : <LoginPage userLoggedIn={handleLogin} />}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
  },
});
