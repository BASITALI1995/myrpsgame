import { StyleSheet,Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:"center",
    },
    container2: {
      flex: 1,
      //backgroundColor: 'pink',
      alignItems:"center",
      justifyContent:"center"
    },
    image: {
      flex: 1,
      width: '100%',
      height: '100%'
    },
    design:{
      fontSize:100,
      color:'white',
      marginTop:80,
      marginLeft:30
    },
    header:{
      fontSize:25,
      color:'black',
      marginTop:height/12
    },
    header2:{
      fontSize:35,
      color:'black',
    },
    header3:{
      fontSize:150,
    },
    button:{
      width:210,
      marginTop:height/3,
    },
    img:{
      width:200,
      height:200
    },
    btn:{
      marginTop:height/8
    }
  });


  export{
      styles,
      width,
      height
  }