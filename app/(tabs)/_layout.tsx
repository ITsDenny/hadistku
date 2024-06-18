import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: 'blue',
      headerTintColor:'#fff',
      headerStyle:{
        backgroundColor:"green"
      } 
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen 
        name="book"
        options={{ 
            title:"Hadith's Book",
            tabBarIcon:({ color }) => <FontAwesome size={28} name="book" color={color} />
         }}
      />
    </Tabs>
  );
}