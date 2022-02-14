import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container:{flex:1,marginBottom:'16%',elevation:7,backgroundColor:'#fff5ee',borderRadius:30,},
    title:{
        fontSize:25,
        fontFamily:'CinzelDecorative-Regular',
    },
    upper_container:{
        flex:0.4,
        backgroundColor:'#fcfcfc',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        
        
    },
    lower_container:{
        flex:0.6,
        backgroundColor:'#c44fff',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 10 }, // change this for more shadow
        shadowOpacity: 0.4,
        shadowRadius: 6,
    },
    upper_inner_container:{
        backgroundColor:'#c44fff',
        flex:1,
        borderBottomRightRadius:45,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        elevation:6,
        padding:25,

    },
    lower_inner_container:{
        backgroundColor:'#fcfcfc',
        flex:1,
        borderTopLeftRadius: 45,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    },
    name:{
        fontSize:22,
        fontFamily:'notoserif',
        color:'#260f63',
        fontWeight:'700',
        alignSelf:'flex-start',
    },
    person:{
        backgroundColor:'#f4f4f4',
        padding:3,
        borderRadius:8,
        elevation:20,
        flexDirection:'row',
        
    },
    person_texts:{
        flex:1,
        padding:5,
        justifyContent:'space-around',
    },
    image:{
        height:100,
        width:100,
        borderRadius:50,
        marginHorizontal:5,
    },
    appelation:{
        fontSize:16,
        fontFamily:'notoserif',
        color:'#260f63',
        fontWeight:'400',
        fontStyle:'italic',
        alignSelf:'flex-start',
    },
    icon_container:{
        justifyContent:'space-around',
        alignItems:'center',
        flex:0.25,
    },
});