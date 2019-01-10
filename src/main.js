import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import { Container, Header, Content, Button, Text, Icon } from 'native-base';
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
        }
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
                return '#FFFF00';
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
            height: '108%',
            width: '100%',
            backgroundColor: color
        };
    };

    render() {
        return (
            <ImageBackground source={bottom} style={this.spin()}>
                <View style={style.content}>
                    <StatusBar backgroundColor='#000' translucent />
                    <Note style={style.numser} {...this.state.note} />
                    <Text style={style.frequency}>{this.state.note.frequency.toFixed(1)} Hz</Text>
                </View>
                <View style={style.back}>
                    <Button iconRight success style={style.back} onPress={this.props.toggleHome}>
                        <Icon style={style.icon} name='home' />
                        {/* <Text style={style.texted}>Back</Text> */}
                    </Button>
                    {/* <Button iconRight success style={style.back} onPress={this.props.toggleHome}> */}
                        {/* <Icon style={style.icon} name='home' /> */}
                        {/* <Text style={style.texted}>Back</Text> */}
                    {/* </Button> */}
                </View>
            </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    content: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '68%',
        marginTop: '98%'
    },
    frequency: {
        fontSize: 28,
        color: 'white',
        marginTop: '-3%'
    },
    back: {
        marginTop: '-22%',
        height: '20%',
        flexDirection: 'row',
    },
    texted: {
        fontSize: 30,
        marginLeft: '-5%'
    },
    icon: {
        marginLeft: '3%'
    }
});
