import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import Tuner from './src/tuner';
import Note from './src/note';
import logo from './Images/logo.png';
import Splash from './src/Splash';
import Main from './src/main';

export default class App extends Component {
    state = {
        note: {
            name: 'A',
            octave: 4,
            frequency: 440
        },
        showSplash: false,
        showMain: true
    };

    toggleSplash = () => {
        this.setState({
            showSplash: true,
            showMain: false
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

    render() {
        return (
            <View style={style.body}>
                {!this.state.showSplash && <Splash toggleSplash={this.toggleSplash} />}
                {!this.state.showMain && <Main />}
            </View>
        );
    }
}

const style = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
    }
});
