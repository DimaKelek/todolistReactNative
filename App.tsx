import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AddItemForm} from "./src/components/Common/AddItemForm/AddItemForm";

export const App: React.FC = () => {
    return (
        <View style={styles.appWrapper}>
            <Text style={styles.text}>Hello Kelek</Text>
            <AddItemForm />
        </View>
    );
};

const styles = StyleSheet.create({
    appWrapper: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#0c0c0c"
    },
    text: {
        color: "#fff",
        fontSize: 25,
        marginVertical: 20,
        textTransform: "uppercase"
    }
})