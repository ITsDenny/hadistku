import { View, Text, FlatList,StyleSheet,Pressable } from "react-native";
import { getBooks } from "../src/apiService";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledText = styled(Text);

export default function Tab() {
  interface Book {
    name: string;
    id: string;
    available: number;
  }

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getBooks();
      setBooks(booksData);
    };

    fetchBooks();
  }, []);


  const renderBookItem = ({ item }: { item: Book }) => (
    <View style={styles.bookBox}>
      <StyledText style={styles.bookTitle}>{item.name}</StyledText>
      <StyledText style={styles.bookTotal}>Total: {item.available}</StyledText>
      <Link href={`../hadith/${item.id}`}>
          <Text className="font-medium">Click to read hadith {item.id}</Text>
      </Link>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={books} 
        keyExtractor={(item) => item.id}
        renderItem={renderBookItem}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  contentContainer: {
    padding: 0,
  },
  bookBox: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bookTotal: {
    fontSize: 14,
    color: "#aaa",
  },
});
