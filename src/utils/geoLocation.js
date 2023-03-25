import {Platform, PermissionsAndroid, Linking, Alert} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const requestPermissionIOS = async () => {
  const status = await Geolocation.requestAuthorization('whenInUse');
  if (status === 'granted') {
    return true;
  } else if (status === 'denied' || status === 'disabled') {
    Alert.alert(
      '',
      'Turn on Location Services to allow PropMarket to determine your location.',
      [
        {
          text: 'Go to Settings',
          onPress: async () => {
            await Linking.openSettings().catch(() => {
              Alert.alert('Unable to open settings');
            });
          },
        },
        {
          text: "Don't Use Location",
          onPress: () => {},
        },
      ],
    );
    return false;
  }
};

const requestPermissionAndroid = async () => {
  if (Platform.OS === 'android' && Platform.Version < 23) {
    return true;
  }
  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
  if (hasPermission) {
    return true;
  }
  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
  if (status === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  } else if (
    status === PermissionsAndroid.RESULTS.DENIED ||
    status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
  ) {
    return false;
  }
};

const requestLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    const hasPermission = await requestPermissionIOS();
    return hasPermission;
  } else {
    const hasPermission = await requestPermissionAndroid();
    return hasPermission;
  }
};

export const GetLocation = async callback => {
  const hasPermission = await requestLocationPermission();
  if (!hasPermission) {
    return callback({error: 'Permission denied'});
  }
  const watchId = Geolocation.watchPosition(
    async position => {
      Geolocation.clearWatch(watchId);
      return callback({
        location: {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          latitudeDelta: 0.0036132212457324897,
          longitudeDelta: 0.004023313522338867,
        },
      });
    },
    async error => {
      Geolocation.clearWatch(watchId);
      return callback({error: error.toString()});
    },
    {
      accuracy: {
        android: 'high',
        ios: 'best',
      },
      enableHighAccuracy: true,
      distanceFilter: 0,
      interval: 5000,
      fastestInterval: 2000,
      forceRequestLocation: true,
      forceLocationManager: false,
      showLocationDialog: true,
      useSignificantChanges: false,
    },
  );
};
