import React from "react";
import {Text, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import { GOOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";

function NavigateCard({ navigation }){
    const dispatch = useDispatch();

    return(
        <View style={tw `bg-white flex-1`}>
            <Text style={tw `text-center py-5 text-xl`}>Please Input Destination</Text>
            <View style={tw `border-t border-gray-200 flex-shrink`}>
            <View>
              <GooglePlacesAutocomplete
                    placeholder="Where To?"
                    styles={{
                      container: {
                        flex: 0,
                      },
                      textInput: {
                        fontSize: 18,
                      },
                    }}
                    onPress={(data, details = null) => {
                      dispatch(setDestination({
                        location: details.geometry.location,
                        description: data.description
                      }))
                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    minLength={2}
                    query={{
                      key: GOOGLE_MAPS_APIKEY,
                      language: "en",
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                  />
                  {/* <NavOptions /> */}
            </View>
            <View style={styles.buttonView}>
              <Button
                color="#A74F49"
                title="Go"
                onPress={() => navigation.navigate('Map')}
              />
            </View>
            </View>
        </View>
    )
}

export default NavigateCard;