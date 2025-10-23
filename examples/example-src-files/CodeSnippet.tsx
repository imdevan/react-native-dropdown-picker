
import React, { useState } from 'react';
import {
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ghcolors, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeSnippetProps {
  code: string;
}

export default function CodeSnippet({ code }: CodeSnippetProps): JSX.Element {
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === 'dark' ? '#333' : '#f5f5f5';
  const color = colorScheme === 'dark' ? '#fff' : '#222';
  const syntaxStyle = colorScheme === 'dark' ? tomorrow : ghcolors;

  const [isExpanded, setIsExpanded] = useState(false);
  const height = useSharedValue(0);
  const contentHeight = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
  }));

  const toggle = () => {
    height.value = withTiming(isExpanded ? 0 : contentHeight.value, {
      duration: 300,
    });
    setIsExpanded(!isExpanded);
  };

  const onLayout = (event: LayoutChangeEvent) => {
    contentHeight.value = event.nativeEvent.layout.height;
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Pressable onPress={toggle} style={styles.header}>
        <Text style={[styles.headerText, { color }]}>
          {isExpanded ? 'Hide Code' : 'Show Code'}
        </Text>
      </Pressable>
      <Animated.View style={animatedStyle}>
        <View onLayout={onLayout} style={styles.codeContainer}>
          <SyntaxHighlighter language='jsx' style={syntaxStyle}>
            {code}
          </SyntaxHighlighter>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  header: {
    padding: 10,
  },
  headerText: {
    fontWeight: 'bold',
  },
  codeContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});
