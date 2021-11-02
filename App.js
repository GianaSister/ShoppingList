import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const buttonPressed = () => {
    setData([...data, { key: text }]);
    setText('');
  }

  return (
    <View style={styles.container}>
      
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
      
      <View style={styles.button}>
        <Button onPress={buttonPressed} title="ADD" />
        <Button title="CLEAR" onPress={() => {
          setText('')
          setData([])}}>
        </Button>
      </View>
     
      <Text style={styles.header}>Shopping List</Text>
      
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
  button: {
    color: 'green',
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 1,
    margin: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#32CD32',
    fontSize: 20,
    fontWeight: 'bold',
  },
});