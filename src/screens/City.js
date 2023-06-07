import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const City = () => {
  const { container } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city.jpg")}
        style={imageLayout}
      >
        <Text style={[styles.cityName, styles.cityText]}>London</Text>
        <Text style={[styles.countryName, styles.cityText]}>Uk</Text>
        <View style={styles.poplationWrapper}>
            <Feather name={'user'} size={50} color={'red'}/>
            <Text style={styles.populationText}>8000</Text>
        </View>
        <View style={styles.rizeSetWrapper}>
            <Feather name={'sunrise'} size={50} color={'white'}/>
            <Text style={styles.rizeSetText}>10:46:58am</Text>
            <Feather name={'sunset'} size={50} color={'white'}/>
            <Text style={styles.rizeSetText}>17:28:15pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  poplationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
    fontWeight: 'bold'
  },
  rizeSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30
  },
  rizeSetText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
});
export default City;
