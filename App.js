import React, { useState } from 'react';
import { View, Button, Text, Alert, StyleSheet } from 'react-native';
import { NativeModules } from 'react-native';

const App = () => {
  const [status, setStatus] = useState("Ожидание...");

  const openGame = async () => {
    try {
      const packageName = "com.garagegames.daysbygone"; 
      const intent = NativeModules.IntentModule;
      intent.openApp(packageName);
      setStatus("Игра запущена.");
    } catch (error) {
      Alert.alert("Ошибка", "Не удалось открыть приложение.");
    }
  };

  const startBot = () => {
    setStatus("Бот работает...");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.status}>Статус: {status}</Text>
      <Button title="Открыть игру" onPress={openGame} />
      <Button title="Запустить бота" onPress={startBot} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  status: {
    marginBottom: 20,
    fontSize: 18,
  },
});

export default App;
