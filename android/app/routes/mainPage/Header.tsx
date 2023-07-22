import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';

const Header = ({toggleSidebar}) => {
  let [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpened(prevValue => !prevValue);
    toggleSidebar(isSidebarOpened);
  };
  const handleSettingsPress = () => {
    // Handle settings press
  };

  const handleLogoutPress = () => {
    // Handle logout press
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {/* Content on the left side of the header (if any) */}
        <Button title={'press'} onPress={handleToggleSidebar} />
      </View>
      <View style={styles.rightContainer}>
        <SearchField />
        <AvatarIcon
          onPress={() => {
            // Show dropdown menu
          }}
        />
      </View>
    </View>
  );
};

const SearchField = () => {
  return (
    <TextInput
      style={styles.searchField}
      placeholder="Search"
      // Additional props for the search field component
    />
  );
};

const AvatarIcon = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.avatarContainer} onPress={onPress}>
      {/* Place your avatar icon component here */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '8%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#1a6e31',
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchField: {
    width: 200,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 12,
    marginRight: 10,
    backgroundColor: '#F2F2F2',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
