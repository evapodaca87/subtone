import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import Tuner from './tuner';
import Note from './note';
import bottom from '../Images/hel.png';

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

    render() {
        return (
            <ImageBackground source={bottom} style={{ width: '110%', height: '100%', opacity:0.9 }}>
                <View style={style.body}>
                    <StatusBar backgroundColor='#000' translucent />
                    <Note {...this.state.note} />
                    <Text style={style.frequency}>{this.state.note.frequency.toFixed(1)} Hz</Text>
                </View>
            </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },
    frequency: {
        fontSize: 28,
        color: 'white',
        marginBottom: '30%'
    }
});
