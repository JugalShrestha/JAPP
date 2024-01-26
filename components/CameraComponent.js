// CameraComponent.js
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { ImagePicker } from 'expo-image-picker';
import { recognizeAndTranslate } from './OCRTranslator';

const CameraComponent = () => {
  const cameraRef = useRef(null);
  const [imageUri, setImageUri] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setImageUri(photo.uri);
      recognizeAndTranslate(photo.uri);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
      recognizeAndTranslate(result.uri);
    }
  };

  return (
    <View>
      <Camera ref={cameraRef} style={{ width: "100%",height: "100%" }} type={Camera.Constants.Type.back}/>
      <TouchableOpacity onPress={takePicture}>
        <Text>Take Picture</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pickImage}>
        <Text>Pick Image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraComponent;
