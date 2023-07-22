import React, {useState, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';

const Sidebar = ({toggleSidebar, children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarWidth = isOpen ? '65%' : '5%';

  const screenWidth = Dimensions.get('window').width;
  const sidebarPosition = useRef(
    new Animated.Value(isOpen ? 0 : -screenWidth * 0.65),
  ).current;

  const animateSidebar = () => {
    const toValue = isOpen ? -screenWidth * 0.65 : 0;
    Animated.spring(sidebarPosition, {
      toValue,
      useNativeDriver: true,
    }).start();
    setIsOpen(!isOpen);
    toggleSidebar(!isOpen);
  };

  return (
    <View style={[styles.container, {width: sidebarWidth}]}>
      <TouchableOpacity onPress={animateSidebar} style={styles.button}>
        {/* You can add your toggle button or icon here */}
      </TouchableOpacity>
      <Animated.View
        style={[styles.sidebar, {transform: [{translateX: sidebarPosition}]}]}>
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#FFF', // Customize the sidebar background color
  },
  button: {
    position: 'absolute',
    left: 0,
    zIndex: 1,
    width: '5%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    backgroundColor: '#FFF', // Customize the sidebar background color
  },
});

export default Sidebar;
