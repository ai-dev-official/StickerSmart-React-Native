import { Pressable, Text} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from './Style';

export default function IconButton({ icon, label, onPress }) {
    return (
        <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color="#ffffff" />
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    );
}