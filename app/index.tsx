import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import icon from '../assets/icons/car-park.png';
import headImage from '@/assets/images/head.png';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View className="relative">
                    <Image source={headImage} style={{ width: '100%', height: 200 }} />
                    <Text className="absolute text-white font-rubik-bold text-3xl top-[60px] w-full text-center">
                        Hello Dinajpur
                    </Text>
                    <Text className="absolute text-white font-rubik top-[100px] w-full text-center px-10 leading-6">
                        Find your desired information and contact information using this app.
                        {'\n'} Thanks for using this app
                    </Text>
                </View>
                <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                    {[...Array(6)].map((_, rowIndex) => (
                        <View key={rowIndex} className="flex flex-row gap-5 mx-5 mb-5">
                            {[...Array(2)].map((_, colIndex) => (
                                <View
                                    key={colIndex}
                                    className="grow flex items-center bg-primary-200 rounded-lg p-5"
                                >
                                    <Link href="/govt">
                                        <View className="flex items-center">
                                            <Image source={icon} />
                                            <Text>Ambulance</Text>
                                        </View>
                                    </Link>
                                </View>
                            ))}
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Index;
