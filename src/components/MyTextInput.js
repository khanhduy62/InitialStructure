import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

export default class MyTextInput extends Component {

    constructor(props) {
        super(props)
    };

    render() {
        const { label, keyboardType, meta: { touched, error, warning }, input: { onChange, ...restInput } } = this.props
        console.log("propsMyTextInput :::::::::::: ", this.props)
        
        return (
            <View style={{ flexDirection: 'column', height: 70, alignItems: 'flex-start' }}>
                <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', width: 80 }}>{label}</Text>
                    <TextInput style={{ width: '50%' }} keyboardType={keyboardType} onChangeText={onChange} {...restInput}
                    >
                    </TextInput>
                </View>
                {touched && ((error && <Text style={{ color: 'red' }}>{error}</Text>) ||
                (warning && <Text style={{ color: 'orange' }}>{warning}</Text>))}
            </View>
        )
    }
}