import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { images } from '../Utils/CoinIcons';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginBottom: 20,
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 3,
        padding: 20
    },
    upperRow: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: 'bold'
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    seperator: {
        marginTop: 10
    }
})

const {
    container,
    upperRow,
    coinSymbol,
    coinName,
    seperator,
} = styles;

const CoinCard = () => {
    const { coin_name, symbol } = this.props;
    return (
        <View style={container} >
            <View style={upperRow}>
                <Text style={coinSymbol}>{symbol}</Text>
                <Text style={seperator}>|</Text>
                <Text style={coinName}>{coin_name}</Text>
            </View>
        </View>
    )
}

export default CoinCard;
