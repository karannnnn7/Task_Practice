import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const CButton = ({ ButtonText, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{ButtonText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5775F1',
        width: 390,
        height: 51,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    }
});

export default CButton;