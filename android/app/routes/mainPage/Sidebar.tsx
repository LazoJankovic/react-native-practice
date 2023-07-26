import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const Sidebar = ({ sidebarOpened }) => {
  const sidebarWidth = sidebarOpened ? '65%' : '5%';

  return (
    <View style={[styles.container, { width: sidebarWidth }]}>
      {/* Add your child components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    height: '100%',
  },
});

export default Sidebar;
