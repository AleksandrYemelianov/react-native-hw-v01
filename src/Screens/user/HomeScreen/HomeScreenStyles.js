import { StyleSheet } from "react-native";
import { accentColor, backgroundColor, iconTabColor, primaryTextColor } from "../../../assets/colors/colors";

export const styles = StyleSheet.create({
    title: {
        color: primaryTextColor,
        fontFamily: 'RobotoMedium',
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.408,
    },
    icon: {
        color: iconTabColor,
    },
    iconBack: {
        color: iconTabColor,
        marginLeft: 16,
    },
    iconAccent: {
        color: backgroundColor, 
    },
    iconActiveWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: accentColor,
        width: 80,
        height: 40,
        borderRadius: 25,
    }
})