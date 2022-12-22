import {Modal, View, Text, Pressable} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from "./Style";

export default function EmojiPicker({isVisible, onClose, children}) {
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Choose a sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" color="ffffff" size={22} />
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    );
};