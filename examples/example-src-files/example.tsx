import React, { useState, JSX } from 'react';
import { StyleSheet, Button, Text, View, useColorScheme } from 'react-native';
import DropDownPicker, { ItemType,DropDownPickerProps } from 'react-native-dropdown-picker';

export type ExampleProps = {
  multiple?: boolean;
  title: string;
  description?: string;
  placeholder?: string;
  multipleText?: string;
  // For the sake of keeping the examples simple for now
  items?: ItemType<string>[];
  dropdownProps?: Partial<DropDownPickerProps<string>>;
};

const DEFAULT_ITEMS = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Nectarines', value: 'nectarines' },
  { label: 'Kiwis', value: 'kiwis' },
  { label: 'Raspberries', value: 'raspberries' },
  { label: 'Pears', value: 'pears' },
  { label: 'Guava', value: 'guava' },
  { label: 'Grapes', value: 'grapes' },
  { label: 'Manderins', value: 'manderins' },
  { label: 'Pineapple', value: 'pineapple' },
  { label: 'Dragon Fruit', value: 'dragon_fruit' },
  { label: 'Prickly Pear', value: 'prickly_pear' },
];

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    marginBottom: 16
  },
  body: {
    fontSize: 12,
    marginBottom: 72,
  },
  exampleContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    gap: 16,
  },
  dropdownContainer: {
    zIndex: 1
  }
});

/**
 *
 * @param props
 * @param props.multiple
 */
export default function DropDownPickerExample({
    multiple = false,
    title,
    description,
    dropdownProps,
    placeholder = 'Choose a fruit',
    multipleText='You have chosen {count} fruits.',
    items = DEFAULT_ITEMS,
}: ExampleProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [singleValue, setSingleValue] = useState<string | null>(null);
  const [multiValue, setMultiValue] = useState<Array<string> | null>(null);
  const colorScheme = useColorScheme();
  const color = colorScheme === 'dark' ? '#fff' : '#222';
  const theme =  colorScheme === 'dark' ? 'DARK' : 'LIGHT';
  
  const [_items, setItems] = useState<Array<ItemType<string>>>(items);
  
  return (
    <View style={{ ...styles.exampleContainer, zIndex: open ? 10 : 1 }}>
      <View>
        <Text style={{...styles.title, color}}>{title}</Text>
        {description && (
          <Text style={{...styles.description, color}}>{description}</Text>
        )}
      </View>

      {multiple ? (
        <DropDownPicker
          open={open}
          value={multiValue}
          items={_items}
          setOpen={setOpen}
          setValue={setMultiValue}
          setItems={setItems}
          theme={theme}
          placeholder={placeholder}
          multipleText={multipleText}
          multiple
          {...dropdownProps}
        />
      ) : (
        <DropDownPicker
          open={open}
          value={singleValue}
          items={_items}
          setOpen={setOpen}
          setValue={setSingleValue}
          setItems={setItems}
          theme={theme}
          placeholder={placeholder}
          multiple={false}
          {...dropdownProps}
        />
      )}

      <View style={{...styles.body}}>
          <Text style={{...styles.description, color}}>
          {multiple ? 'Fruits currently are: ' : 'Fruit currently is: '}
          {multiple
              ? JSON.stringify(multiValue)
              : JSON.stringify(singleValue)}
          </Text>

          <Button
          title={multiple ? 'Clear fruits' : 'Clear fruit'}
          onPress={(): void => {
              if (multiple) setMultiValue(null);
              else setSingleValue(null);
          }}
          />
      </View>
    </View>
  );
}
