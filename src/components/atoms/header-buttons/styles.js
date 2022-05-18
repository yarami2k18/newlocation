import { StyleSheet, Platform} from 'react-native';
import { COLORS } from '../../../constants';

console.log(Platform.OS); 

export const styles = StyleSheet.create({
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Platform.OS === 'android' ? 'black' : COLORS.primaryColor,
    }
});