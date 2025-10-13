import React, { JSX } from 'react';
import { FlatList, StyleSheet, useColorScheme, View } from 'react-native';
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
    dropdownProps: { mode: 'BADGE', showBadgeDot: false },
  },
  {
    title: 'Multiple Select Badge Mode with Dots',
    description: 'Multiple select example - with badges and dots',
    multiple: true,
    dropdownProps: { mode: 'BADGE', showBadgeDot: true },
  },
  {
    title: 'Customized Multiple Select Badge Mode',
    description: 'Multiple select example - with badges',
    multiple: true,
    dropdownProps: {
      mode: 'BADGE',
      showBadgeDot: false,
      badgeDotStyle: {},
      badgeColors: '#d5c4a1', // Badge Colors currentlly overwites badgeStyle background color
      placeholderStyle: { color: '#83a598' },
      badgeStyle: {
        // background: '#d5c4a1',
        borderColor: '#282828',
        borderWidth: 2,
        borderStyle: 'solid',
      },
      badgeTextStyle: {
        color: '#282828',
      },
      style: {
        backgroundColor: '#fbf1c7',
        borderColor: '#b16286',
      },
      customItemContainerStyle: {},
      listItemContainerStyle: {
        backgroundColor: '#fbf1c7',
        borderColor: '#b16286',
      },
      listItemLabelStyle: {
        color: '#b16286',
      },
    },
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

export default function App(): JSX.Element {
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === 'dark' ? '#222' : '#fff';

  const renderItem = ({ item }: { item: ExampleProps }) => (
    <DropDownPickerExample {...item} />
  );

  return (
    <GestureHandlerRootView>
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
          CellRendererComponent={({ children }) => (
            // Remove flatlsit view that wraps children for dropdown zIndex support
            <>{children}</>
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    position: 'relative',
    flexDirection: 'column',
    margin: 'auto',
    zIndex: 1,
    marginTop: 64,
    marginBottom: 64,
    padding: 3,
    maxWidth: 600,
    minWidth: 400,
  },
  examplesContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 32,
  },
  exampleCard: {
    zIndex: 0,
    borderRadius: 8,
    marginBottom: 48,
  },
});
