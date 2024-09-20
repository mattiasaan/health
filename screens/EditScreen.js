import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';

const EditScreen = ({ navigation, emergencyInfo = {}, saveInfo }) => {
  const [name, setName] = useState(emergencyInfo.name || '');
  const [surname, setSurname] = useState(emergencyInfo.surname || '');
  const [phone, setPhone] = useState(emergencyInfo.phone || '');
  const [bloodGroup, setBloodGroup] = useState(emergencyInfo.bloodGroup || '');
  const [age, setAge] = useState(emergencyInfo.age || '');

  const handleSave = () => {
    const updatedInfo = {
      name,
      surname,
      phone,
      bloodGroup,
      age,
    };
    saveInfo(updatedInfo);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Modifica Informazioni" />
        <Card.Content>
          <TextInput
            label="Nome"
            mode="outlined"
            value={name}
            onChangeText={setName}
            style={styles.input}
            outlineColor="#7dc9c7" // Colore del bordo
            activeOutlineColor="#7dc9c7" // Colore del bordo attivo
          />
          <TextInput
            label="Cognome"
            mode="outlined"
            value={surname}
            onChangeText={setSurname}
            style={styles.input}
            outlineColor="#7dc9c7"
            activeOutlineColor="#7dc9c7"
          />
          <TextInput
            label="Telefono"
            mode="outlined"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
            outlineColor="#7dc9c7"
            activeOutlineColor="#7dc9c7"
          />
          <TextInput
            label="Gruppo Sanguigno"
            mode="outlined"
            value={bloodGroup}
            onChangeText={setBloodGroup}
            style={styles.input}
            outlineColor="#7dc9c7"
            activeOutlineColor="#7dc9c7"
          />
          <TextInput
            label="Età"
            mode="outlined"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
            style={styles.input}
            outlineColor="#7dc9c7"
            activeOutlineColor="#7dc9c7"
          />
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={handleSave}
        style={styles.button}
      >
        Salva Informazioni
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f9',
  },
  card: {
    padding: 20,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#247b15',
  },
});

export default EditScreen;
