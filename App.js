import React from 'react';
import { Platform, ScrollView, TabBarIOS, Alert, StyleSheet, Text, View, StatusBarIOS} from 'react-native';


/*
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/



export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab:'图书'
        };
    }

    render() {
        if(Platform.OS ==='ios'){
            return(
                <TabBarIOS tintColor='white' barTintColor='darkslateblue'>
                    <TabBarIOS.Item
                          title='电影'
                          selected={this.state.selectedTab === '电影'}
                          icon={require('./assets/movie.png')}
                          onPress={()=>{
                              this.setState({selectedTab:'电影'});
                          }}>
                        <View>
                            <Text>电影</Text>
                        </View>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                      title='图书'
                      selected={this.state.selectedTab === '图书'}
                      icon={require('./assets/book.png')}
                      onPress={()=>{
                          this.setState({selectedTab:'图书'});
                      }}>

                      <View>
                          <Text>图书</Text>
                      </View>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                      title='音乐'
                      selected={this.state.selectedTab === '音乐'}
                      icon={require('./assets/music.png')}
                      onPress={()=>{
                          this.setState({selectedTab:'音乐'});
                      }}>

                      <View>
                          <Text>音乐</Text>
                      </View>
                    </TabBarIOS.Item>


                </TabBarIOS>
                  );
        }else{
            return(
                <View style={{alignItems: 'center',
                justifyContent: 'center'}}>
        <Text>
            'Hello Android'
            </Text>
            </View>
        );
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text:{
        fontSize:16,
        marginTop: 20
    },

    buttonContainer:{
        margin:20
    },

    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },

    alternativeButtonContainer:{
        margin:20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

});