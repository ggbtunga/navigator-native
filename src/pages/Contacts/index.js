import { Text, View } from 'react-native'
import React from 'react'

export default function Contacts({navigation}){
    return (
        <View style={{marginTop:60}}>
            <View>
                <Text>Nome: Maria Lima</Text>
                <Text>Telefone: (11)98765-4321</Text>
                <Text
                onPress={()=>navigation.navigate('Information',
                {
                    nome:'Maria Lima',
                    telefone:'(11)98765-4321',
                    endereco:'Rua Doutor Mário Silva',
                    numero:'203',
                    profissao:'Bióloga',
                    email:'marialima@email.com',
                }
                )}
                >Information...</Text>
            </View>

              <View style={{marginTop:20}}>
                <Text>Nome: João Cardoso</Text>
                <Text>Telefone: (14)91238-4567</Text>
                <Text
                onPress={()=>navigation.navigate('Information',
                {
                    nome:'João Cardoso',
                    telefone:'(14)91238-4567',
                    email:'joaocardoso@coluna.com',
                    endereco:'Rua das Laranjeiras',
                    numero:'507',
                    profissao:'Jornalista',
                })}
                >Information...</Text>
            </View>
        </View>
    )
  }
