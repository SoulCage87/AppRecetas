import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/components/Navigation';
import Home from './src/screen/Home';
import ListContext from './src/Context/ListContext';

export default function App() {
  return (
    <>
    <ListContext>
       <Navigation>
       </Navigation>
       </ListContext>
    </>

  );
}

