import {useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';

export default () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const handleSidebarToggle = newValue => {
    setIsSidebarOpened(newValue);
  };
  return (
    // <View style={{height: '100'}}> fookin breaks the app
    <KeyboardAvoidingView style={styles.mainPageContainer}>
      <Header toggleSidebar={handleSidebarToggle} />
      <Sidebar sidebarOpened={isSidebarOpened} />
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  mainPageContainer: {
    height: '100%',
    // maxHeight: '200%',
  },
});
