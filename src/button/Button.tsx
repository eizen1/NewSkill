import React from "react";
import{ View, Text, TouchableOpacity,
    TouchableOpacityProps, StyleSheet} from 'react-native'

type ButtonProps = TouchableOpacityProps & {
    title:string
}

export default function Button({ title, ...rest }: ButtonProps){

    return(

        <TouchableOpacity style={styles.btn}
        activeOpacity={.7}
        {...rest}
        >
     <Text style={styles.txt}>{title}</Text>
 </TouchableOpacity>
        )

}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#102b55',
        width: '90%',
        padding: 12,
        marginLeft: 10,
        marginTop: 15,
        borderRadius: 7
    },

    txt:{
        color:'#fff',
        textAlign:'center'
    }
})