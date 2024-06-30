# React Native Navigations

The app has a nested navigation structure involving Stack Navigation, Drawer, Bottom Tab, and Top Tab navigators. Here’s a concise explanation:

### Navigation Diagram

```
DrawerNavigator
│
├── BottomTabNavigator (Tabs)
│   │
│   ├── Tab1
│   │   └── HomeScreen
│   │
│   ├── Tab2
│   │   └── TopTabNavigator
│   │       ├── ProfileScreen
│   │       └── AboutScreen
│   │
│   └── Tab3
│       └── StackNavigator
│           ├── HomeScreen
│           ├── ProductScreen
│           ├── ProductsScreen
│           └── SettingsScreen
│
└── ProfileScreen
```
<div style="display: flex; flex-wrap: wrap; gap: 20px;">
    <img src="https://github.com/Juanpablo9717/rn-navigations/assets/74035090/590352aa-7c06-49ae-8dbb-2d72f795041a" style="width: 24%;">
    <img src="https://github.com/Juanpablo9717/rn-navigations/assets/74035090/11260f1f-cacd-407b-8c4e-14f0e8c143df" style="width: 24%;">
    <img src="https://github.com/Juanpablo9717/rn-navigations/assets/74035090/19f24d3d-d125-4b80-969f-45ed1f123c69" style="width: 24%;">
    <img src="https://github.com/Juanpablo9717/rn-navigations/assets/74035090/18231041-a372-4295-8987-fd77ef3d5b9d" style="width: 24%;">
</div>

## Icons 
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) [Ionic Icons]

## Run APP
```
npm start
```
