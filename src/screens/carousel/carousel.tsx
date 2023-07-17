import React, {useState} from 'react';
import Tutorial1 from '../tutorial1';
import Tutorial2 from '../tutorial2';
import Tutorial3 from '../tutorial3';
import {Dimensions, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
function TutorialCarousel(): JSX.Element {
  const [showTutorial, setShowTutorial] = useState(true);

  const onTutorialEnd = (index: number) => {
    if (index === 2) {
      setShowTutorial(false);
    }
  };

  const renderTutorialItem = ({item}: {item: JSX.Element}) => {
    return <View>{item}</View>;
  };

  return (
    <Carousel
      data={[<Tutorial1 />, <Tutorial2 />, <Tutorial3 />]}
      renderItem={renderTutorialItem}
      sliderWidth={Dimensions.get('window').width}
      itemWidth={Dimensions.get('window').width}
      onSnapToItem={onTutorialEnd}
    />
  );
}

export default TutorialCarousel;
