import React, { PureComponent } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Container, Header, Content, Button, Text, Icon, Row } from 'native-base';
import Navbar from '../Components/Navbar';

export default class ColorKeyPage extends PureComponent {
    render() {
        return (
            <View>
                <View style={style.alls} onPress={this.showKey}>
                    <View />
                    <View>
                        <View style={style.split}>
                            <View style={style.colorsC}>
                                <Text style={style.letter}>C</Text>
                            </View>
                            <View style={style.colorsG}>
                                <Text style={style.letter}>G</Text>
                            </View>
                        </View>
                        <View style={style.split}>
                            <View style={style.colorsD}>
                                <Text style={style.letter}>D</Text>
                            </View>
                            <View style={style.colorsA}>
                                <Text style={style.letter}>A</Text>
                            </View>
                        </View>
                        <View style={style.split}>
                            <View style={style.colorsE}>
                                <Text style={style.letter}>E</Text>
                            </View>
                            <View style={style.colorsB}>
                                <Text style={style.letter}>B</Text>
                            </View>
                        </View>
                        <View style={style.split}>
                            <View style={style.colorsFs}>
                                <Text style={style.letter}>
                                    F<Text style={style.hash}>♯</Text>
                                </Text>
                            </View>
                            <View style={style.colorsCs}>
                                <Text style={style.letter}>
                                    C<Text style={style.hash}>♯</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={style.split}>
                            <View style={style.colorsF}>
                                <Text style={style.letter}>F</Text>
                            </View>
                            <View style={style.colorsDs}>
                                <Text style={style.letter}>
                                    D<Text style={style.hash}>♯</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={style.split}>
                            <View style={style.colorsGs}>
                                <Text style={style.letter}>
                                    G<Text style={style.hash}>♯</Text>
                                </Text>
                            </View>
                            <View style={style.colorsAs}>
                                <Text style={style.letter}>
                                    A<Text style={style.hash}>♯</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={style.navi}>
                        <Button iconCenter style={style.closeButton} onPress={this.props.showKey}>
                            <Icon name='close' />
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    navbar: {
        width: '100%'
    },
    alls: {
        height: '101.5%',
        width: '110%',
        marginLeft: '-5%',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    split: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 100,
        width: '100%',
        margin: 0
    },
    colorsA: {
        height: 90,
        width: 90,
        backgroundColor: '#FFAE42',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsAs: {
        height: 90,
        width: 90,
        backgroundColor: '#4B0082',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsC: {
        height: 90,
        width: 90,
        backgroundColor: '#ff0000',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsCs: {
        height: 90,
        width: 90,
        backgroundColor: '#0D98BA',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsD: {
        height: 90,
        width: 90,
        backgroundColor: '#0D98BA',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsDs: {
        height: 90,
        width: 90,
        backgroundColor: '#0000FF',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsG: {
        height: 90,
        width: 90,
        backgroundColor: '#ff4500',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsF: {
        height: 90,
        width: 90,
        backgroundColor: '#CD00CD',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsFs: {
        height: 90,
        width: 90,
        backgroundColor: '#00FF00',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsE: {
        height: 90,
        width: 90,
        backgroundColor: '#EFDF00',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsB: {
        height: 90,
        width: 90,
        backgroundColor: '#9ACD32',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsGs: {
        height: 90,
        width: 90,
        backgroundColor: '#8A2BE2',
        borderRadius: 10,
        alignItems: 'center'
    },
    letter: {
        fontSize: 70,
        fontWeight: '700',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.95)',
        textShadowOffset: { width: 3, height: 5 },
        textShadowRadius: 9
    },
    hash: {
        fontSize: 30,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.95)',
        textShadowOffset: { width: 3, height: 5 },
        textShadowRadius: 4
    },
    closeButton: {
        width: '100%',
        backgroundColor: 'red',
        justifyContent: 'center'
    }
});
