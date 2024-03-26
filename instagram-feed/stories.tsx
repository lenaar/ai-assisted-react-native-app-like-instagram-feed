import React from "react";
import { FlatList } from "react-native";
import Story from "./story";

export default function Stories({stories, profile}) {


  return (
    <FlatList
      data={stories}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Story name = {item.name} avatar={item.avatar} isSeen={item.isSeen}/>
      )}
    />
  );

}