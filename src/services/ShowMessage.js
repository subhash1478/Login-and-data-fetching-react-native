

import { Alert } from 'react-native'

 
 export const ShowSuccess = (data) => {
         Alert.alert('Success',data)
}


export const ShowError = (data) => {
    Alert.alert('Error',data)
}