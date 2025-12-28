import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { JewelryItem } from '../types/jewelry.types';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface Props {
  items: JewelryItem[];
}

export const JewelryTypeCarousel: React.FC<Props> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / SCREEN_WIDTH);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const renderItem = ({ item }: { item: JewelryItem }) => {
    return (
      <View style={styles.slideContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} resizeMode="contain" />
        </View>
      </View>
    );
  };

  const activeItem = items[activeIndex];

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={SCREEN_WIDTH}
        snapToAlignment="center"
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.bottomSection}>
        <Text style={styles.jewelryType}>
          {activeItem?.title}
        </Text>
        <View style={styles.pagination}>
          {items.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === activeIndex && styles.activeDot,
                index > 0 && styles.dotMargin,
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    flexGrow: 1,
  },
  slideContainer: {
    width: SCREEN_WIDTH,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    minHeight: 0,
  },
  image: {
    width: '100%',
    maxWidth: '100%',
    flexShrink: 1,
  },
  bottomSection: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  jewelryType: {
    fontSize: 24,
    fontWeight: '600',
    color: '#D4AF37',
    letterSpacing: 2,
    marginBottom: 20,
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#333333',
  },
  dotMargin: {
    marginLeft: 8,
  },
  activeDot: {
    backgroundColor: '#D4AF37',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

