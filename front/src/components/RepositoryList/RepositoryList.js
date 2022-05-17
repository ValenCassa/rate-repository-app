import { FlatList, View, StyleSheet } from "react-native";
import Item from "./RepositoryItem";
import { MotiView } from "moti";
import Text from "../Miscellaneous/Text";
import FilterPicker from "../FilterPicker/FilterPicker";
import React from "react";
import theme from "../../theme/theme";
import useRepoContext from "../../../hooks/useRepoContext";
import TextFilter from "../TextFilter/TextFilter";

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    input: {
      backgroundColor: theme.background.box,
      borderRadius: 3,
      padding: 8,
      marginBottom: 10,
      color: 'white'
  }
  });

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, fetchMore }) => {

  const onEndReached = () => {
    fetchMore()
  }

  return (
  
    <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        ListFooterComponent={<View style={{ height: 450 }}/>}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Item repository={item}/>}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.2}

      />
      </MotiView>
    
  );
  
}

const RepositoryList = () => {
  const { repositories, loading, fetchMore } = useRepoContext()


  return (
    <>
    <FilterPicker />
    <TextFilter />
    {loading
    ? <Text>Loading...</Text>
    : <RepositoryListContainer repositories={repositories} fetchMore={fetchMore} />
    }
      </>
  )


};
  
  export default RepositoryList;