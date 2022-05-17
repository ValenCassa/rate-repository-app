import { StyleSheet, TextInput } from "react-native";
import useRepoContext from "../../../hooks/useRepoContext";
import theme from "../../theme/theme";

const styles = StyleSheet.create({
    input: {
      backgroundColor: theme.background.box,
      borderRadius: 3,
      padding: 8,
      marginBottom: 10,
      color: 'white'
  }
});

const TextFilter = () => {
    const { filterText, filterByText } = useRepoContext()
    return (
        <TextInput value={filterText} onChangeText={(text) => filterByText(text)} style={styles.input} placeholder='Search...' placeholderTextColor={'lightgrey'} />
    )
}

export default TextFilter