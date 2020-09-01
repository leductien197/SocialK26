import { View, Text, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from "../../themes/Colors"
const styles = StyleSheet.create({

    view_top: {
        flexDirection: "row",
        alignItems: "center",

        height: 70,
        width: "100%",
        borderBottomWidth: 0.5,
        backgroundColor: colors.bloodOrange,
    },

    op1:{
        borderRadius:10,
        backgroundColor:colors.snow,
        width:"90%",
        marginTop:20,
        marginLeft:20,
        // justifyContent:"flex-start",
    },

    op2: {
       
        borderRadius: 10,
        backgroundColor: colors.snow,
        width: "90%",
        marginTop: 20,
        marginLeft: 20,
    },
    profile:{
        flexDirection:"row",
        margin:10,
        height:30,
        borderBottomWidth:0.2,
        color:colors.black,
        alignItems:"center",
    },
})
export default styles;