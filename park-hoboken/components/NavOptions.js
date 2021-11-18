import React from "react";
import { FlatList, Text, View, Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from "tailwind-react-native-classnames";

const data = [
    {
        id: "123",
        title: "Arriving",
        screen: "Maps",
    },
    {
        id: "456",
        title: "Departing",
        screen: "Maps",
    },
];
const NavOptions = () => {
    return (
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <Icon.Button name="car"></Icon.Button>
                <Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
            </TouchableOpacity>
        )}
        />
    )
}

export default NavOptions;