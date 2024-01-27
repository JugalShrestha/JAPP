import React, { useRef, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { COLORS } from '../constant';

const CameraComponent = () => {
  const cameraRef = useRef(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (permission === null) {
    return <View />;
  }

  if (permission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
      <Camera style={{ width: "100%", height: "100%"}} type={Camera.Constants.Type.back} ref={cameraRef}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{
                backgroundColor: "red",
                width:50,
                height:50,
                borderRadius: 100,
                borderWidth: 5,
                borderColor: COLORS.p1,
                position: 'absolute',
                bottom: -20,
                right: "45%",
            }}
            onPress={async () => {
              if (cameraRef.current) {
                const photo = await cameraRef.current.takePictureAsync();
                console.log(photo);
              }
            }}
          >
          </TouchableOpacity>
        </View>
      </Camera>
  );
};

export default CameraComponent;
