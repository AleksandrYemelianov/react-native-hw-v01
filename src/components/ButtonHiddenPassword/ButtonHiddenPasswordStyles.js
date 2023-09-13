import { StyleSheet } from "react-native";
import { accentLinkTextColor } from "../../assets/colors/colors";

export const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 16,

    },
    text: {
        color: accentLinkTextColor,
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        lineHeight: 18,
    },
});
