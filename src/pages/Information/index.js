import { Text, View } from 'react-native'
import React from 'react'

export default function Information({ route }){

    return (
      <View style={{marginTop:60}}>
        <Text>{route.params?.nome}</Text>
        <Text>{route.params?.telefone}</Text>
        <Text>{route.params?.endereco}</Text>
        <Text>{route.params?.numero}</Text>
        <Text>{route.params?.profisscao}</Text>
        <Text>{route.params?.email}</Text>
      </View>
    )
  
}