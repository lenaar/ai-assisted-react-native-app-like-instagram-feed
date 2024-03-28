
import React, {useState} from 'react';
import { Image, Text, View, TouchableOpacity, Alert } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { StyleSheet } from 'react-native';


export default function Article({item}) {

    const [likes, setLikes] = useState(item.likes)
    const [isLiked, setIsLiked] = useState(false)
    
    const [commentCount, setCommentCount] = useState(item.commentCount)
    const [comment, setComment] = useState('')

    function onLike() {
        setIsLiked(!isLiked)
        setLikes(isLiked ? likes - 1 : likes + 1)
    }

    function onCommentCount() {
        setCommentCount(commentCount + 1)
    }

    function writeComment() {
        Alert.prompt('Write a comment', null, text => {
                setComment(text)
                onCommentCount()
            }
        )
    }

    return (
        <>
            <View style={styles.article}>
                {/* Header with User Info */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.user}>
                        <Image style={styles.avatar} source={item.avatar} />
                        <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name='more-horizontal' size={24} color='green' />
                    </TouchableOpacity>
                </View>

            </View>
            <Image style={styles.image} source={item.image} />
            <View style={styles.article}>
                {/* Action Buttons and Comments */}
                <View style={styles.action}>
                    <View style={styles.actionLeft}>
                        <TouchableOpacity onPress={onLike}>
                            <Feather name='heart' size={24} color={isLiked? 'red' : 'green'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={writeComment}>
                            <Feather name='message-circle' size={24} color='green' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name='send' size={24} color='green' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.actionRight}>
                        <TouchableOpacity>
                            <Feather name='bookmark' size={24} color='green' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.info}>
                    <Text style={styles.likes}>Likes: {likes}</Text>
                    <Text style={styles.commentCount}>View all comments ({commentCount})</Text>
                    <Text style={styles.commentCount}>{item.name}: {comment}</Text>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    article: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20, // Space between articles
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 10, // Space below the header
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    name: {
        fontWeight: 'bold',
        color: '#000',
    },
    image: {
        width: '100%',
        height: 300,
        // resizeMode: 'cover',
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10, // Padding on the sides
        marginTop: 10, // Space above the action buttons
    },
    actionLeft: {
        flexDirection: 'row',
    },
    actionRight: {},
    info: {
        alignSelf: 'flex-start',
        width: '100%',
        paddingHorizontal: 10,
    },
    likes: {
        fontWeight: 'bold',
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    commentCount: {
        color: '#8e8e8e',
        marginTop: 5,
        alignSelf: 'flex-start',
    },
});

