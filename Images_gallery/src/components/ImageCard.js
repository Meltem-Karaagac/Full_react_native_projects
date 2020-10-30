import React, { useState } from "react";
import {
    View,
    Modal,
    StyleSheet,
    TouchableHighlight,
    Dimensions,
    TouchableWithoutFeedback,
    Image,
    Text,

} from "react-native";

const ImageCard = ({ imageItem }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>

            <Modal
                animationType={imageItem.id % 2 ? "fade" : "slide"}
                transparent={true}
                visible={modalVisible}
            >

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <TouchableWithoutFeedback
                            style={{}}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Image
                                id={imageItem.id}
                                source={{ uri: imageItem.imgURL }}
                                style={styles.imageModal}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </Modal>
            <TouchableHighlight
                onPress={() => setModalVisible(!modalVisible)}>
                <Image
                    source={{ uri: imageItem.imgURL }}
                    style={styles.image}
                />
            </TouchableHighlight>
        </View>
    )
}

export default ImageCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        resizeMode: "cover",
        height: Dimensions.get('window').height / 3.5,
        // width: Dimensions.get('window').width / 2,
        // flex: 1,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,

    },
    imageModal: {
        height: Dimensions.get("window").height / 1,
        width: Dimensions.get("window").width / 1.2,
        resizeMode: "contain",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        backgroundColor: "#111111DD",
        margin: 20,
        padding: 40,
    },
})

