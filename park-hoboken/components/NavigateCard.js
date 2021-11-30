import React from "react";
import {Text, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import { GOOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const NavigateCard = () => {
    return(
        <View style={tw `bg-white flex-1`}>
            <Text style={tw `text-center py-5 text-xl`}>Hello</Text>
            <View style={tw `border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where to?"
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                    />
                </View>
            </View>
        </View>
    )
}

export default NavigateCard;