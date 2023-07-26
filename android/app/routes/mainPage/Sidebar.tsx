import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const Sidebar = ({ sidebarOpened }) => {
  const sidebarWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(sidebarWidth, {
      toValue: sidebarOpened ? 65 : 5,
      duration: 300, 
      useNativeDriver: false,
    }).start();
  }, [sidebarOpened]);

  const interpolatedWidth = sidebarWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ['5%', '65%'],
  });

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
