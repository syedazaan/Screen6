import { Item } from 'native-base';
import React from 'react';
import { StyleSheet,Text,View,  Image,
  ImageBackground,
  FlatList,} from 'react-native';

  import Icon from 'react-native-vector-icons/FontAwesome';
  import Iconi from 'react-native-vector-icons/FontAwesome5';
  import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';
  const myIcon = <Icon name="user" size={40} color="#a5a5a5" />;
  const myIcon1 = <Icon name="bell" size={23} color="#a5a5a5" />;
  const myIcon2 = <Icon name="th-large" size={27} color="#0A2866" />;
  const myIcon4 = <Icon name="plus-circle" size={40} color="#5C41FF" />;
  const myIcon5 = <Iconi name="cloud-sun-rain" size={40} color="#ffffff" />;
  const myIcon6 = <Icon name="power-off" size={18} color="#5E6CFD" />;
  const myIcon7=<Iconss name="sofa" size={45} color="#5E6CFD" />;
  const myIcon8=<Iconss name="bed-empty" size={45} color="#1CBFF2" />;
  const myIcon9=<Iconss name="food" size={45} color="#9851F2" />;
  const myIcon10=<Iconss name="shower" size={45} color="#FDAD0E" />;
  
  const data = [
    {
      icon1:myIcon7 ,
      // backgroundColor1:"backgroundColor:'rgb(134,115,252)'",
      icon2: "a",
      description: "3 Devices",
      color:"red",
      // id:'rgb(134,115,252)',

      title: "Living Room"
    },
    
    {
      icon1: myIcon8,
      icon2: "a",
      description: "6 Devices",
      color:"red",
      title: "Bedroom"
    },

    {
      icon1: myIcon9,
      icon2: "a",
      description: "5 Devices",
      color:"green",
      title: "Dining Room"
    },
    
    {
      icon1: myIcon10,
      color:"red",
      icon2: "a",
      description: "3 Devices",

      title: "Bathroom"
    },
  
  ];

export default class App extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      data:data
    };
  }

  render( ) {
    return (
     
     <View style= {styles.container}>
              <View style={{flex:1}}>
       
       <View style={styles.headerblock}>
                  <View style={styles.headericon}>{myIcon}</View>
                  <View style={styles.headerempty}></View>
                  <View style={styles.headerbellicon}>{myIcon1}</View>
                  <View style={styles.headermenuicon}>{myIcon2}</View>
       </View>
       
       
       <View style={styles.heyheaderblock}>
         
                <View style={styles.leftheyblock}>
                         
                          <View style={styles.lefttopheyblock}>
                                      <Text style={styles.lefttopheyblock1}>Hey Naimur Rahmn</Text>
                           </View>
                          
                          <View style={styles.leftbottomtimeblock}>
                                      <Text style={styles.leftbottomtimeblock1}>12 April 2021</Text>
                          </View>
        
                </View>
        
                      
                 <View style={styles.rightheyblock}>{myIcon4}</View>
       
       </View>
       
       
       <View style={styles.weatherblock}>
           
                  <View style={styles.weatherheaderblock}>
                           
                            <View style={styles.iconweatherheaderblock}>
                                        {myIcon5}
                            </View>
                 
                             <View style={styles.cloudyweatherheaderblock}>
                   
                                      <View style={styles.textcloudyweatherheaderblock}>
                                             
                                             <Text style={styles.textcloudyweatherheaderblock1}>Cloudy</Text>
                                      
                                      </View>
                                               
                                       <View style={styles.siddhulpurweatherheaderblock}>
                                            <Text style={styles.siddhulpurweatherheaderblock1}>Siddhulhur,Godoan</Text>
                                       </View>
                 
                             </View>
                 
                            <View style={styles.Emptyweatherheaderblock}>

                            </View>
                 
                          <View style={styles.N30numweatherheaderblock}>
                                  <Text style={styles.N30numweatherheaderblock1}>30</Text>
                          </View>
          
                  </View>
           
                   
                   <View style={styles.emptytopweatherblock}>

                   </View>
           
                   <View style={styles.weathercontentblock}>
           
                           <View style={styles.N32weathercontentblock}>
                  
                                    <View style={styles.NUM32topweathercontentblock}>
                                             <Text style={styles.NUM32topweathercontentblock1}>32 C</Text>
                                    </View>
                 
                                    <View style={styles.TextSensibleweathercontentblock}>
                                       <Text style={styles.TextSensibleweathercontentblock1}>Sensible</Text>
                                    </View>
             
                            </View>

                            <View style={styles.N65weathercontentblock}>
                                  
                                     <View style={styles.NUM65weathercontentblock}>
                                           <Text style={styles.NUM65weathercontentblock1}>65%</Text>
                                     </View>
               
                                    <View style={styles.TextHumidiyweathercontentblock}>
                                            <Text style={styles.TextHumidiyweathercontentblock1}>Humidity</Text>
                                    </View>
             
                            </View>
             
                            <View style={styles.N4weathercontentblock}>
                
                                        <View style={styles.NUM4weathercontentblock}>
                                                 <Text style={styles.NUM4weathercontentblock1}>4</Text>
                                        </View>
                 
                                        <View style={styles.TextWForceweathercontentblock}>
                                                  <Text style={styles.TextWForceweathercontentblock1}>W Force</Text>
                                         </View>
             
                            </View>
             
             
                             <View style={styles.N1009weathercontentblock}>
                 
                                         <View style={styles.NUM1009weathercontentblock}>
                                              <Text style={styles.NUM1009weathercontentblock1}>1009 hpa</Text>
                                         </View>
                 
                                        <View style={styles.TextPressureweathercontentblock}>
                                                  <Text style={styles.TextPressureweathercontentblock1}>Pressure</Text>
                                        </View>
             
                             </View>
           
                   </View>
          
                   <View style={styles.bottomemptyweatherblock}>

                   </View>
           
       </View>
      
       
       
       <View style={styles.youroomsblock}>
         
                <View style={styles.leftyouroomsblock}>
                       <View style={styles.leftyourblock}>
                         <Text style={styles.leftyourblock1}>Your</Text>
                       </View>
                  
                        <View style={styles.leftRoomsblock}>
                        <Text style={styles.leftRoomsblock1}>Rooms</Text>
                        </View>
                  
                       <View style={styles.leftemptyyouroomsblock}></View>
                </View>
         
                 <View style={styles.rightviewblock}>
                   <Text style={styles.rightviewblock1}>View All</Text>
                 </View>
      
       </View>
       
       </View>
       
       {/* <View style={{flex:1}}></View> */}
       
       <FlatList
             
              // style={{flex:1}}
              contentContainerStyle={{flex:1,}}
              numColumns={2}


              
            
               data={this.state.data}
               renderItem={({item: rowData}) =>  {
               console.log('Image',rowData.imageUrl,rowData);
          
          return( 
         <View style={{flex:1,borderWidth:1,borderRadius:15,padding:25,marginTop:10,}}>
                       
                  <View style={{flexDirection:'row', borderWidth:1,}}>
                      
                      <View style={{borderWidth:1,borderRadius:12,   alignItems:'flex-start',justifyContent:'center',backgroundColor:rowData.color}}>
                       <Item
                             
                        backgroundColor={{backgroundColor:'red'}}

                       />
                       
                        {/* <Text>     keyExtractor={item => item.id}    </Text> */}
                         {/* <Text>     {rowData.backgroundColor1}   </Text> */}
                          <Text style={{fontSize:20, borderWidth:1,}}>{rowData.icon1}</Text>
                       </View>
                     
                     <View style={{borderWidth:1,marginRight:38}}></View>
                     
                      <View style={{borderWidth:1,backgroundColor:'rgb(244,246,249)', borderRadius:100, width:28,height:28,marginTop:13,  alignItems:'center', justifyContent:'center'}}>
                         <Text style={{borderWidth:1,margin:10, width:18,height:18}}>{myIcon6}</Text>
                          
                      </View>
                  </View>

                    <View style={{borderWidth:1,}}>
                         <View style={{borderWidth:1,}}>
                               <Text style={{fontSize:20,fontWeight:'bold', color:'rgb(50,75,127)',}}>
                                      {rowData.title}
                                </Text>
                          </View>
                       
                         <View style={{borderWidth:1,}}>
                                  <Text style={{fontSize:15,fontWeight:'900',color:'rgb(179,189,208)',}}>
                                      {rowData.description}
                                  </Text>
                          </View>
                    
                    </View>
                    
                  {/* <View style={styles.rightsquare1block}>
                      
                           <View style={styles.toprightsquare1block}>
          
                                <View style={styles.icon1toprightsquare1block}></View>
             
                                       <View style={styles.square1block}>
         
                                          <View style={styles.leftsquare1block}>
         
                                                <View style={styles.topleftsquare1block}>

             
                                                    <View style={styles.icon1topleftsquare1block}></View>
            
             
                                                    <View style={styles.powericontopleftsquare1block}></View>
           
                                                 </View>
           
                                                <View style={styles.bottomleftsquare1block}>
                   
                                                        <View style={styles.top1bottomleftsquare1block}></View>
             
                                                        <View style={styles.bottom1bottomleftsquare1block}></View>
          
                                                </View>
          
                                          </View>
       
                                           <View style={styles.powericontoprightsquare1block}></View>
         
                                      </View>
           
                                      <View style={styles.bottomrightsquare1block}>

                                             <View style={styles.top1bottomrightsquare1block}></View>
            
                                             <View style={styles.bottom1bottomrightsquare1block}></View>
           
                                      </View>
         
                           </View>
       
                   </View> */}
       
         </View>

            // <Text>{ rowData.title }</Text>
           )
      }
   }
            
                          

       />
       
       
       {/* 
         <View style={styles.rightsquare1block}>
         <View style={styles.toprightsquare1block}>
         <View style={styles.icon1toprightsquare1block}></View>
             <View style={styles.square1block}>
         <View style={styles.leftsquare1block}>
           <View style={styles.topleftsquare1block}>
             <View style={styles.icon1topleftsquare1block}></View>
             <View style={styles.powericontopleftsquare1block}></View>
           </View>
           
           <View style={styles.bottomleftsquare1block}>
             <View style={styles.top1bottomleftsquare1block}></View>
             <View style={styles.bottom1bottomleftsquare1block}></View>
           </View>
         </View>
         
         <View style={styles.powericontoprightsquare1block}></View>
         </View>
           
           <View style={styles.bottomrightsquare1block}>
              <View style={styles.top1bottomrightsquare1block}></View>
             <View style={styles.bottom1bottomrightsquare1block}></View>
           </View>
         </View>
       </View>
       
       
       <View style={styles.square2block}>
         <View style={styles.leftsquare2block}>
            <View style={styles.topleftsquare2block}>
              <View style={styles.tableicontopleftsquare2block}></View>
              <View style={styles.powericontopleftsquare2block}></View>
            </View>
          
           <View style={styles.bottomleftsquare2block}>
             <View style={styles.line1bottomleftsquare2block}></View>
             <View style={styles.line2bottomleftsquare2block}></View>
           </View>
       </View>
         
         <View style={styles.rightsquare2block}>
         
         <View style={styles.toprightsquare2block}>
              <View style={styles.bathicontoprightsquare2block}></View>
              <View style={styles.powericontoprightsquare2block}></View>
         </View>
          
           <View style={styles.bottomrightsquare2block}>
           <View style={styles.line1bottomrightsquare2block}></View>
             <View style={styles.line2bottomrightsquare2block}></View>
           </View>
         </View>
       </View>
       
       
       <View style={styles.square3block}>
       <View style={styles.leftsquare3block}></View>
          <View style={styles.rightsquare3block}></View>
       </View> */}
         
      
      
      </View>
    );
  }
}

const styles =StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    borderWidth:1,
  },
  headerblock:{
    flex:0.8,
    flexDirection:'row',
    borderWidth:1,
  },
  headericon:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'lightgray',
      borderRadius:10,
      margin:3,
      borderWidth:1,
  },
  headerempty:{
    flex:5,
    borderWidth:1,
  },
  headerbellicon:{
    flex:1,
    alignItems:'flex-start',
    justifyContent:'center',
    marginRight:5,
    borderWidth:1,
  },
  headermenuicon:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
  },


  
  
  heyheaderblock:{
    flex:1.5,
    flexDirection:'row',
    borderWidth:1,
  },

  leftheyblock:{
    flex:8,
    borderWidth:1,
  },
  lefttopheyblock:{
    flex:2.3,
    justifyContent:'flex-end',
    
    // alignItems:'flex-end',
    borderWidth:1,
  },
  lefttopheyblock1:{
    flex:1,
    fontSize:25,
    fontWeight:'bold',
    marginTop:23,
    color: 'rgb(25,54,112)',

  },
  leftbottomtimeblock:{
   flex:0.7,
   borderWidth:1,
   justifyContent:'flex-start',
  },
 
  leftbottomtimeblock1:{
    fontSize:12,
    color:'rgb(176,185,206)',
    fontWeight:'700',
  },
  
  
  rightheyblock:{
    flex:2,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    borderWidth:1,
  },


  weatherblock:{
    flex:3,
    marginTop:17,
    borderRadius:15,
    backgroundColor:'rgb(134,115,252)',
    borderWidth:1,
  },
  
  weatherheaderblock:{
    flex:3,
    flexDirection:'row',
    borderWidth:1,
    marginLeft:10,
    marginRight:10,
    marginTop:10,

  },
  iconweatherheaderblock:{
    flex:1.5,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
  },
  cloudyweatherheaderblock:{
    flex:3,
    marginLeft:5,
    borderWidth:1,
  },
  textcloudyweatherheaderblock1:{
    fontSize:18,
    fontWeight:'800',
    color:'white'
  },


  textcloudyweatherheaderblock:{
    flex:3,
    borderWidth:1,
  },
  siddhulpurweatherheaderblock:{
    flex:1.9,
    borderWidth:1, 
  },
  siddhulpurweatherheaderblock1:{
    color:'lightgray',
    fontWeight:'bold',
    fontSize:10,

  },

  Emptyweatherheaderblock:{
    flex:2,
    borderWidth:1,
  },
  N30numweatherheaderblock:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
  },
  N30numweatherheaderblock1:{
    fontSize:25,
    color:'white',
    fontWeight:'bold',
  },


  emptytopweatherblock:{
    flex:1,
    borderWidth:1,
  },
  
  weathercontentblock:{
    flex:3,
    flexDirection:'row',
   
    borderWidth:1,
  },
  N32weathercontentblock:{
    flex:1,
    borderWidth:1,
  },
  NUM32topweathercontentblock:{
    flex:1.9,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
  },
  NUM32topweathercontentblock1:{
    fontSize:18,
    color:'white',
    fontWeight:'bold',
  },

  TextSensibleweathercontentblock:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
  },
  TextSensibleweathercontentblock1:{
    color:'lightgray',
    fontWeight:'bold',
    fontSize:10,
  },

  N65weathercontentblock:{
    flex:1,
    borderWidth:1,
  },
  NUM65weathercontentblock:{
    flex:1.9,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
  },
  NUM65weathercontentblock1:{
    fontSize:18,
    color:'white',
    fontWeight:'bold',
  },

  TextHumidiyweathercontentblock:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
  },
  TextHumidiyweathercontentblock1:{
    color:'lightgray',
    fontWeight:'bold',
    fontSize:10,
    
  },
  N4weathercontentblock:{
    flex:1,
    borderWidth:1,
  },
  
  

  NUM4weathercontentblock:{
    flex:1.9,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
  },
  NUM4weathercontentblock1:{
    fontSize:18,
    color:'white',
    fontWeight:'bold',
  },

  TextWForceweathercontentblock:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
  },

  TextWForceweathercontentblock1:{
    color:'lightgray',
    fontWeight:'bold',
    fontSize:10,
  },



  N1009weathercontentblock:{
    flex:1.3,
    borderWidth:1,
  },

  NUM1009weathercontentblock:{
    flex:1.9,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
  },
  NUM1009weathercontentblock1:{
    fontSize:18,
    color:'white',
    fontWeight:'bold',
  },


  TextPressureweathercontentblock:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
  },
  TextPressureweathercontentblock1:{
    color:'lightgray',
    fontWeight:'bold',
    fontSize:10,
  },
  bottomemptyweatherblock:{
    flex:1,
    borderWidth:1,
  },
  
  
  youroomsblock:{
    flex:0.7,
    flexDirection:'row', 
    marginTop:15,
    borderWidth:1,
  },
  leftyouroomsblock:{
      flex:5,
      flexDirection:'row',
      borderWidth:1,
  },

  leftyourblock:{
    flex:0.55,
    justifyContent:'center',
    borderWidth:1,
  },
  leftyourblock1:{
    fontSize:18,
    color:'rgb(15,44,105)',
  },
  
  leftRoomsblock:{
    flex:1.2,
    justifyContent:'center',
    borderWidth:1,
  },
  leftRoomsblock1:{
    fontSize:18,
    color:'rgb(15,44,105)',
    fontWeight:'bold',
  },

  leftemptyyouroomsblock:{
    flex:1.8,
    borderWidth:1,
  },

  rightviewblock:{
    flex:1.5,
    justifyContent:'center',
    alignItems:'flex-end',
    borderWidth:1,
  },
  rightviewblock1:{
    fontSize:12,
    color:'rgb(149,131,255)',
    fontWeight:'bold',
  },



  square1block:{
    flex:2.5,
    flexDirection:'row',
    borderWidth:1,
  },
  leftsquare1block:{
   flex:1,
   borderWidth:1,
  },
  topleftsquare1block:{
    flex:1.5,
    flexDirection:'row',
    borderWidth:1,

  },
  icon1topleftsquare1block:{
   flex:2.5,
   borderWidth:1,
  },
  powericontopleftsquare1block:{
    flex:1,
    borderWidth:1,
  },

  bottomleftsquare1block:{
    flex:1,
    borderWidth:1,
  },
  top1bottomleftsquare1block:{
     flex:1,
     borderWidth:1,
  },
  bottom1bottomleftsquare1block:{
    flex:0.6,
    borderWidth:1,
  },

  rightsquare1block:{
    flex:1,
    borderWidth:1,
  },
  toprightsquare1block:{
    flex:1.5,
    flexDirection:'row',
    borderWidth:1,
  },
  icon1toprightsquare1block:{
    flex:2.5,
    borderWidth:1,
  },
  powericontoprightsquare1block:{
    flex:1,
    borderWidth:1,
  },

  bottomrightsquare1block:{
    flex:1,
    borderWidth:1,
  },
  top1bottomrightsquare1block:{
    flex:1,
    borderWidth:1,
  },
  bottom1bottomrightsquare1block:{
    flex:0.6,
    borderWidth:1,
  },



  square2block:{
    flex:2.5,
    borderWidth:1, 
    flexDirection:'row',
  },
  leftsquare2block:{
    flex:1,
    borderWidth:1,
  },
  topleftsquare2block:{
    flex:1.5,
    flexDirection:'row',
    borderWidth:1,
  },
 
  tableicontopleftsquare2block:{
    flex:2.5,
    borderWidth:1,
  },
 
  powericontopleftsquare2block:{
    flex:1,
    borderWidth:1,
  },

  
  bottomleftsquare2block:{
    flex:1,
    borderWidth:1,
  },

  line1bottomleftsquare2block:{
    flex:1,
    borderWidth:1,
  },
line2bottomleftsquare2block:{
  flex:0.6,
  borderWidth:1,
},




  rightsquare2block:{
    flex:1,
    borderWidth:1,
  },
  toprightsquare2block:{
    flex:1.5,
    flexDirection:'row',
    borderWidth:1,
  },
  bathicontoprightsquare2block:{
    flex:2.5,
    borderWidth:1,
  },
  powericontoprightsquare2block:{
    flex:1,
    borderWidth:1,
  },

  bottomrightsquare2block:{
    flex:1,
    borderWidth:1,
  },

  line1bottomrightsquare2block:{
    flex:1,
    borderWidth:1,
  },
  line2bottomrightsquare2block:{
    flex:0.6,
    borderWidth:1,
  },



  square3block:{
    flex:0.5,
    borderWidth:1,
    flexDirection:'row', 
  },
  leftsquare3block:{
    flex:1,
    borderWidth:1,
  },
  rightsquare3block:{
    flex:1,
    borderWidth:1, 
  }
});