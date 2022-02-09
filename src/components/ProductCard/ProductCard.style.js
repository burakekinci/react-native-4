import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:8,
        margin:10,
        borderRadius: 10,
        borderWidth:1,
        flex:1,
        borderColor:'lightgray',
    },
    body_container:{
        flex:1,
        justifyContent:'space-between',
        marginTop: 10,        
    },
    image:{
        alignSelf:'center',
        width: 130,
        minHeight:200,
        maxHeight:220,
        backgroundColor:'white',
        resizeMode:'contain',
    },
    title:{
        fontSize:14,
        fontWeight:'600',
        fontFamily:'Gilroy',
        alignSelf:'center',
        color:'black',
    },
    price:{
        marginTop:0,
        fontSize:16,
        color:'#fffff0',
        fontWeight:'500',
    },
    price_container:{
        marginVertical:8,
        backgroundColor:'#6c00ac',
        alignSelf:'center',
        borderRadius:20,
        elevation:20,
        justifyContent:'center',
        alignItems:'center',
        width:'55%',
    },
});