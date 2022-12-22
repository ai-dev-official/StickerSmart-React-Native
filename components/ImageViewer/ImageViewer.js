import React from 'react';
import { Image} from 'react-native';
import styles from './Style';

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
    
    const imageSource = selectedImage !== null ? { uri: selectedImage } : placeholderImageSource;

    return (
        <Image source={imageSource} style={styles.image} />
    );
}
    



