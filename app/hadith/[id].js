import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getBookContent } from '../src/apiService';

export default function DetailsScreen() {
    // interface Book {
    //     name: string;
    //     id: string;
    //     requested: number;
    //     hadiths: { number: number; arab: string; id: string }[];
    // }

    const [book, setBook] = useState([]);
    const [error, setError] = useState(null);
    const { id } = useLocalSearchParams();

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await getBookContent(id);
                setBook(data);
            } catch (error) {
                // setError(error);
                console.log('Error fetching data:', error);
            }
        };

        fetch();
    }, [id]);

    const renderBookList = ({ item }) => {
        return (
            <View style={styles.bookBox}>
                <Text>{item.id}</Text>
                <Text>{item.requested}</Text>
                {/* <Text>{item.hadiths}</Text> */}
            </View>
        );
    };
    if (error) {
        return <Text>Error: {error}</Text>;
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={book}
                keyExtractor={(item) => item.id}
                renderItem={renderBookList}
                ListEmptyComponent={<Text>No data available</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    bookBox: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
});

