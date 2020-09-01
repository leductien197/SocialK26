import {Text, View, StyleSheet} from "react-native"
import colors from "../../themes/Colors";

const styles = StyleSheet.create({

  
    view_top:{
         flexDirection: "row",
         alignItems:"center",
        
         height: 70,
         width: "100%",
         borderBottomWidth:0.5,
         backgroundColor:colors.pink,
    },

    view_user:{
        marginTop:20,
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        height:70,
    },

    view_input:{
        fontSize:50,
        marginTop: 10,
        width:"100%",
        height:400,
    },
    input:{
       height:350,
        width:"100%",
    },

    view_bottom:{
        marginBottom:10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height:70,
        width:"100%",
        borderWidth:1,

    }
})

export default styles;