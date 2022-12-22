import { View, Pressable, Text } from 'react-native';
import styles from './Style';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Button({ label, theme, onPress }) {
    if (theme  === "primary") {
        return (
            <View 
                style={[styles.buttonContainer, {borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}
            >
                <Pressable 
                        style={[styles.button, { backgroundColor: "#ffffff"}]} 
                        onPress={onPress}
                >
                    <FontAwesome  
                        name="picture-o"
                        size={18}
                        color="#25292e"
                        style={styles.buttonIcon}
                    />
                    <Text
                        style={[styles.buttonLabel, { color:"#25292e"}]}
                    >
                        {label}
                    </Text>
                </Pressable>
    
            </View>
        );
    }

    return (
        <View style={[styles.buttonContainer, {borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}>
            <Pressable 
                style={[styles.button, { backgroundColor: "#25defe"}]} 
                onPress={onPress}
                >
                    <MaterialCommunityIcons
                        name="tray-arrow-up"
                        size={18}
                        color="#ffffff"
                        style={styles.buttonIcon}
                    />
                <Text style={styles.buttonLabel}> 
                    {label}
                </Text>
            </Pressable>
        </View>
    );
}

    