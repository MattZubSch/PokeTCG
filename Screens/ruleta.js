import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Animated } from 'react-native';

const MenuDesplazable = () => {
  const [options, setOptions] = useState(['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5']);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const { height: windowHeight, width: windowWidth } = Dimensions.get('window');


  const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
    useNativeDriver: false,
  });

  const getScale = index => {
    const inputRange = [(index - 1) * windowHeight, index * windowHeight, (index + 1) * windowHeight];
    const outputRange = [0.8, 1, 0.8];
  
    return scrollY.interpolate({
      inputRange,
      outputRange,
      extrapolate: 'clamp',
    });
  };;
  

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContainer}
      >
        {options.map((option, index) => (
          <Animated.Text key={index} style={[styles.option, { transform: [{ scale: getScale(index) }] }]}>
            {option}
          </Animated.Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  option: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default MenuDesplazable;
