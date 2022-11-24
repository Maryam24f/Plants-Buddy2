
import React, { useState } from 'react';
///import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {SearchBar} from 'react-native-elements';
const App = () => {
 const [Show, setShow]=useState(false);
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
   <View style={{backgroundColor: 'white'
   , height: "100%"}}>


     <View style={{backgroundColor: 'white',height: 60,
       }}>
         <View style={{height: 55,marginBottom:0,flexDirection:'row'}}>
         <Image source={require('./assets/images/l2.png')}
         style={{width: 50,backgroundColor: 'white' ,
         height: 45, marginLeft:"4%", 
          marginTop:10}}>
         </Image>
          <Text style={{color: 'green',
         fontSize: 25,fontWeight:'bold',height: 40, marginTop:10,paddingTop:10,
          }}>Plants-Buddy</Text>
          </View>

          <Modal transparent= {true} visible={Show}>
       <View style={{flex:1,backgroundColor:"#000000aa"}}>
       <View style={{marginTop:50, marginBottom:50,marginLeft:35,
       borderWidth:1,borderColor:'green',
      flex:1,backgroundColor:"#ffffff",
     borderRadius:8, width:300}}>
         <Text style={{fontSize:30,marginLeft:0,backgroundColor:'green',
           fontWeight:'bold',color:'white',borderRadius:8,height:60,
           paddingLeft:85,paddingTop:10}}>
           Add Plant</Text>
           <View style={{flexDirection:'row'}}>
           <Text style={{fontSize:20,marginLeft:0,
           fontWeight:'bold',color:'black',borderRadius:8,height:60,
           paddingLeft:25,paddingTop:15}}>
           Name:</Text>
           <TextInput style={{ 
          width:"78%", borderWidth:1,borderColor:'green',
          height: 40, color:'black',
          marginTop:"3%", fontSize:12,
          borderBottomRightRadius:20, marginBottom:-10,
          borderTopRightRadius:20, 
          borderBottomLeftRadius:20,
          borderTopLeftRadius:20,
          marginLeft:-30, marginTop:40,
           paddingLeft:30,paddingBottom:16
         
       } }>
          </TextInput>
           </View>

           <View style={{}}>
           <Text style={{fontSize:20,marginLeft:0,
           fontWeight:'bold',color:'black',borderRadius:8,height:60,
           paddingLeft:25,paddingTop:15}}>
           Discription:</Text>
           <TextInput style={{ 
          width:"78%", borderWidth:1,borderColor:'green',
          height: 100, color:'black',
          marginTop:-16, fontSize:12,
          borderBottomRightRadius:20, marginBottom:4,
          borderTopRightRadius:20, 
          borderBottomLeftRadius:20,
          borderTopLeftRadius:20,
          marginLeft:"17%", 
           paddingLeft:30,paddingBottom:70
         
       } }>
          </TextInput>
           </View>

           <View style={{flexDirection:'row'}}>
          
           <View style={{ 
          width:"68%", borderWidth:1,borderColor:'green',
          height: 200, color:'black',
          marginTop:"3%", fontSize:12,
          borderBottomRightRadius:20, marginBottom:4,
          borderTopRightRadius:20, 
          borderBottomLeftRadius:20,
          borderTopLeftRadius:20,
          marginLeft:"18%", 
           paddingLeft:30,paddingBottom:16  } }>
             <Image 
         style={{width: 180,backgroundColor: '#000000aa' ,
         height: 180, marginLeft:-20, borderWidth:1,
          marginTop:10}}>
         </Image>
          </View>
          
           </View>
         <TouchableOpacity>
           <Text style={{fontSize:15,marginLeft:95,borderWidth:2,borderColor:'green',
           fontWeight:'bold',color:'green',borderRadius:8,height:40,width:130,
           paddingLeft:15,paddingTop:10}}>
           Upload image</Text>
         </TouchableOpacity>

         <TouchableOpacity onPress={()=> setShow(false)}>
           <Text style={{fontSize:20,marginLeft:106,backgroundColor:'green',
           fontWeight:'bold',color:'white',borderRadius:8,height:40,width:110,
           paddingLeft:40,paddingTop:5,marginTop:25}}>
           Add</Text>
         </TouchableOpacity>
         </View>
      </View>
       </Modal>

          <View style={{backgroundColor: 'white' ,borderWidth:1,
           borderColor:'green',
           height: 40,  flexDirection:'row'}}>
            <TouchableOpacity> 
             <Image source={require('./assets/images/b3.jpg')}
         style={{width: 25,height: 25, backgroundColor: 'green',
         marginLeft:"25%", borderWidth:1,
          marginTop:5}}>
         </Image>
         </TouchableOpacity>
         <Text style={{color: 'green',
         fontSize: 25,
          paddingLeft:-10}}>
           OutDoor plants</Text>
           
          </View>
         </View>
        
         <TextInput style={{ 
          width:"90%", borderWidth:1,borderColor:'white',
          height: 10, color:'black',
          marginTop:"11%", fontSize:15,
          borderBottomRightRadius:20, marginBottom:4,
          borderTopRightRadius:20, 
          borderBottomLeftRadius:20,
          borderTopLeftRadius:20,
          marginLeft:"5%", 
           paddingLeft:30,paddingBottom:16
         
       } }>
          
       </TextInput>
      
      <ScrollView style={{height:100}}>
      <View style={{marginTop:-15, width:400, height:800
     }}>       
         
        
     <TouchableOpacity>
       <View style={{ 
          width:"80%", borderWidth:1,borderColor:'green',
          height: 60, color:'black', backgroundColor:'green',
          marginTop:"4%", fontSize:15,
          borderBottomRightRadius:20, marginBottom:-5,
          borderTopRightRadius:20, 
          borderBottomLeftRadius:20,
          borderTopLeftRadius:20,
          marginLeft:"5%", flexDirection:'row', flexWrap:'wrap',
           paddingLeft:20,paddingBottom:10  
       } }>
         <Image source={require('./assets/images/pl2.png')}
         style={{width: 34,height: 34, backgroundColor: 'green',
         marginLeft:-4, borderWidth:1, 
          marginTop:10}}>
         </Image>
         <View style={{height:50, flex:1, width:"40%",}}>
         <Text style={{color: 'white',
         fontSize: 20, paddingTop:5,
          paddingLeft:15, marginTop:5}}>
           Red Rose</Text></View>
           <TouchableOpacity>
           <Image source={require('./assets/images/d.png')}
         style={{width: 34,height: 34, backgroundColor: 'green',
         marginLeft:100, borderWidth:1, 
          marginTop:10}}>
         </Image></TouchableOpacity>
       </View>
       </TouchableOpacity>

       <TouchableOpacity>
       <View style={{ 
          width:"80%", borderWidth:1,borderColor:'green',
          height: 60, color:'black', backgroundColor:'green',
          marginTop:"4%", fontSize:15,
          borderBottomRightRadius:20, marginBottom:-5,
          borderTopRightRadius:20, 
          borderBottomLeftRadius:20,
          borderTopLeftRadius:20,
          marginLeft:"5%", flexDirection:'row', flexWrap:'wrap',
           paddingLeft:20,paddingBottom:10  
       } }>
         <Image source={require('./assets/images/pl2.png')}
         style={{width: 34,height: 34, backgroundColor: 'green',
         marginLeft:-4, borderWidth:1, 
          marginTop:10}}>
         </Image>
         <View style={{height:50, flex:1, width:"40%",}}>
         <Text style={{color: 'white',
         fontSize: 20, paddingTop:5,
          paddingLeft:15, marginTop:5}}>
           Lavandar</Text></View>
           <TouchableOpacity>
           <Image source={require('./assets/images/d.png')}
         style={{width: 34,height: 34, backgroundColor: 'green',
         marginLeft:100, borderWidth:1, 
          marginTop:10}}>
         </Image></TouchableOpacity>
       </View>
       </TouchableOpacity>

       <TouchableOpacity>
       <View style={{ 
          width:"80%", borderWidth:1,borderColor:'green',
          height: 60, color:'black', backgroundColor:'green',
          marginTop:"4%", fontSize:15,
          borderBottomRightRadius:20, marginBottom:-5,
          borderTopRightRadius:20, 
          borderBottomLeftRadius:20,
          borderTopLeftRadius:20,
          marginLeft:"5%", flexDirection:'row', flexWrap:'wrap',
           paddingLeft:20,paddingBottom:10  
       } }>
         <Image source={require('./assets/images/pl2.png')}
         style={{width: 34,height: 34, backgroundColor: 'green',
         marginLeft:-4, borderWidth:1, 
          marginTop:10}}>
         </Image>
         <View style={{height:50, flex:1, width:"40%",}}>
         <Text style={{color: 'white',
         fontSize: 20, paddingTop:5,
          paddingLeft:15, marginTop:5}}>
           Pink Rose</Text></View>
           <TouchableOpacity>
           <Image source={require('./assets/images/d.png')}
         style={{width: 34,height: 34, backgroundColor: 'green',
         marginLeft:100, borderWidth:1, 
          marginTop:10}}>
         </Image></TouchableOpacity>
       </View>
       </TouchableOpacity>

         </View>

      </ScrollView>


      <TouchableOpacity onPress={()=> setShow(true)}>
      <Image source={require('./assets/images/p3.png')}
         style={{width: 45,height: 45, backgroundColor: 'green',
         marginLeft:"80%", 
          marginTop:10}}>
         </Image></TouchableOpacity>


      <View style={{backgroundColor: 'white',
          width:"75%", borderColor:'green',
          height: 45, borderWidth:2,
          marginTop:"1%",
          borderBottomRightRadius:10,
          borderTopRightRadius:10, 
          borderBottomLeftRadius:10,
          borderTopLeftRadius:10,
          marginLeft:"10%",
          marginBottom:"1%",
          flexDirection:"row" 
       }}>
        <TouchableOpacity>
          <Image source={require('./assets/images/c.png')} 
          style={{height: 25, width: 25, marginTop: "6%", 
          marginLeft:  "35%"}}/>
       </TouchableOpacity>
       
       <TouchableOpacity>
          <Image source={require('./assets/images/r2.png')} 
          style={{height: 30, width: 45, marginTop: "15%", size:20,
          marginLeft: -10, marginBottom: "8%", paddingLeft:"10%"}}/>
       </TouchableOpacity>
       <TouchableOpacity>
          <Image source={require('./assets/images/s5.jpg')} 
          style={{height: 25, width: 30, marginTop: "12%", size:20,
          marginLeft: 45, marginBottom: "8%", paddingLeft:"2%"}}/>
       </TouchableOpacity>
       </View>

       

   </View>
  )};
  export default App;