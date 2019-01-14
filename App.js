import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Image } from 'react-native';
import { Root, Container, Header, Content, Button, Text, Icon, Toast } from 'native-base';
import Tuner from './src/tuner';
import Splash from './src/Splash';
import Main from './src/main';
import Log from './src/log';

export default class App extends Component {
    state = {
        note: {
            name: 'A',
            octave: 4,
            frequency: 440
        },
        showSplash: false,
        showMain: true,
        showLog: true
    };

    toggleSplash = () => {
        this.setState({
            showSplash: true,
            showMain: false,
            showLog: true
        });
        Toast.show({
            text: 'EPILEPSY WARNING',
            position: 'top',
            textStyle: {
                color: 'red',
                textAlign: 'center'
            },
            duration: 1000
        });
    };

    toggleHome = () => {
        this.setState({
            showSplash: false,
            showMain: true,
            showLog: true
        });
    };

    toggleLog = () => {
        this.setState({
            showSplash: true,
            showMain: true,
            showLog: false
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
            <Root>
                <View style={style.body}>
                    {!this.state.showSplash && <Splash toggleSplash={this.toggleSplash} />}
                    {!this.state.showMain && <Main toggleHome={this.toggleHome} toggleLog={this.toggleLog} />}
                    {!this.state.showLog && <Log toggleHome={this.toggleSplash} />}
                </View>
            </Root>
        );
    }
}

const style = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center'
    }
});
