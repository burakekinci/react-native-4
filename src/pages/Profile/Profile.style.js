import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container:{flex:1,marginBottom:'16%',elevation:7,backgroundColor:'#fff5ee',borderRadius:30,},
    title:{
        fontSize:25,
        fontFamily:'CinzelDecorative-Regular',
    },

    /** UPPER CONTAİNER CONTENTS **/
    upper_container:{
        flex:0.4,
        backgroundColor:'#e8ebff',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        
        
    },
    upper_inner_container:{
        flex:1,
        borderBottomRightRadius:45,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        elevation:5,
        padding:15,
        justifyContent:'space-around',

    },

    /** UPPER İNNER CONTAİNER CONTENTS **/
    person:{
        backgroundColor:'#f4f4f4',
        padding:3,
        borderRadius:8,
        elevation:20,
        flexDirection:'row',
    },
    icon_list_container:{
        borderRadius:8,
        overflow:'hidden',
        elevation:20,
    },
        /*Flatlist contentContainerStyle*/
        icon_list:{
            backgroundColor:'#f4f4f4',
            padding:3,
            justifyContent:'space-around',
            alignItems:'center',
            flex:1,
            overflow:'hidden',  
        },

    /** PERSON CONTAİNER CONTENTS **/
    image:{
        height:80,
        width:80,
        borderRadius:40,
        marginHorizontal:5,
        marginVertical:3,
    },
    person_texts:{
        flex:1,
        padding:5,
        justifyContent:'space-around',
    },
    icon_container:{
        justifyContent:'space-around',
        alignItems:'center',
        flex:0.25,
    },

    /** PERSON TEXT CONTAİNER CONTENTS **/
    name:{
        fontSize:22,
        fontFamily:'notoserif',
        color:'#260f63',
        fontWeight:'700',
        alignSelf:'flex-start',
    },
    appelation:{
        fontSize:16,
        fontFamily:'notoserif',
        color:'#260f63',
        fontWeight:'400',
        fontStyle:'italic',
        alignSelf:'flex-start',
    },
    /**----UPPER CONTAİNER ENDS----**/

    /** LOWER CONTAİNER CONTENTS **/
    lower_container:{
        flex:0.6,
        backgroundColor:'#7200ab',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    },
    lower_inner_container:{
        backgroundColor:'#fcfcfc',
        flex:1,
        borderTopLeftRadius: 45,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        justifyContent:'space-around',
        padding:15,
    },

    /** LOWER İNNER CONTAİNER CONTENTS **/
    options_list_container:{
        borderRadius:8,
        overflow:'hidden',   
    },
        /*Flatlist contentContainerStyle*/
        option_list:{
            backgroundColor:'red',
            padding:3,
            justifyContent:'space-around',
            alignItems:'center',
            flex:1,
            overflow:'hidden',  
        },
    

    
});