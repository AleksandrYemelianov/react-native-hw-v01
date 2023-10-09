import { StyleSheet } from "react-native";
import { backgroundTextColor, iconTabColor, primaryTextColor } from "../../assets/colors/colors";

export const styles = StyleSheet.create({
    postHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgThumb: {
        width: 60,
        height: 60,
        marginRight: 8,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: backgroundTextColor,
    },
    userName: {
        color: primaryTextColor,
        fontFamily: 'RobotoBold',
        fontSize: 13,
    },
    userContact: {
        color: iconTabColor,
        fontFamily: 'RobotoRegular',
        fontSize: 11,
    },
})