import React from "react";
import {TouchableOpacity} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ImageButton = () => {
    
    return (
        <TouchableOpacity
            style={{ 
            marginTop: 20,
            marginLeft: 20,
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 8,
            }}
        >
            <FontAwesome name='image' size={40} color='#2BC63B' />
        </TouchableOpacity>
    );
};

export default ImageButton;