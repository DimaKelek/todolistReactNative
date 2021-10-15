import React, {useState} from "react";
import {Button, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, View} from "react-native";
import {TaskType} from "../../../../App";

type AddItemFormProps = {
    addTask: (newTask: TaskType) => void
}

export const AddItemForm: React.FC<AddItemFormProps> = ({addTask}) => {
    const [value, setValue] = useState<string>("")
    const [error, setError] = useState<string | null>(null)

    const onChangeTitle = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setValue(e.nativeEvent.text)
        setError(null)
    }

    const onPressButton = () => {
        if(!value) {
            setError("Task title is required!")
        } else if(value.length > 40){
            setError("Task title shouldn't be more than 40 symbols")
        } else {
            addTask({id: "123", title: value})
        }
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.form}>
                <TextInput
                    style={[styles.input, {borderColor: error ? "#d41c50": "#0c0c0c"}]}
                    placeholder="Task title ..."
                    placeholderTextColor="#888383FF"
                    value={value}
                    onChange={onChangeTitle}
                />
                <Button title="Add" disabled={!!error} onPress={onPressButton}/>
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: 90,
        paddingHorizontal: 10,
        //backgroundColor: "#a585c7"
    },
    form: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        //backgroundColor: "#5e99bf"
    },
    input: {
        width: "80%",
        paddingHorizontal: 15,
        backgroundColor: "#171616",
        color: "#ffffff",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 5
    },

    errorText: {
        margin: 5,
        color: "#d41c50",
        fontSize: 18
    }
})