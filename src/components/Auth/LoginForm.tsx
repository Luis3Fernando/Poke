import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, ToastAndroid } from 'react-native'
import { useFormik } from "formik"
import * as Yup from 'yup'
import { user, userDetails } from '../../utils/userDB'
import useAuth from '../../hooks/useAuth'

export default function LoginForm() {
    const { login } = useAuth()

    console.log(useAuth())

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validation()),
        validateOnChange: false,
        onSubmit: (data) => {
            const { username, password } = data;

            if (username !== user.username || password !== user.password) {
                ToastAndroid.show('El usuario o contraseña no son incorrectos', ToastAndroid.SHORT);
            } else {
                login(userDetails);
            }
        }
    });

    return (
        <View>
            <Text style={styles.title}>Iniciar Sesion</Text>
            <TextInput
                placeholder='Nombre de usuario'
                style={styles.input}
                autoCapitalize='none'
                value={formik.values.username}
                onChangeText={(text) => formik.setFieldValue("username", text)}
            />

            <TextInput
                placeholder='Contraseña'
                style={styles.input}
                autoCapitalize='none'
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue("password", text)}
            />
            <Button title='entrar' onPress={formik.handleSubmit} />

            <Text style={styles.error}>
                {formik.errors.username}
            </Text>

            <Text style={styles.error}>
                {formik.errors.password}
            </Text>
        </View>
    )
}

function initialValues() {
    return {
        username: "",
        password: ""
    }
}

function validation() {
    return {
        username: Yup.string().required("El usuario es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria")
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    error: {
        textAlign: 'center',
        color: 'red',
        marginTop: 20,
    }
})

