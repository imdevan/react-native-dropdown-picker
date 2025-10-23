import React, { JSX, useMemo, useState } from 'react';
import { Button, StyleSheet, Text, useColorScheme, View } from 'react-native';
import DropDownPicker, {
  DropDownPickerIsMultipleProps,
  DropDownPickerIsSingleProps,
  ItemType,
  ValueType,
} from 'react-native-dropdown-picker';

// Omit these types from the example props
type CommonOmitKeys = 'setValue' | 'value' | 'open' | 'items' | 'setOpen';

type SingleDropdownProps<T extends ValueType> = Omit<
  Partial<DropDownPickerIsSingleProps<T>>,
  CommonOmitKeys
>;

type MultipleDropdownProps<T extends ValueType> = Omit<
  Partial<DropDownPickerIsMultipleProps<T>>,
  CommonOmitKeys
>;

export interface ExampleProps {
  title: string;
  description?: string;
  placeholder?: string;
  multipleText?: string;
  items?: Array<ItemType<ValueType>>;
  dropdownProps?: MultipleDropdownProps<ValueType> | SingleDropdownProps<ValueType>;
}

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
    marginBottom: 16,
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
    zIndex: 1,
  },
});

/**
 *
 * @param props
 * @param props.multiple
 */
export default function DropDownPickerExample({
  title,
  description,
  dropdownProps,
  placeholder = 'Choose a fruit',
  multipleText = 'You have chosen {count} fruits.',
  items = DEFAULT_ITEMS,
}: ExampleProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [singleValue, setSingleValue] = useState<ValueType | null>(null);
  const [multiValue, setMultiValue] = useState<Array<ValueType> | null>(null);
  const colorScheme = useColorScheme();
  const color = colorScheme === 'dark' ? '#fff' : '#222';
  const theme = colorScheme === 'dark' ? 'DARK' : 'LIGHT';

  const [_items, setItems] = useState<Array<ItemType<ValueType>>>(items);
  const isMultiple = dropdownProps?.multiple;

  const RenderDropDown = () => {
    if(isMultiple) {
      const {..._dropdownProps} = dropdownProps;
      delete _dropdownProps.multiple // remove multiple prop to hard set as true 
      return (
        <DropDownPicker<ValueType>
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
          {..._dropdownProps as MultipleDropdownProps<ValueType>}
        />
      )
    } else {
      return (
        <DropDownPicker<ValueType>
          open={open}
          value={singleValue}
          items={_items}
          setOpen={setOpen}
          setValue={setSingleValue}
          setItems={setItems}
          theme={theme}
          placeholder={placeholder}
          multiple={false}
          {...dropdownProps as SingleDropdownProps<ValueType>}
        />
      )
    }
  }

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ ...styles.exampleContainer, zIndex: open ? 10 : 1 }}>
      <View>
        <Text style={{ ...styles.title, color }}>{title}</Text>
        {description && (
          <Text style={{ ...styles.description, color }}>{description}</Text>
        )}
      </View>

      {RenderDropDown()}

      <View style={{ ...styles.body }}>
        <Text style={{ ...styles.description, color }}>
          {isMultiple ? 'Fruits currently are: ' : 'Fruit currently is: '}
          {isMultiple ? JSON.stringify(multiValue) : JSON.stringify(singleValue)}
        </Text>

        <Button
          title={isMultiple ? 'Clear fruits' : 'Clear fruit'}
          onPress={(): void => {
            if (isMultiple) setMultiValue(null);
            else setSingleValue(null);
          }}
        />
      </View>
    </View>
  );
}
