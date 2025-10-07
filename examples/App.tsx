import React, { JSX } from 'react';
import { StyleSheet, View, Text, FlatList, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DropDownPickerExample, { ExampleProps } from './example-src-files/example';

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flexDirection: 'column',
    margin: 'auto',
    marginTop: 64,
    marginBottom: 64,
    padding: 3,
    maxWidth: 600,
    minWidth: 400
  },
  examplesContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 32
  },
  exampleCard: {
    zIndex:0,
    borderRadius: 8,
    marginBottom: 48
  }
});

const EXAMPLES: ExampleProps[] = [{
  title: "Default Example",
  description: "This is the default dropdown picker"
},{
  title: "Multiple Select",
  description: "Multiple select example",
  multiple: true
},{
  title: "Multiple Select Badge Mode",
  description: "Multiple select example - with badges",
  multiple: true,
  dropdownProps: {mode: "BADGE"},
},{
  title: "Autoscroll Example",
  description: "This is the default dropdown picker - with autoscroll",
  dropdownProps: {autoScroll: true},
},{
  title: "Searchable Example",
  description: "This is the default dropdown picker - with search",
  dropdownProps: {searchable: true},
},{
  title: "Multiple Search Example",
  description: "This is the default dropdown picker - with search",
  multiple: true,
  dropdownProps: {searchable: true},
},{
  title: "Multiple Search Clear on Select Example",
  description: "This is the default dropdown picker - with search",
  multiple: true,
  dropdownProps: {searchable: true, clearSearchFieldOnSelect: true, mode: "BADGE"},
},{
  title: "Modal Example",
  description: "This is the default dropdown picker - with search",
  multiple: true,
  dropdownProps: {listMode: "MODAL"}
}]

export default function App(): JSX.Element {
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === 'dark' ? '#222' : '#fff';
  
  const renderItem = ({ item }: { item: ExampleProps }) => (
    <View style={styles.exampleCard} key={item.title}>
      <DropDownPickerExample 
        {...item}
      />
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{
        ...styles.page,
        backgroundColor,
      }}>
        <FlatList
          data={EXAMPLES}
          style={{zIndex: 0}}
          keyExtractor={(example: ExampleProps) => example.title}
          renderItem={renderItem}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </GestureHandlerRootView>
  );
}
