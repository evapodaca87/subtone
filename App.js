import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Image } from 'react-native';
import { Root, Container, Header, Content, Button, Text, Icon, Toast } from 'native-base';
import Tuner from './src/tuner';
import Splash from './src/Splash';
import Main from './src/main';
import Log from './src/log';
import Saved from './src/saved';

var randomColor = require('randomcolor'); // import the script
var totallyRandomColor = randomColor(); // a hex code for an attractive color

export default class App extends Component {
    state = {
        note: {
            name: 'A',
            octave: 4,
            frequency: 440
        },
        showSplash: false,
        showMain: true,
        showLog: true,
        showSaved: true
    };

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

    toggleSplash = () => {
        this.setState({
            showSplash: true,
            showMain: false,
            showLog: true,
            showSaved: true
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

    toMain = () => {
        this.setState({
            showSplash: true,
            showMain: false,
            showLog: true,
            showSaved: true
        });
    };

    toggleHome = () => {
        this.setState({
            showSplash: false,
            showMain: true,
            showLog: true,
            showSaved: true
        });
    };

    toggleLogPage = () => {
        this.setState({
            showSplash: true,
            showMain: true,
            showLog: true,
            showSaved: false
        });
    };

    toggleLog = () => {
        console.log('PRESSSSSSSSSS');
        this.setState({
            showSplash: true,
            showMain: true,
            showLog: false,
            showSaved: true
        });
    };

    inputLog = () => {
        this.setState({
            showSplash: true,
            showMain: true,
            showLog: true,
            showSaved: false
        });
        Toast.show({
            text: 'Entry Logged!',
            position: 'top',
            textStyle: {
                color: 'yellow',
                textAlign: 'center'
            },
            duration: 1500
        });
    };

    samples = [
        {
            title: "Don't Leave",
            artist: 'Oshi',
            key: 'B',
            init: 'ESA'
        },
        {
            title: 'Day 3',
            artist: 'TaKu',
            key: 'A',
            init: 'ESA'
        }
    ];

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
                    {!this.state.showSplash && (
                        <Splash
                            toggleSplash={this.toggleSplash}
                            inputLog={this.inputLog}
                            toggleHome={this.toggleHome}
                            toggleLog={this.toggleLog}
                            toggleLogPage={this.toggleLogPage}
                            toMain={this.toMain}
                            sample={this.samples}
                        />
                    )}
                    {!this.state.showMain && (
                        <Main
                            toggleSplash={this.toggleSplash}
                            inputLog={this.inputLog}
                            toggleHome={this.toggleHome}
                            toggleLog={this.toggleLog}
                            toggleLogPage={this.toggleLogPage}
                            toMain={this.toMain}
                            spin={this.spin()}
                            samples={this.samples}
                        />
                    )}
                    {!this.state.showLog && (
                        <Log
                            toggleSplash={this.toggleSplash}
                            inputLog={this.inputLog}
                            toggleHome={this.toggleHome}
                            toggleLog={this.toggleLog}
                            toggleLogPage={this.toggleLogPage}
                            toMain={this.toMain}
                            spin={this.spin()}
                            samples={this.samples}
                        />
                    )}
                    {!this.state.showSaved && (
                        <Saved
                            toggleSplash={this.toggleSplash}
                            inputLog={this.inputLog}
                            toggleHome={this.toggleHome}
                            toggleLog={this.toggleLog}
                            toggleLogPage={this.toggleLogPage}
                            toMain={this.toMain}
                            spin={this.spin()}
                            samples={this.samples}
                        />
                    )}
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
