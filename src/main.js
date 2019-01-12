import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import { Container, Header, Content, Button, Text, Icon, Row } from 'native-base';
import Modal from 'react-native-modal';
import Tuner from './tuner';
import Note from './note';
import bottom from '../Images/spinspin.gif';
import randomColor from 'randomcolor'; // import the script

export default class Main extends Component {
    state = {
        note: {
            name: 'A',
            octave: 4,
            frequency: 440
        },
        showKey: false
    };

    showKey = () => {
        this.setState({
            showKey: !this.state.showKey
        });
    };

    _update(note) {
        this.setState({ note });
    }

    componentDidMount() {
        const tuner = new Tuner();
        tuner.start();
        tuner.onNoteDetected = (note) => {
            if (this._lastNoteName === note.name) {
                this._update(note);
            } else {
                this._lastNoteName = note.name;
            }
        };
    }

    spin = function(options) {
        let colorGen = () => {
            if (this.state.note.name === 'C') {
                return '#ff0000';
            } else if (this.state.note.name === 'G') {
                return '#ff4500';
            } else if (this.state.note.name === 'D') {
                return '#FFA500';
            } else if (this.state.note.name === 'A') {
                return '#FFAE42';
            } else if (this.state.note.name === 'E') {
                return '#EFDF00';
            } else if (this.state.note.name === 'B') {
                return '#9ACD32';
            } else if (this.state.note.name === 'F♯') {
                return '#00FF00';
            } else if (this.state.note.name === 'C♯') {
                return '#0D98BA';
            } else if (this.state.note.name === 'F') {
                return '#CD00CD';
            } else if (this.state.note.name === 'D♯') {
                return '#0000FF';
            } else if (this.state.note.name === 'G♯') {
                return '#8A2BE2';
            } else if (this.state.note.name === 'A♯') {
                return '#4B0082';
            } else {
                return 'black';
            }
        };

        let color = colorGen(); // a hex code for an attractive color
        return {
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            backgroundColor: color
        };
    };

    render() {
        return (
            <ImageBackground source={bottom} style={this.spin()}>
                <View style={style.all}>
                    <View style={style.blank} />
                    <View style={style.contents}>
                        <Note style={style.numser} {...this.state.note} />
                        <Text style={style.frequency}>{this.state.note.frequency.toFixed(1)} Hz</Text>
                    </View>
                    <View style={style.nav}>
                        <Button iconRight success style={style.button} onPress={this.props.toggleHome}>
                            <Icon style={style.icon} name='home' />
                        </Button>
                        <Button iconRight danger style={style.button} onPress={this.showKey}>
                            <Icon style={style.icon} name='key' />
                        </Button>
                    </View>
                    <Modal isVisible={this.state.showKey}>
                        <View style={style.alls} onPress={this.showKey}>
                            <View style={style.blank} />
                            <View style={style.colorKeys}>
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
                                        <Text style={style.letter}>F♯</Text>
                                    </View>
                                    <View style={style.colorsCs}>
                                        <Text style={style.letter}>C♯</Text>
                                    </View>
                                </View>
                                <View style={style.split}>
                                    <View style={style.colorsF}>
                                        <Text style={style.letter}>F</Text>
                                    </View>
                                    <View style={style.colorsDs}>
                                        <Text style={style.letter}>D♯</Text>
                                    </View>
                                </View>
                                <View style={style.split}>
                                    <View style={style.colorsGs}>
                                        <Text style={style.letter}>G♯</Text>
                                    </View>
                                    <View style={style.colorsAs}>
                                        <Text style={style.letter}>A♯</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={style.navi}>
                                <Button iconRight success style={style.button} onPress={this.props.toggleHome}>
                                    <Icon style={style.icon} name='home' />
                                </Button>
                                <Button iconRight danger style={style.button} onPress={this.showKey}>
                                    <Icon style={style.icon} name='key' />
                                </Button>
                            </View>
                        </View>
                    </Modal>
                </View>
            </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    all: {
        height: '100%',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    alls: {
        height: '100%',
        width: '110%',
        marginLeft: '-5%',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    contents: {
        alignItems: 'center'
    },
    frequency: {
        fontSize: 35,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.95)',
        textShadowOffset: { width: 3, height: 5 },
        textShadowRadius: 4
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '14%'
    },
    icon: {
        flexDirection: 'column',
        marginLeft: '5%'
    },
    blank: {
        //
    },
    nav: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mode: {
        flexDirection: 'column',
        height: '105%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    navi: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '-5%'
    },
    close: {},
    colorKeys: {
        flexDirection: 'column',
        height: '90%',
        width: '100%',
        justifyContent: 'space-between'
    },
    split: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 100,
        width: '100%',
        margin: 0
    },
    colorsA: {
        height: 100,
        width: 100,
        backgroundColor: '#FFAE42',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsAs: {
        height: 100,
        width: 100,
        backgroundColor: '#4B0082',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsC: {
        height: 100,
        width: 100,
        backgroundColor: '#ff0000',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsCs: {
        height: 100,
        width: 100,
        backgroundColor: '#0D98BA',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsD: {
        height: 100,
        width: 100,
        backgroundColor: '#0D98BA',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsDs: {
        height: 100,
        width: 100,
        backgroundColor: '#0000FF',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsG: {
        height: 100,
        width: 100,
        backgroundColor: '#ff4500',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsF: {
        height: 100,
        width: 100,
        backgroundColor: '#CD00CD',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsFs: {
        height: 100,
        width: 100,
        backgroundColor: '#00FF00',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsE: {
        height: 100,
        width: 100,
        backgroundColor: '#EFDF00',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsB: {
        height: 100,
        width: 100,
        backgroundColor: '#9ACD32',
        borderRadius: 10,
        alignItems: 'center'
    },
    colorsGs: {
        height: 100,
        width: 100,
        backgroundColor: '#8A2BE2',
        borderRadius: 10,
        alignItems: 'center'
    },
    letter: {
        // height: 90,
        fontSize: 80,
        fontWeight: '700',
        color: 'white'
    }
});
