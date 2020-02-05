import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, SafeAreaView, ImageBackground } from 'react-native';
import { Button, Text, Input, Item, Card } from 'native-base';
import Slideshow from 'react-native-image-slider-show';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import ContentLoader from 'react-native-content-loader'
import {Circle, Rect} from 'react-native-svg'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            interval: null,
            banners: [{
                url: require('../image/banner1.jpg')
            }, {
                url: require('../image/banner2.jpg')
            }, {
                url: require('../image/banner3.jpg')
            }],
            content: [{
                name: 'Latihan Soal',
                imageContent: require('../image/ic1.png')
            }, {
                name: 'Artikel',
                imageContent: require('../image/ic2.png')
            }, {
                name: 'Penerbit',
                imageContent: require('../image/ic3.png')
            }, {
                name: 'Kursus',
                imageContent: require('../image/ic4.png')
            }, {
                name: 'Bimbel',
                imageContent: require('../image/ic5.png')
            }, {
                name: 'Voucher',
                imageContent: require('../image/ic6.png')
            }]
        };
    }

    componentDidMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.banners.length ? 0 : this.state.position + 1
                });
            }, 3000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return ( 
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <ScrollView>
                        <View>
                            <LinearGradient colors = {['#567dbe', '#a9bcdb']}>
                                <View style={{height:220, paddingTop:'5%'}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{flex:6, paddingLeft:'3%'}}>
                                            <Item style={{borderBottomWidth: 0, backgroundColor: '#f2f2f2', borderRadius:5}}>
                                                <Icon name='search' style={{fontSize:24, color: '#808080', paddingLeft:'2%'}} />
                                                <Input placeholder='Cari di Edutore' placeholderTextColor='#808080' />
                                            </Item>
                                        </View>
                                        <View style={{flex:1, alignSelf:'center'}}>
                                            <Icon name='gift' size={40} style={{alignSelf:'center', color:'#fff'}} />
                                        </View>
                                    </View>
                                    <View style={{alignSelf:'center', paddingTop:60}}>
                                        <Text>Banner Image Utama Edutore</Text>
                                    </View>
                                </View>
                            </LinearGradient>
                        </View>
                        <View>
                            <View style={{marginVertical:5, marginLeft:5}}>
                                <FlatList
                                    data={this.state.content}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({item}) =>
                                        <View style={{marginRight:10}}>
                                            <Image style={{width: 75, height: 75}} source={item.imageContent} />
                                            <Text style={{fontSize: 11, textAlign:'center'}} numberOfLines={2}>{item.name}</Text>                                                                               
                                        </View>  
                                    }
                                    keyExtractor={(item, index) => index.toString()
                                }/>
                            </View>
                        </View>
                        <View style={{marginVertical:10, paddingHorizontal:5}}>
                            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                <Text style={{fontFamily: 'ElliotSans-Bold', fontSize:18}}>Promosi</Text>
                                <TouchableOpacity>
                                    <Text style={{fontSize: 12, color: '#1e9cd7', fontFamily: 'ElliotSans-Medium', paddingRight:10}}>Lihat Semua</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                            <Slideshow
                                height={150}
                                arrowSize={0}
                                indicatorSelectedColor="#fec810"
                                dataSource={this.state.banners}
                                position={this.state.position}
                                onPositionChanged={position => this.setState({ position })}
                            />
                            </View>
                        </View>
                        <View style={{marginHorizontal:10, marginVertical:5}}>
                            <LinearGradient colors = {['#a30240', '#102e91']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} style={{borderRadius:10}}>
                                <View style={{height:125}}>
                                    <View style={{flexDirection:'row', justifyContent: 'space-between', paddingTop:'10%'}}>
                                        <View style={{width:'30%', marginLeft:10}}>
                                            <Text style={{color:'#fff', fontFamily: 'ElliotSans-Medium', fontSize:24}}>Partner Edutore</Text>
                                        </View>
                                        <Button bordered style={{borderColor:'#fff', borderRadius:10, marginRight:10}}>
                                            <Text style={{color:'#fff', fontFamily: 'ElliotSans-Medium'}}>Lihat Semua</Text>
                                        </Button>
                                    </View>
                                </View>
                            </LinearGradient>
                        </View>
                        <View style={{alignSelf:'center'}}>
                            <ContentLoader
                                primaryColor="#e8f7ff"
                                secondaryColor="#4dadf7"
                                duration={700}
                                height={140}
                            >
                                <Rect x="0" y="0" rx="5" ry="5" width="70" height="70"/>
                                <Rect x="80" y="17" rx="4" ry="4" width="300" height="13"/>
                                <Rect x="80" y="40" rx="3" ry="3" width="250" height="10"/>
                                <Rect x="0" y="80" rx="3" ry="3" width="350" height="10"/>
                                <Rect x="0" y="100" rx="3" ry="3" width="200" height="10"/>
                                <Rect x="0" y="120" rx="3" ry="3" width="360" height="10"/>
                            </ContentLoader>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        height: 150,
        width: 150,
    },
    searchBar: {
        flex: 3.5,
    },
    inputSearch: {
        width: 170,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderBottomWidth: 0,
    },
    viewWidget: {
        alignSelf: 'center',
        marginTop: 10,
    },
    imageWidget: {
        width: 80,
        height: 80,
        marginHorizontal: 10,
        marginBottom: 5
    },
    txtWidget1: {
        textAlign: 'center',
        marginBottom: 5
    },
    txtWidget: {
        textAlign: 'center',
        marginBottom: 5,
        width: 150,
    },
    iconDrawer: {
        fontSize: 24,
        color: '#fff'
    },
    iconSearch: {
        fontSize: 18,
        margin: 5,
        color: '#fff'
    },
    viewCard: {
        marginLeft: '5%',
        width: '89%'
    },
    cardImage: {
        width: 150,
        height: 210,
    },
    titleCard: {
        color: '#567dbe',
        marginTop: '5%'
    },
    cardReg: {
        backgroundColor: '#567dbe',
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center'
    },
    fav: {
        width:130, 
        height:150,
    }
})

export default Home;