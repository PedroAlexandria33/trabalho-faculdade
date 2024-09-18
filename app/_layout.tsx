//import { Stack } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import {Drawer} from 'expo-router/drawer'
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <Drawer screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel:'Início',
          title: 'Condofácil',
          drawerIcon: () => <Ionicons name='home-outline' size={18} color="#3A98FF"/>
        }}
        />
        <Drawer.Screen
        name="Reserva"
        options={{
          drawerLabel:'Reservas',
          title: 'Reserve seu Espaço',
          drawerIcon: () => <Ionicons name='checkmark-done' size={18} color="#3A98FF"/>
        }}
        />
        
        
        <Drawer.Screen
        name="formulario"
        options={{
          drawerLabel:'Formulario',
          title: 'Formulario',
          drawerIcon: () => <Ionicons name='clipboard' size={18} color="#3A98FF"/>
        }}
        />

        <Drawer.Screen
        name="tabs"
        options={{
          drawerLabel:'Tabs',
          title: 'Tabs',
          drawerIcon: () => <Ionicons name='albums-outline' size={18} color="#3A98FF"/>
        }}
        />
        <Drawer.Screen
        name="stack"
        options={{
          drawerLabel:'Stack',
          title: 'Stack',
          drawerIcon: () => <Ionicons name='logo-stackoverflow' size={18} color="#3A98FF"/>
        }}
        />
        
        
       
      </Drawer>
    </GestureHandlerRootView>
  );
}
