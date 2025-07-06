import { offers } from "@/constants";
import { Fragment } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import cn from 'clsx'
const Index = () => {
  return (
    <SafeAreaView>
      <FlatList 
        data={offers}
        renderItem={({ item, index}) => {
          const isEven: boolean = index % 2 === 0;
          return (
            <ScrollView>
              <Pressable className={cn("offer-card", isEven ? 'flex-row-reverse' : 'flex-row')} style={{ backgroundColor: item.color }}>
               {({ pressed }) => (
                 <Fragment>
                  <View className={"h-full w-1/2"}>
                    <Image 
                      source={item.image} 
                      className={"size-full"} 
                      resizeMode={"contain"} 
                      />
                  </View>
                  <View className={"offer-card_info"}>
                    <Text >{item.title}</Text>
                  </View>
                 </Fragment>
               )}
              </Pressable>
            </ScrollView>
          )
        }}
      />
    </SafeAreaView>
  );
}
export default Index;