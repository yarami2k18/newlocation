import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 35,
        marginVertical: 20,
    },
    label: {
        fontSize: 18,
        marginVertical: 5,
        color: COLORS.textColor,
        fontWeight: 'bold'
    },
    input: {
        borderBottomColor: COLORS.textColor,
        borderBottomWidth: 1,
        marginVertical: 10,
        padding: 5
    }
})