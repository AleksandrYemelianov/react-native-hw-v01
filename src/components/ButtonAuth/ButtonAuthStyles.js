import { StyleSheet } from "react-native";
import { accentColor, buttonWhiteTextColor } from "../../assets/colors/colors";

export const styles = StyleSheet.create({
    button: {
        padding: 16,
        marginBottom: 16,
        width: '100%',
        backgroundColor: accentColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },
    text: {
        color: buttonWhiteTextColor,
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        lineHeight: 18,
    },
});
