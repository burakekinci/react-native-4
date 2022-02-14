import { StyleSheet, Dimensions } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container:{flex:1,backgroundColor:'#fff5ee',marginBottom:50},
    body_container:{padding:10},
    image_container:{
        padding:15,
        backgroundColor:'white',
        alignItems:'center',
    },
    image:{
        width:'80%',
        height:undefined,
        aspectRatio:1,
        resizeMode:'contain',
        backgroundColor: 'white',
    },
    title:{fontWeight:'bold', fontSize:25, color:'black', fontWeight:'700'},
    desc:{fontStyle:'italic', marginVertical:5,color:'#260f33'},
    price:{fontWeight:'bold', fontSize:22, textAlign:'center',backgroundColor:'#8000bf',
        borderBottomRightRadius:20,borderTopRightRadius:20,padding:5, color:'#fffff0',
        borderTopLeftRadius:23,     
    },
    price_mask:{
        backgroundColor:'#ffff00',borderBottomRightRadius:20,borderTopRightRadius:20,
        borderColor:'#8000bf' , elevation:15,
    },
    add:{fontWeight:'bold',fontSize:22,textAlign:'center',backgroundColor:'#ffff00',
        borderBottomLeftRadius:20, borderTopLeftRadius:20, padding:5,color:'#660099',
        borderBottomRightRadius:23,  
        
    },
    add_mask:{
        backgroundColor:'#8000bf',borderBottomLeftRadius:20,borderTopLeftRadius:20,width:'25%',
        borderColor:'#ffff00', elevation:15,
    },
    price_container:{
        flexDirection:'row-reverse',
        padding:10,
        alignItems:'flex-end',
    },
})