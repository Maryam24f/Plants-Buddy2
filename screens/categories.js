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
   Button,
   Pressable
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 const App = () => {   
  const [Show, setShow]=useState(false);
  const [ShowE, setShowE]=useState(false);
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
        <View style={{marginTop:50, marginBottom:170,marginLeft:35,
        borderWidth:1,borderColor:'green',
       flex:1,backgroundColor:"#ffffff",
      borderRadius:8, width:300}}>
          <Text style={{fontSize:30,marginLeft:0,backgroundColor:'green',
            fontWeight:'bold',color:'white',borderRadius:8,height:60,
            paddingLeft:55,paddingTop:10}}>
            Add Category</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:20,marginLeft:0,
            fontWeight:'bold',color:'black',borderRadius:8,height:60,
            paddingLeft:25,paddingTop:15}}>
            Name:</Text>
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

        <Modal transparent= {true} visible={ShowE}>
        <View style={{flex:1,backgroundColor:"#000000aa"}}>
        <View style={{marginTop:50, marginBottom:170,marginLeft:35,
        borderWidth:1,borderColor:'green',
       flex:1,backgroundColor:"#ffffff",
      borderRadius:8, width:300}}>
          <Text style={{fontSize:30,marginLeft:0,backgroundColor:'green',
            fontWeight:'bold',color:'white',borderRadius:8,height:60,
            paddingLeft:55,paddingTop:10}}>
            Edit Category</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:20,marginLeft:0,
            fontWeight:'bold',color:'black',borderRadius:8,height:60,
            paddingLeft:25,paddingTop:15}}>
            Name:</Text>
            <TextInput multiline={true} style={{ 
           width:"68%", borderWidth:1,borderColor:'green',
           height: 40, color:'black',
           marginTop:"3%", fontSize:12,
           borderBottomRightRadius:20, marginBottom:4,
           borderTopRightRadius:20, 
           borderBottomLeftRadius:20,
           borderTopLeftRadius:20,
           marginLeft:"2%", paddingTop:10,
            paddingLeft:30,paddingBottom:0
          
        } }> OutDoor plants
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
              <Image source={require('./assets/images/0.jpg')}
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

          <TouchableOpacity onPress={()=> setShowE(false)}>
            <Text style={{fontSize:20,marginLeft:106,backgroundColor:'green',
            fontWeight:'bold',color:'white',borderRadius:8,height:40,width:110,
            paddingLeft:40,paddingTop:5,marginTop:25}}>
            Edit</Text>
          </TouchableOpacity>
          </View>
       </View>
        </Modal>
      
 
           <View style={{backgroundColor: 'white' ,borderWidth:1,
            borderColor:'green',
            height: 40,  flexDirection:'row'}}>
          <Text style={{color: 'green',
          fontSize: 25,
           paddingLeft:120}}>
            Categories</Text>
            <Image source={require('./assets/images/p3.png')}
          style={{width: 15,height: 15, backgroundColor: 'green',
          marginLeft:"45%", borderWidth:1,
           marginTop:10}}>
          </Image>
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
       
       <ScrollView style={{}}>
       <View style={{flexDirection:'row',marginTop:-15, width:400,
       flexWrap:'wrap', display:'flex'}}>       
          <View>
          <Image source={require('./assets/images/0.jpg')}
          style={{width: 150,height: 150, marginLeft:25, 
           borderTopRightRadius:5, 
           borderTopLeftRadius:5,
           marginTop:20}}>
          </Image>
          <View style={{borderWidth: 0,height:80,
          width:150, borderColor:'green', 
           color: 'green',fontSize: 20, 
           paddingLeft:10, marginTop:0,paddingTop:6, 
           backgroundColor: 'white',marginLeft:25, 
           borderBottomRightRadius:5,
           borderBottomLeftRadius:5,
          
           }}>
          <TouchableOpacity>
          <Text style={{borderWidth: 1,height:40,
          width:150, borderColor:'green', backgroundColor:'green', 
           color: 'white',fontSize: 20, 
           paddingLeft:10, marginTop:-7,paddingTop:6, 
           marginLeft:-11, 
           borderBottomRightRadius:5,
           borderBottomLeftRadius:5,
          
           }}>OutDoor plants   
           
        </Text>
           </TouchableOpacity>
           <View style={{flexDirection:'row'}}>
           <TouchableOpacity >
       <Image source={require('./assets/images/d3.png')}
          style={{width: 30,height: 30, backgroundColor: 'green',
          marginLeft:"10%", 
           marginTop:3}}>
          </Image></TouchableOpacity>
           <TouchableOpacity onPress={()=> setShowE(true)} >
       <Image source={require('./assets/images/e1.png')}
          style={{width: 30,height: 30, backgroundColor: 'green',
          marginLeft:"50%", 
           marginTop:3}}>
          </Image></TouchableOpacity></View>  
           </View> 
           </View>


           <View>
          <Image source={require('./assets/images/p1.jpg')}
          style={{width: 150,height: 150, marginLeft:25, 
           borderTopRightRadius:5, 
           borderTopLeftRadius:5,
           marginTop:20}}>
          </Image>
          <View style={{borderWidth: 0,height:80,
          width:150, borderColor:'green', 
           color: 'green',fontSize: 20, 
           paddingLeft:10, marginTop:0,paddingTop:6, 
           backgroundColor: 'white',marginLeft:25, 
           borderBottomRightRadius:5,
           borderBottomLeftRadius:5,
          
           }}>
          <TouchableOpacity>
          <Text style={{borderWidth: 1,height:40,
          width:150, borderColor:'green', backgroundColor:'green', 
           color: 'white',fontSize: 20, 
           paddingLeft:10, marginTop:-7,paddingTop:6, 
           marginLeft:-11, 
           borderBottomRightRadius:5,
           borderBottomLeftRadius:5,
          
           }}>InDoor plants   
           
        </Text>
           </TouchableOpacity>
           <View style={{flexDirection:'row'}}>
           <TouchableOpacity >
       <Image source={require('./assets/images/d3.png')}
          style={{width: 30,height: 30, backgroundColor: 'green',
          marginLeft:"10%", 
           marginTop:3}}>
          </Image></TouchableOpacity>
           <TouchableOpacity >
       <Image source={require('./assets/images/e1.png')}
          style={{width: 30,height: 30, backgroundColor: 'green',
          marginLeft:"50%", 
           marginTop:3}}>
          </Image></TouchableOpacity></View>  
           </View> 
           </View>

           <View>
          <Image source={require('./assets/images/p2.jpg')}
          style={{width: 150,height: 150, marginLeft:25, 
           borderTopRightRadius:5, 
           borderTopLeftRadius:5,
           marginTop:20}}>
          </Image>
          <View style={{borderWidth: 0,height:80,
          width:150, borderColor:'green', 
           color: 'green',fontSize: 20, 
           paddingLeft:10, marginTop:0,paddingTop:6, 
           backgroundColor: 'white',marginLeft:25, 
           borderBottomRightRadius:5,
           borderBottomLeftRadius:5,
          
           }}>
          <TouchableOpacity>
          <Text style={{borderWidth: 1,height:40,
          width:150, borderColor:'green', backgroundColor:'green', 
           color: 'white',fontSize: 20, 
           paddingLeft:10, marginTop:-7,paddingTop:6, 
           marginLeft:-11, 
           borderBottomRightRadius:5,
           borderBottomLeftRadius:5,
          
           }}>Flowery plants   
           
        </Text>
           </TouchableOpacity>
           <View style={{flexDirection:'row'}}>
           <TouchableOpacity >
       <Image source={require('./assets/images/d3.png')}
          style={{width: 30,height: 30, backgroundColor: 'green',
          marginLeft:"10%", 
           marginTop:3}}>
          </Image></TouchableOpacity>
           <TouchableOpacity >
       <Image source={require('./assets/images/e1.png')}
          style={{width: 30,height: 30, backgroundColor: 'green',
          marginLeft:"50%", 
           marginTop:3}}>
          </Image></TouchableOpacity></View>  
           </View> 
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