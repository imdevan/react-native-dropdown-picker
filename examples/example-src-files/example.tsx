import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, useColorScheme } from 'react-native';
import DropDownPicker, { ItemType,DropDownPickerProps } from 'react-native-dropdown-picker';

type ExampleProps = {
  multiple?: boolean;
  title: string;
  description?: string;
  dropdownProps?: Partial<DropDownPickerProps<string>>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
  },
  exampleContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16
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
}: ExampleProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [singleValue, setSingleValue] = useState<string | null>(null);
  const [multiValue, setMultiValue] = useState<Array<string> | null>(null);
  const colorScheme = useColorScheme();
  const color = colorScheme === 'dark' ? '#fff' : '#222';
  const theme =  colorScheme === 'dark' ? 'DARK' : 'LIGHT';
  
  const [items, setItems] = useState<Array<ItemType<string>>>([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Nectarines', value: 'nectarines' },
    { label: 'Kiwis', value: 'kiwis' },
    { label: 'Raspberries', value: 'raspberries' },
    { label: 'Pears', value: 'pears' },
  ]);

  return (
    <View style={styles.exampleContainer}>
      <View>
        <Text style={{...styles.title, color}}>{title}</Text>
        {description && (
          <Text style={{...styles.description, color}}>{description}</Text>
        )}
      </View>

      <View>
        {multiple ? (
          <DropDownPicker
            open={open}
            value={multiValue}
            items={items}
            setOpen={setOpen}
            setValue={setMultiValue}
            setItems={setItems}
            theme={theme}
            placeholder='Choose a fruit'
            multiple
            multipleText='You have chosen {count} fruits.'
            {...dropdownProps}
          />
        ) : (
          <DropDownPicker
            open={open}
            value={singleValue}
            items={items}
            setOpen={setOpen}
            setValue={setSingleValue}
            setItems={setItems}
            theme={theme}
            placeholder='Choose a fruit'
            multiple={false}
            {...dropdownProps}
          />
        )}
      </View>

    <View>
        <Text style={{...styles.description, color}}>
        {multiple ? 'Fruits currently are: ' : 'Fruit currently is: '}
        {multiple
            ? JSON.stringify(multiValue)
            : JSON.stringify(singleValue)}
        </Text>
    </View>

    <View>
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
