import { Text, SafeAreaView, StyleSheet,Button } from 'react-native';

// You can import supported modules from npm

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
       Aqui está o projeto de botão feito no react native
      </Text>
      <Button title="clique aqui" onPress={() => {alert('Você apertou o botão')}}>Clique aqui</Button>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
