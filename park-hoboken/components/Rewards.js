import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const TripRewards = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
            {reward: '$5 Coupon for parking'},
            {reward: '$5 Coupon for Napolis'},
            {reward: 'Free 2 hour parking'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.reward}</Text>}
      />
    </View>
  );
}

export default TripRewards;