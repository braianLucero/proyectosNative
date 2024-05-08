import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Card} from '../../components/ui/Card';
import {SectionList, Text, useWindowDimensions} from 'react-native';
import {SubTitle} from '../../components/ui/SubTitle';
import {colors} from '../../../config/theme/theme';
import {Separator} from '../../components/ui/Separator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const CustomSectionListScreen = () => {
  const {height} = useWindowDimensions();
  const {top} = useSafeAreaInsets();

  return (
    <CustomView margin>
      <Title text="Lista de personajes" safe />

      <Card>
        <SectionList
          sections={houses}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Text style={{marginVertical: 2}}>{item}</Text>
          )}
          renderSectionHeader={({section}) => (
            <SubTitle
              text={section.title}
              backgroundColor={colors.cardBackground}
            />
          )}
          stickySectionHeadersEnabled
          SectionSeparatorComponent={Separator}
          ListHeaderComponent={() => <Title text="Personajes" />}
          ListFooterComponent={() => (
            <Title text={`Secciones: ${houses.length}`} />
          )}
          showsVerticalScrollIndicator={false}
          style={{
            height: height - top - 120,
          }}
        />
      </Card>
    </CustomView>
  );
};
