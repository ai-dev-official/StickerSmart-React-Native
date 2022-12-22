import {View, Image } from 'react-native';

export default function EmojiSticker({ imageSize, stickerSource }) {
    return (
        <View style={{ top: -350}}>
            <Image 
                source={stickerSource} 
                resizeMode="contain"
                style={{width: imageSize*7, height: imageSize*7}}
            />
        </View>
    );
}