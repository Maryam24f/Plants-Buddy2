import React ,{ useState }from 'react';
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

           <Modal transparent= {true} visible={ShowE}>
       <View style={{flex:1,backgroundColor:"#000000aa"}}>
       <View style={{marginTop:50, marginBottom:50,marginLeft:35,
       borderWidth:1,borderColor:'green',
      flex:1,backgroundColor:"#ffffff",
     borderRadius:8, width:300}}>
         <Text style={{fontSize:30,marginLeft:0,backgroundColor:'green',
           fontWeight:'bold',color:'white',borderRadius:8,height:60,
           paddingLeft:85,paddingTop:10}}>
           Edit Plant</Text>
           <View style={{flexDirection:'row'}}>
           <Text style={{fontSize:20,marginLeft:0,
           fontWeight:'bold',color:'black',borderRadius:8,height:60,
           paddingLeft:25,paddingTop:15}}>
           Name:</Text>
           <TextInput multiline= {true} style={{ 
          width:"75%", borderWidth:1,borderColor:'green',
          height: 40, color:'black',
          marginTop:"14%", fontSize:18,
          borderBottomRightRadius:20, marginBottom:0,
          borderTopRightRadius:20, 
          borderBottomLeftRadius:20,
          borderTopLeftRadius:20, paddingTop:8,
          marginLeft:-26, 
           paddingLeft:30,paddingBottom:-15
         
       } }> Red-Rose
          </TextInput>
           </View>

           <View style={{}}>
           <Text style={{fontSize:20,marginLeft:0,
           fontWeight:'bold',color:'black',borderRadius:8,height:60,
           paddingLeft:25,paddingTop:15}}>
           Discription:</Text>
           
           <TextInput multiline= {true} style={{  height:100,
          width:"78%", borderWidth:1,borderColor:'green',
          height: 100, color:'black',
          marginTop:-16, fontSize:15,
          borderBottomRightRadius:20, marginBottom:4,
          borderTopRightRadius:20, 
          borderBottomLeftRadius:20,
          borderTopLeftRadius:20,
          marginLeft:"17%", 
           paddingLeft:15,paddingBottom:10
         
       } }>
        Looking for a ruby-red rose that holds its color,
            even during the dog days of summer? 
            Consider this vigorous climber, which produces large,
             tight clusters of old-fashioned blooms on strong canes. 
             The big, lightly fragrant flowers of Lady in Red reach up 
             to 4½" across and are slightly ruffled at the edges. 
             The deep green foliage nicely sets off the vivid red of the 
             blooms, which come continuously during the season.
              More compact and controlled than many climbing roses,
               it not only performs well on arbors, fences and walls, 
               but also can fill gaps in the garden or elsewhere in 
               the landscape. Use it to create a gorgeous, living privacy
                screen or to define a space in your yard.
          </TextInput>
           </View>

           <View style={{flexDirection:'row'}}>
          
           <View style={{ 
          width:"78%", borderWidth:1,borderColor:'green',
          height: 200, color:'black',
          marginTop:"3%", fontSize:12,
          borderBottomRightRadius:20, marginBottom:4,
          borderTopRightRadius:20, 
          borderBottomLeftRadius:20,
          borderTopLeftRadius:20,
          marginLeft:"18%", 
           paddingLeft:30,paddingBottom:16  } }>
             <Image source={require('./assets/images/red.png')}
         style={{width: 210,backgroundColor: '#000000aa' ,
         height: 180, marginLeft:-20, borderWidth:1,
          marginTop:10}}>
         </Image>
          </View>
          
           </View>
         <TouchableOpacity>
           <Text style={{fontSize:15,marginLeft:105,borderWidth:2,borderColor:'green',
           fontWeight:'bold',color:'green',borderRadius:8,height:40,width:130,
           paddingLeft:15,paddingTop:10, marginTop:3}}>
           Upload image</Text>
         </TouchableOpacity>

      

         <TouchableOpacity onPress={()=> setShowE(false)}>
           <Text style={{fontSize:20,marginLeft:106,backgroundColor:'green',
           fontWeight:'bold',color:'white',borderRadius:8,height:40,width:110,
           paddingLeft:30,paddingTop:5,marginTop:25}}>
           Edit</Text>
         </TouchableOpacity>
         </View>
      </View>
       </Modal>
 
           <View style={{backgroundColor: 'white' ,borderWidth:1,
            borderColor:'green', marginBottom:0,
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
           paddingLeft:-50}}>
            Red_Roses</Text>
            <TouchableOpacity onPress={()=> setShowE(true)}> 
              <Image source={require('./assets/images/e1.png')}
          style={{width: 25,height: 25, backgroundColor: 'green',
          marginLeft:"40%", borderWidth:1,
           marginTop:5}}>
          </Image>
          </TouchableOpacity>
            
           </View>
          </View>

          <Text style={{ 
           width:"90%", borderWidth:0,borderColor:'green',
           height: 0, color:'black',
           marginTop:"11%", fontSize:15,
           marginBottom:-16,
           marginLeft:"5%", 
            paddingLeft:30,paddingBottom:16
          
        } }>
           
        </Text>
        
         
       
       <ScrollView style={{height:'auto'}}>
       <View style={{marginTop:-5, width:350, height:'auto'
      }}>   
           <Text style={{color: 'black', fontWeight:'bold',
          fontSize: 25,paddingTop:8,
           paddingLeft:20}}>
            Image:</Text>    
          <Image source={require('./assets/images/red.png')}
          style={{width: 325,height: 325, backgroundColor: 'green',
          marginLeft:"6%", 
           marginTop:10}}>
          </Image>

          <Text style={{color: 'black', fontWeight:'bold',
          fontSize: 25,paddingTop:8,
           paddingLeft:20}}>
            Name:</Text>  
            <Text style={{color: 'black', 
          fontSize: 15,paddingTop:2,
           paddingLeft:25}}>
            Ruby-red Rose</Text>  

            <Text style={{color: 'black', fontWeight:'bold',
          fontSize: 25,paddingTop:8,
           paddingLeft:20}}>
            Discription:</Text>  
            <Text style={{color: 'black',
          fontSize: 15,paddingTop:2,
           paddingLeft:25}}>
           Looking for a ruby-red rose that holds its color,
            even during the dog days of summer? 
            Consider this vigorous climber, which produces large,
             tight clusters of old-fashioned blooms on strong canes. 
             The big, lightly fragrant flowers of Lady in Red reach up 
             to 4½" across and are slightly ruffled at the edges. 
             The deep green foliage nicely sets off the vivid red of the 
             blooms, which come continuously during the season.
              More compact and controlled than many climbing roses,
               it not only performs well on arbors, fences and walls, 
               but also can fill gaps in the garden or elsewhere in 
               the landscape. Use it to create a gorgeous, living privacy
                screen or to define a space in your yard.</Text>  
          </View>
       </ScrollView>

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