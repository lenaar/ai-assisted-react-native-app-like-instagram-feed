import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import Article from './article';
import Stories from './stories';
import data from './data';

const INSTAGRAM_LOGO = "https://upload.wikimedia.org/wikipedia/commons/2/2a/Instagram_logo.svg";

export default function Feed() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraVisible, setCameraVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      console.log('status', status);
      setHasPermission(status === 'granted');
    })();
  }, [])

  const handleCameraPress = () => {
    hasPermission ? setCameraVisible(!cameraVisible) : alert('Camera permission required');
  }

  const renderStory = ({ item, index }) => {
    if (index === 0) return (
      <>
        <View>
          <Stories stories={data.stories} profile={data.profile} />
        </View>
      </>
    )
    return
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <Article item={item} />
    </View>
  );

  if (cameraVisible) {
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={'back'}>
          {/* Camera UI elements */}
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={() => setCameraVisible(false)}>
            <Text style={{ fontSize: 18, color: 'white' }}>Close Camera</Text>
          </TouchableOpacity>
        </Camera>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark' />
      <View style={styles.header}>
        <Image source={{ uri: INSTAGRAM_LOGO }} style={{ width: 100, height: 50 }} />
        <TouchableOpacity onPress={handleCameraPress}>
          <Feather name='camera' size={24} color='black' />
        </TouchableOpacity>
      
        <Text style={styles.header}>Instagram Feed Application</Text>
        <FlatList
          data={data.stories}
          renderItem={renderStory}
          keyExtractor={item => item.id.toString()}
          style={styles.list}
        />
        <FlatList
          data={data.articles}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          style={styles.list}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc0cb',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
  list: {
    width: '100%', // Makes FlatList take the full width
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%', // Adjust as needed
    height: 200, // Adjust as needed
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailText: {
    fontSize: 14,
  },
  cameraButton: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    alignItems: 'center',
  },
});