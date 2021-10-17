import React from "react";
import {createNativeStackNavigator, NativeStackScreenProps} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {TodolistScreen} from "../Screens/TodolistScreen";
import {TasksScreen} from "../Screens/TasksScreen";

type RootStackParamList = {
    Todolists: any
    Tasks: { title: string }
}

export type TodolistScreenProps = NativeStackScreenProps<RootStackParamList, "Todolists">;
export type TaskScreenProps = NativeStackScreenProps<RootStackParamList, "Tasks">;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Todolists"}>
                <Stack.Screen name="Todolists" component={TodolistScreen}/>
                <Stack.Screen name="Tasks" component={TasksScreen}
                              options={({route}) => ({title: route.params.title})}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}