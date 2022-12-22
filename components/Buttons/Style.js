import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        marginBottom: 10,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#ffffff',
        fontSize: 16,
    },
});
export default styles;