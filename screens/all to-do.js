import React , { useState } from 'react';
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
        <View style={{marginTop:80, marginBottom:300,marginLeft:35,
        borderWidth:1,borderColor:'green',
       flex:1,backgroundColor:"#ffffff",
      borderRadius:8, width:300}}>
          <Text style={{fontSize:30,marginLeft:0,backgroundColor:'green',
            fontWeight:'bold',color:'white',borderRadius:8,height:60,
            paddingLeft:85,paddingTop:10}}>
            Add Task</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:20,marginLeft:0,
            fontWeight:'bold',color:'black',borderRadius:8,height:60,
            paddingLeft:25,paddingTop:15}}>
            Task:</Text>
            <TextInput style={{ 
           width:"68%", borderWidth:1,borderColor:'green',
           height: 40, color:'black',
           marginTop:"3%", fontSize:12,
           borderBottomRightRadius:20, marginBottom:4,
           borderTopRightRadius:20, 
           borderBottomLeftRadius:20,
           borderTopLeftRadius:20,
           marginLeft:"2%", 
            paddingLeft:30,paddingBottom:16
          
        } }>
           </TextInput>
            </View>

            


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
             
          <Text style={{color: 'green',
          fontSize: 25,
           paddingLeft:100}}>
            All to-dos</Text>
            
           </View>
          </View>
         
          <Text style={{ 
           width:"90%", borderWidth:0,borderColor:'green',
           height: 0, color:'black',
           marginTop:"11%", fontSize:15,
           borderBottomRightRadius:20, marginBottom:4,
           marginLeft:"5%", 
            paddingLeft:30,paddingBottom:16
          
        } }>
           
        </Text>
       
       <ScrollView style={{height:100}}>
       <View style={{marginTop:-15, width:400, height:800
      }}>       
          
          <Text style={{color: 'black', fontWeight:'bold',
          fontSize: 25,paddingTop:8,
           paddingLeft:20}}>
            Not Done:</Text>   
              <TouchableOpacity>
        <View style={{ 
           width:"80%", borderWidth:1,borderColor:'green',
           height: 60, color:'black', backgroundColor:'white',
           marginTop:"4%", fontSize:15,
           borderBottomRightRadius:20, marginBottom:-5,
           borderTopRightRadius:20, 
           borderBottomLeftRadius:20,
           borderTopLeftRadius:20,
           marginLeft:"5%", flexDirection:'row', flexWrap:'wrap',
            paddingLeft:20,paddingBottom:10  
        } }>
          <Image source={require('./assets/images/n3.png')}
          style={{width: 34,height: 34, backgroundColor: 'green',
          marginLeft:-18, borderWidth:1,
           marginTop:10}}>
          </Image>
          <View style={{height:40, flex:1, width:"40%",}}>
          <Text style={{color: 'black',
          fontSize: 20, paddingTop:0,
           paddingLeft:10, marginTop:5}}>
            Fertilize plant</Text>
            </View>
            <TouchableOpacity>
            <Image source={require('./assets/images/d3.png')}
          style={{width: 34,height: 34, backgroundColor: 'white',
          marginLeft:-40, borderWidth:1, color:'green', 
           marginTop:10}}>
          </Image></TouchableOpacity>
        </View>
        </TouchableOpacity>
 
   
        <View>
        <Text style={{color: 'black', fontWeight:'bold',
          fontSize: 25,paddingTop:8,
           paddingLeft:20}}>
            Done:</Text>  
            
            <TouchableOpacity>
        <View style={{ 
           width:"80%", borderWidth:1,borderColor:'green',
           height: 60, color:'black', backgroundColor:'white',
           marginTop:"4%", fontSize:15,
           borderBottomRightRadius:20, marginBottom:-5,
           borderTopRightRadius:20, 
           borderBottomLeftRadius:20,
           borderTopLeftRadius:20,
           marginLeft:"5%", flexDirection:'row', flexWrap:'wrap',
            paddingLeft:20,paddingBottom:10  
        } }>
          <Image source={require('./assets/images/n3.png')}
          style={{width: 34,height: 34, backgroundColor: 'green',
          marginLeft:-18, borderWidth:1,
           marginTop:10}}>
          </Image>
          <View style={{height:40, flex:1, width:"40%",}}>
          <Text style={{color: 'black',
          fontSize: 20, paddingTop:0,
           paddingLeft:10, marginTop:5}}>
            Water Plants </Text>
           
            </View>
            <TouchableOpacity>
            <Image source={require('./assets/images/d3.png')}
          style={{width: 34,height: 34, backgroundColor: 'white',
          marginLeft:-40, borderWidth:1, color:'green', 
           marginTop:10}}>
          </Image></TouchableOpacity>
        </View>
        </TouchableOpacity>
        
        </View>


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