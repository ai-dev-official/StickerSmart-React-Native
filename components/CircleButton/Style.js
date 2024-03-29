import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    CircleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#ffd33d',
        borderRadius: 42,
        padding: 3,
    },

    CircleButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 42,
        backgroundColor: '#ffffff',
    },
    iconButtonLabel: {
        color: '#fff',
        marginTop: 12,
      },

});

export default styles;