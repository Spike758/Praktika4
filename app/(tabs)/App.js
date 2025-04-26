import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://creator.nightcafe.studio/jobs/2Bp1banGDdCtbmsQPQfh/2Bp1banGDdCtbmsQPQfh--1--037v1_2x.jpg' }} 
        style={styles.avatar}
      />
      <Text style={styles.name}>Гапонов Данил</Text>
      <Text style={styles.group}>Группа: CS-204(c)</Text>
      <Text style={styles.email}>Почта: gaponov_danil@mail.ru</Text>
      <Text style={styles.info}>
        Хобби: программирование{'\n'}
        Любимая цитата: "Стремись не к успеху, а к ценностям, которые он дает."
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  group: {
    fontSize: 20,
    marginBottom: 5,
  },
  email: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
  },
});
