import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Inicio from "../screens/Inicio";

import Servicios from "../screens/Servicios";

import Pedidos from "../screens/Pedidos";

import Productos from "../screens/Productos";


const Tab=createBottomTabNavigator();


export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen

            name="inicio"            
            component={Inicio}
            options={{title:"Inicio"}}
            />

            <Tab.Screen
                name="Servicios"
                component={Servicios}
                options={{title:" Mis Servicios"}}
            />

            <Tab.Screen 
                name="Pedidos"
                component={Pedidos}
                options={{title:"Mis Pedidos"}}            
            />

            <Tab.Screen 
                name="Productos"
                component={Productos}
                options={{title:"Mis Productos"}}            
            />   

            </Tab.Navigator>

        </NavigationContainer>
    )
    
}

