import React, {useState} from "react";
import {View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import postStyles from '../../styles/screens/Post';
import communityStyles from "../../styles/screens/Community";
import backButtonStyles from "../../styles/community/BackButton";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import titleStyles from "../../styles/home/TitleText";
import searchButtonStyles from "../../styles/community/SearchButton";
import { TextInput } from "react-native-gesture-handler";
import articleTextStyles from "../../styles/article/ArticleText";
import articleStyles from "../../styles/screens/Article";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

type PostScreenProp = StackNavigationProp <RootStackParamList, 'Post'>;

function PostScreen() {
    const navigation = useNavigation<PostScreenProp>();
    const [anonymousChecked, setAnonymousChecked] = useState('first');
    const [categoryChecked, setCategoryChecked] = useState('first');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [hashtag, setHashtag] = useState('');
    const [isChecked, setisChecked] = useState(false);

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1}}
            extraScrollHeight={20}
        >
            <View style={postStyles.container}>
                <View style = {communityStyles.titleContainer}>
                    <TouchableOpacity
                        style = {backButtonStyles.communityBackButton}
                        onPress = {() => navigation.navigate('Community')}
                    >
                        <FontAwesome 
                            name = 'chevron-left' 
                            size = {Platform.OS == 'ios' ? 25 : 20} 
                            color = 'gray'
                        />
                    </TouchableOpacity>
                    <Text style = {titleStyles.postTitletext}>
                        ?????????
                    </Text>
                    <TouchableOpacity
                        style = {postStyles.postButtonStyle}
                        onPress = {() => navigation.navigate('Community')}
                    >
                        <Text style = {titleStyles.postText}>
                            ??????
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput
                        style = {postStyles.title}
                        placeholder="??????"
                        onChangeText={(text) => {setTitle(text)}}
                    />
                    <View style = {postStyles.verticleLine}/>
                        <View style = {postStyles.textbox}>
                            <TextInput
                                style = {postStyles.inputStyle}
                                placeholder = "?????????????????? ?????????????????????????????? ???????????????. &#13;&#10;????????? ???????????? ???????????????????????????."
                                placeholderTextColor={'#D9D9D9'}
                                multiline = {true} // ????????? ????????? ????????????
                                onChangeText={(text) => {setText(text)}}
                                // onSubmitEditing={onPress}
                                returnKeyType="done"
                            />
                        </View>
                </View>
                <KeyboardAvoidingView 
                    style = {postStyles.bottomContainer}
                    behavior="position" enabled
                >
                    <View style = {postStyles.postVerticleLine}/>
                    <View
                        style = {articleStyles.comment2Container}
                    >
                        <TouchableOpacity
                            style = {postStyles.postButton}
                        >
                            <FontAwesome 
                                name = 'image'
                                size = {30} 
                                color = 'gray'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style = {postStyles.postButton}
                        >
                            <FontAwesome 
                                name = 'link'
                                size = {30} 
                                color = 'gray'
                            />
                        </TouchableOpacity>
                        <Text style = {titleStyles.anonymousText}>
                            ??????
                        </Text>
                        <BouncyCheckbox
                            style = {postStyles.anonymousButton}
                            size={25}
                            fillColor="green"
                            unfillColor="white"
                            onPress={() => {isChecked}}
                        />
                    </View>
                    <View style = {postStyles.postVerticleLine}/>
                    <View style = {articleStyles.commentContainer}>
                        <TextInput 
                        style = {postStyles.hashtag}
                            placeholder="??????????????? ???????????????"
                            onChangeText={(text) => {setHashtag(text)}}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        </KeyboardAwareScrollView>
    );
}
export default PostScreen;