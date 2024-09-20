import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation, emergencyInfo }) => {
  if (!emergencyInfo) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nessuna informazione di emergenza disponibile</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informazioni di Emergenza</Text>

      <Card style={styles.card}>
        <Card.Title title="Dettagli Personali" left={() => <Icon name="account-circle" size={30} />} />
        <Card.Content>
          <Text><Text style={styles.label}>Nome:</Text> {emergencyInfo.name || "N/A"}</Text>
          <Text><Text style={styles.label}>Cognome:</Text> {emergencyInfo.surname || "N/A"}</Text>
          <Text><Text style={styles.label}>Telefono:</Text> {emergencyInfo.phone || "N/A"}</Text>
          <Text><Text style={styles.label}>Gruppo Sanguigno:</Text> {emergencyInfo.bloodGroup || "N/A"}</Text>
          <Text><Text style={styles.label}>Età:</Text> {emergencyInfo.age || "N/A"}</Text>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        icon="pencil"
        onPress={() => navigation.navigate('Edit')}
        style={styles.button}
      >
        Modifica Informazioni
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    marginVertical: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#555',
  },
  button: {
    marginTop: 30,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#247b15',
  },
});

export default HomeScreen;
