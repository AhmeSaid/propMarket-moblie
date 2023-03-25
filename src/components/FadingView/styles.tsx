import {
    StyleSheet
} from 'react-native';
import {
    getWidth,
    RFValue
} from '../../../config/dimensions';
import {
    Colors
} from '../../../styles';
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: Colors.WHITE,
        borderRadius: RFValue(15),
        justifyContent: "center",
        paddingHorizontal: getWidth(16),
        width: getWidth(374),
        overflow: "hidden"
    },
    shadow: {
        shadowOpacity: 0.016,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        elevation: 10
    },
    border: {
        borderColor: Colors.BORDER,
        borderWidth: 1
    }
});


export default styles;
