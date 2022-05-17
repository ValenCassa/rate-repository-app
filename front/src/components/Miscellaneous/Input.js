import { useField } from "formik";
import { View } from "moti";
import { TextInput, StyleSheet } from "react-native";
import theme from "../../theme/theme";
import Text from "./Text";

export const InputText = ({ style, placeholderTextColor, ...props }) => {
    const styles = [style]

    return (
        <TextInput style={styles} {...props} placeholderTextColor={placeholderTextColor}/>
    )
}

const styles = StyleSheet.create({
    input: {
        color: theme.colors.primary,
        fontSize: theme.fontSize.md,
        borderWidth: 0.5,
        borderRadius: 3,
        paddingVertical: 4,
        paddingHorizontal: 10,
    }
})

const Input = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)

    const showError = meta.touched && meta.error

    return (
        <View style={{ marginBottom: 10 }}>
        <InputText 
            onChangeText={value => helpers.setValue(value)}
            onBlur={() => helpers.setTouched(true)}
            value={field.value}
            error={showError}
            style={{ ...styles.input, borderColor: showError ? 'brown' : theme.colors.lightGrey }}
            placeholderTextColor={'grey'}
            {...props}
        />

        {showError && <Text style={{ color: 'brown' }} little>{meta.error}</Text>}
        </View>
    )
}



export default Input
