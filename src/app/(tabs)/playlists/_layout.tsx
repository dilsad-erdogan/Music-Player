import { View } from "react-native";
import { defaultStyles } from "../../../styles";
import { Stack } from "expo-router";

const PlaylistsScreenLayout = () => {
    <View style={defaultStyles.container}>
        <Stack>
            <Stack.Screen name="index" options={{ headerTitle: 'Playlists', }}/>
        </Stack>
    </View>
}

export default PlaylistsScreenLayout;