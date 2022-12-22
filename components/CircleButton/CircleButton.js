import { View, Pressable} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from './Style';

export default function CircleButton({ onPress }) {
    return (
        <View style={styles.CircleButtonContainer}>
            <Pressable style={styles.CircleButton} onPress={onPress}>
                <MaterialIcons name="add" size={38} color="#25292e" />
            </Pressable>
        </View>
    )
}