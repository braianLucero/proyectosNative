import {Text, View} from 'react-native';
import {Button} from '../../../../../07-componentApp/src/presentation/components/ui/Button';
export const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>

      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('pressed')}
      />
    </View>
  );
};
