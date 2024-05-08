import {Text, TextInput, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Card} from '../../components/ui/Card';
import {useState} from 'react';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <CustomView margin>
      <Title text="Text Inputs" safe />

      <Card>
        <TextInput
          style={globalStyles.input}
          placeholder="Nombre completo"
          autoCapitalize={'words'}
          autoCorrect={false}
          onChangeText={value => setForm({...form, name: value})}
        />
      </Card>

      <View style={{height: 10}} />

      <Card>
        <Text>{JSON.stringify(form, null, 2)}</Text>
      </Card>
    </CustomView>
  );
};
