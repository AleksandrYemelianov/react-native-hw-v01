import { StyleSheet } from "react-native";
import { backgroundTextColor, iconFillColor, primaryTextColor } from "../../assets/colors/colors";

export const styles = StyleSheet.create({
    postWrapperImg: {
        position: 'relative',
        width: '100%',
        height: 240,
        marginBottom: 10,
        backgroundColor: backgroundTextColor,
        borderRadius: 8,
        overflow: 'hidden',
    },
    postCaption: {
        marginBottom: 10,
        color: primaryTextColor,
        fontFamily: 'RobotoMedium',
        fontSize: 16,
    },
    touchableText: {
        color: iconFillColor,
        fontFamily: 'RobotoRegular',
        fontSize: 16,
    },
})
