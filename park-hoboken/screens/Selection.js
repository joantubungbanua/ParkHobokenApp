function SelectionScreen({ navigation }) {
    return (
      <View>
        <View style = {{ marginVertical : 60, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        </View>
      <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to the Selection Screen!</Text>
        <View style={{ flexDirection:"row", marginVertical : 30  }}>
          <View style={{ marginHorizontal: 10 }}>
            <Button
              title="Arriver"
              onPress={() => navigation.navigate('Navigator')}
            />
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Button
              title="Departer"
              onPress={() => navigation.navigate('Navigator')}
            />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row",
                     position: 'absolute',
                     left: 5,
                     top: 5,
                }} >
        <View style={{ marginHorizontal: 10, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Icon.Button name = 'bars' size = {30}
                onPress={() => navigation.navigate('Profile')}> </Icon.Button></View>
        <View style={{ marginHorizontal: 10, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>New Trip</Text></View>
        </View>
      </View>
    );
  }

  export default SelectionScreen;