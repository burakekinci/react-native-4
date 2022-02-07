import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:8,
        margin:10,
        borderRadius: 10,
        borderWidth:1,
        borderColor:'lightgray',
        flex:1,
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
        fontSize:13,
        fontWeight:'bold',
        fontFamily:'Gilroy',
        alignSelf:'center',
        color:'deeppink',
    },
    price:{
        marginTop:8,
        fontSize:17,
        color:'fuchsia',
        fontStyle:'italic',
        fontWeight:'bold',
        alignSelf:'center',
    },
});