import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import CButton from '../components/CButton';

const IntroScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Image source={require('../assets/IntroLogo.png')} />
            </View>

            <View style={{ height: 450, marginTop: 40 }}>
                <Swiper style={styles.wrapper} activeDot={<View style={styles.activeDot} />}>
                    <View style={styles.swiper1}>
                        <Image source={require('../assets/S1img.png')} />

                        <Text style={styles.swiper1Text1}>Unleash the Power of Loyalty 🏆</Text>
                        <Text style={styles.swiper1Text2}>Offer Loyalty to Customers Who Love Shopping.
                            Earning Rewards Has Never Been So Gratifying!
                            Making custom offer is never this easy!</Text>
                    </View>
                    <View style={styles.swiper1}>
                        <Image source={require('../assets/S2img.png')} />

                        <Text style={styles.swiper1Text1}>Powerful Customer Insights 📈</Text>
                        <Text style={styles.swiper2Text2}>Unravel the Magic of Insights. Understand Your Customers Better with . Data-Driven Success, Unlocked!</Text>
                    </View>
                    <View style={styles.swiper1}>
                        <Image source={require('../assets/S3img.png')} />

                        <Text style={styles.swiper1Text1}>Campaign & Retention 📣</Text>
                        <Text style={styles.swiper3Text2}>Retain Customers with Custom Campaign, Create Tailored Campaigns That Convert your target audience to increase sales.</Text>
                    </View>
                </Swiper>
            </View>

            <View style={styles.button}>
                <CButton ButtonText={'Let’s Get Started'} onPress={() => navigation.navigate('home')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
    },

    wrapper: {
        marginHorizontal: 20
    },

    swiper1: {
        alignItems: 'center',
    },

    swiper1Text1: {
        marginTop: 30,
        fontSize: 24,
        fontWeight: '600',
    },

    swiper1Text2: {
        width: '83%',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: 24,
        marginTop: 10,
        color: 'black'
    },

    swiper2: {
        alignItems: 'center',
    },

    swiper2Text2: {
        width: '72%',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: 24,
        marginTop: 10,
        color: 'black'
    },

    swiper3Text2: {
        width: '90%',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: 24,
        marginTop: 10,
        color: 'black'
    },

    activeDot: {
        width: 52,
        backgroundColor: '#5775F1',
        height: 12,
        borderRadius: 8
    },

    button: {
        position: 'absolute',
        bottom: 50,
        right: 10,
    },
});

export default IntroScreen;