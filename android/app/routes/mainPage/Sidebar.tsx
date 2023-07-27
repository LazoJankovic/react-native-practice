import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const Sidebar = ({ sidebarOpened }) => {
  const sidebarWidth = useRef(new Animated.Value(0)).current;

  // Calculate the desired width values for the sidebar
  const minSidebarWidth = '5%';
  const maxSidebarWidth = '70%';

  const interpolatedWidth = sidebarWidth.interpolate({
    inputRange: [0, 100], 
    outputRange: [minSidebarWidth, maxSidebarWidth],
  });

  useEffect(() => {
    Animated.timing(sidebarWidth, {
      toValue: sidebarOpened ? 100 : 0, 
      duration: 300, 
      useNativeDriver: false,
    }).start();
  }, [sidebarOpened]);

  return (
    <Animated.View style={[styles.container, { width: interpolatedWidth }]}>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    height: '100%',
  },
});

export default Sidebar;
