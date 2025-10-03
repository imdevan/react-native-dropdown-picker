import React, { JSX, useState } from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import DropDownPicker, { ItemType } from 'react-native-dropdown-picker';
import JavascriptClassExample from './example-src-files/javascript-class-example';
import JavascriptFunctionExample from './example-src-files/javascript-function-example';
import TypescriptClassExample from './example-src-files/typescript-class-example';
import TypescriptFunctionExample from './example-src-files/typescript-function-example';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    flexDirection: 'column',
    margin: 'auto',
    marginTop: 20,
    padding: 3,
    maxWidth: 400,
  },
});

const EXAMPLE_COMPONENT_ITEMS: Array<ItemType<ExampleComponent>> = [
  {
    label: 'JavaScript; class component; single-item',
    value: ExampleComponent.JavaScriptClassSingleValue,
  },
  {
    label: 'JavaScript; class component; multiple-item',
    value: ExampleComponent.JavaScriptClassMultiValue,
  },
  {
    label: 'JavaScript; function component; single-item',
    value: ExampleComponent.JavaScriptFunctionSingleValue,
  },
  {
    label: 'JavaScript; function component; multiple-item',
    value: ExampleComponent.JavaScriptFunctionMultiValue,
  },
  {
    label: 'TypeScript; class component; single-item',
    value: ExampleComponent.TypeScriptClassSingleValue,
  },
  {
    label: 'TypeScript; class component; multiple-item',
    value: ExampleComponent.TypeScriptClassMultiValue,
  },
  {
    label: 'TypeScript; function component; single-item',
    value: ExampleComponent.TypeScriptFunctionSingleValue,
  },
  {
    label: 'TypeScript; function component; multiple-item',
    value: ExampleComponent.TypeScriptFunctionMultiValue,
  },
];

const getExample = (egComponent: ExampleComponent): JSX.Element => {
  switch (egComponent) {
    case ExampleComponent.JavaScriptClassSingleValue:
      return <JavascriptClassExample multiple={false} />;
    case ExampleComponent.JavaScriptClassMultiValue:
      return <JavascriptClassExample multiple />;
    case ExampleComponent.JavaScriptFunctionSingleValue:
      return <JavascriptFunctionExample multiple={false} />;
    case ExampleComponent.JavaScriptFunctionMultiValue:
      return <JavascriptFunctionExample multiple />;
    case ExampleComponent.TypeScriptClassSingleValue:
      return <TypescriptClassExample multiple={false} />;
    case ExampleComponent.TypeScriptClassMultiValue:
      return <TypescriptClassExample multiple />;
    case ExampleComponent.TypeScriptFunctionSingleValue:
      return <TypescriptFunctionExample multiple={false} />;
    case ExampleComponent.TypeScriptFunctionMultiValue:
      return <TypescriptFunctionExample multiple />;
    default:
      throw new Error(
        "couldn't match example component in getExample() in App.tsx. egComponent was: ",
        egComponent,
      );
  }
};

export default function App(): JSX.Element {
  const [currentExample, setCurrentExample] = useState<ExampleComponent>(
    ExampleComponent.JavaScriptClassSingleValue
  );
  const [examplePickerOpen, setOpen] = useState<boolean>(false);
  const [exampleComponents] = useState<Array<ItemType<ExampleComponent>>>(
    EXAMPLE_COMPONENT_ITEMS
  );

  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === 'dark' ? '#222' : '#fff';
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{
        ...styles.page,
        backgroundColor,
      }}>
        <View style={styles.container}>
          <View style={{ marginBottom: 32 }}>
            <View style={{ marginBottom: 32 }}>
              <Text>Choose example:</Text>
            </View>

            <View style={{ marginBottom: 32 }}>
              <DropDownPicker
                setValue={setCurrentExample}
                value={currentExample}
                items={exampleComponents}
                open={examplePickerOpen}
                setOpen={setOpen}
              />
            </View>
          </View>

          <View style={{ marginBottom: 32 }}>
            <View style={{ marginBottom: 32 }}>
              <Text>Example:</Text>
            </View>

            {getExample(currentExample)}
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
