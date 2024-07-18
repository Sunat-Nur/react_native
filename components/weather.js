import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Weather = () => (
    <View style={styles.container}>
        <Text>Weather</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Weather;
