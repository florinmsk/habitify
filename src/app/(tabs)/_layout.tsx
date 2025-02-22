import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          title: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="habits"
        options={{
          headerTitle: "Habits",
          title: "Habits",
          tabBarIcon: ({ color }) => (
            <AntDesign name="clockcircleo" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          headerTitle: "Progress",
          title: "Progress",
          tabBarIcon: ({ color }) => (
            <AntDesign name="linechart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pro"
        options={{
          headerTitle: "PRO",
          title: "Pro",
          tabBarIcon: ({ color }) => (
            <AntDesign name="pay-circle-o1" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
