import { Text as NativeText, StyleSheet } from "react-native"
import theme from "../../theme/theme"


const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSize.md,
        color: theme.colors.primary,
        fontFamily: theme.fontWeight.regular
    },
    secondary: {
        color: theme.colors.secondary,
    },
    heading: {
        fontSize: theme.fontSize.lg,
    },
    subheading: {
        fontSize:  theme.fontSize.sm,
    },
    little: {
        fontSize: theme.fontSize.xs
    },
    medium: {
        fontFamily: theme.fontWeight.medium,
    },
    bold: {
        fontFamily: theme.fontWeight.bold,
    },
    center: {
        alignSelf: 'center'
    }
})

const Text = ({ center, color, heading, subheading, little, fontWeight, style, ...props }) => {

    const textStyles = [
        styles.text,
        color === 'primary' && styles.primary,
        color === 'secondary' && styles.secondary,
        heading && styles.heading,
        subheading && styles.subheading,
        little && styles.little,
        fontWeight === 'medium' && styles.medium,
        fontWeight === 'regular' && styles.regular,
        fontWeight === 'bold' && styles.bold,
        center && styles.center,
        style
    ] 

    return (
        <NativeText style={textStyles} {...props} />
    )
}

export default Text