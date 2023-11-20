import React from "react";
import { user } from "./userinfo";
import { StyleSheet, Text, View} from "react-native";

const Accounts = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Lists of Accounts</Text>         
            <View>
                <table>
                    <tr style={styles.Header}>
                        <th>ID</th>
                        <th>USERNAME</th>
                        <th>PASSWORD</th>
                        <th>USERTYPE</th>
                    </tr>
                  
                    {user.map((user1) => (
                        <tr style={styles.accountdata}>
                            <th>{user1.id}</th>
                            <th>{user1.username}</th>
                            <th>{user1.password}</th>
                            <th>{user1.userType}</th>
                        </tr>
                    ))}
                </table>
            
            </View>
        </View>
    );
}

export default Accounts;

const styles = StyleSheet.create({
    container: {
        padding: 25,
    },
    title: {
        fontFamily: 'Century Gothic',
        fontWeight: 'bold',
        fontSize: 18,
        textTransform:'uppercase',
    },    
        details: {
            fontFamily: 'Century Gothic',
            fontWeight: '300',
            fontSize: 20,
            marginTop: 30,
            marginLeft: 220,
        },
    Header: {
        backgroundColor: 'green',
        fontFamily: 'arial',
        fontSize: 15,
        color: 'white',
    },
    accountdata: {
        backgroundColor: 'lightgreen',
        fontFamily: 'arial',
        fontSize: 15,
    },
})