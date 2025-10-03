import React, { JSX, useState } from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import DropDownPicker, { ItemType } from 'react-native-dropdown-picker';
import JavascriptClassExample from './example-src-files/javascript-class-example';
import JavascriptFunctionExample from './example-src-files/javascript-function-example';
import TypescriptClassExample from './example-src-files/typescript-class-example';
import TypescriptFunctionExample from './example-src-files/typescript-function-example';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DropDownPickerExample from './example-src-files/example';

enum ExampleComponent {
  JavaScriptClassSingleValue,
  JavaScriptClassMultiValue,
  JavaScriptFunctionSingleValue,
  JavaScriptFunctionMultiValue,
  TypeScriptClassSingleValue,
  TypeScriptClassMultiValue,
  TypeScriptFunctionSingleValue,
  TypeScriptFunctionMultiValue,
}

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
  }
});

export default function App(): JSX.Element {
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === 'dark' ? '#222' : '#fff';
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{
        ...styles.page,
        backgroundColor,
      }}>
        <View style={styles.container}>
          <View style={styles.examplesContainer}>
            <DropDownPickerExample 
              title="Default Example"
              description="This is the default dropdown picker"
              />
            
            <DropDownPickerExample
              title="Multiple Select"
              description="Multiple select example"
              multiple
              />
          
            <DropDownPickerExample
              title="Multiple Select Badge Mode"
              description="Multiple select example - with badges"
              multiple
              dropdownProps={{mode: "BADGE"}}
              />

            <DropDownPickerExample 
              title="Autoscroll Example"
              description="This is the default dropdown picker - with autoscroll"
              dropdownProps={{autoScroll: true}}
              />


            <DropDownPickerExample 
              title="Searchable Example"
              description="This is the default dropdown picker - with search"
              dropdownProps={{searchable: true}}
              />
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
