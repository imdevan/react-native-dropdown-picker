import React, { JSX } from 'react';
import { FlatList, StyleSheet, View, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DropDownPickerExample, {
  ExampleProps,
} from './example-src-files/example';

const EXAMPLES: Array<ExampleProps> = [
  {
    title: 'Default Example',
    description: 'This is the default dropdown picker',
  },
  {
    title: 'Multiple Select',
    description: 'Multiple select example',
    multiple: true,
  },
  {
    title: 'Multiple Select Badge Mode',
    description: 'Multiple select example - with badges',
    multiple: true,
    dropdownProps: { mode: 'BADGE' },
  },
  {
    title: 'Autoscroll Example',
    description: 'This is the default dropdown picker - with autoscroll',
    dropdownProps: { autoScroll: true },
  },
  {
    title: 'Searchable Example',
    description: 'This is the default dropdown picker - with search',
    dropdownProps: { searchable: true },
  },
  {
    title: 'Multiple Search Example',
    description: 'This is the default dropdown picker - with search',
    multiple: true,
    dropdownProps: { searchable: true },
  },
  {
    title: 'Multiple Search Clear on Select Example',
    description: 'This is the default dropdown picker - with search',
    multiple: true,
    dropdownProps: {
      searchable: true,
      clearSearchFieldOnSelect: true,
      mode: 'BADGE',
    },
  },
  {
    title: 'Modal Example',
    description: 'This is the default dropdown picker - with search',
    multiple: true,
    dropdownProps: { listMode: 'MODAL' },
  },
];

/**
 *
 */
export default function App(): JSX.Element {
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === 'dark' ? '#222' : '#fff';

  const renderItem = ({ item }: { item: ExampleProps }) => (
    <DropDownPickerExample {...item} />
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{
          ...styles.page,
          backgroundColor,
        }}>
        <FlatList
          data={EXAMPLES}
          keyExtractor={(example: ExampleProps) => example.title}
          renderItem={renderItem}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          CellRendererComponent={({ index, style, children }) => (
            // Remove flatlsit view that wraps children for dropdown zIndex support
            <>{children}</>
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 'auto',
    marginBottom: 64,
    marginTop: 64,
    maxWidth: 600,
    minWidth: 400,
    padding: 3,
    position: 'relative',
    zIndex: 1,
  },
  exampleCard: {
    borderRadius: 8,
    marginBottom: 48,
    zIndex: 0,
  },
  examplesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    justifyContent: 'flex-start',
  },
  page: {
    flex: 1,
  },
});
