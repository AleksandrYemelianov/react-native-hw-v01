import { Platform, StyleSheet } from "react-native";
import { backgroundColor, backgroundTextColor, iconFillColor } from "../../../assets/colors/colors";


export const styles = StyleSheet.create({
    thumbSvg: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -30 }, { translateY: -30 }],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        backgroundColor: backgroundColor,
        borderRadius: Platform.OS === 'ios' ? '50%' : 100,
    },
    iconSvg: {
        color: iconFillColor,
    },
    buttonDelete: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        // marginBottom: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundTextColor,
        width: 80,
        height: 40,
        borderRadius: 25,
    }
})