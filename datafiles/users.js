import React from "react";
import { user } from "./userinfo";
import { ScrollView, StyleSheet, Text, View} from "react-native";

const Users = () => {
    return(
        <ScrollView vertical={true}>
          <View style={styles.container}>
            <Text style={styles.title}>Lists of Users</Text>         
              <View>
                <table>
                    <tr style={styles.Header}>
                        <th>ID</th>
                        <th>FIRSTNAME</th>
                        <th>LASTNAME</th>
                        <th>COURSE</th>
                        <th>YEAR & SECTION</th>
                    </tr>
                  
                    {user.map((users) => (
                        <tr style={styles.userdata}>
                            <th>{users.id}</th>
                            <th>{users.name.firstname}</th>
                            <th>{users.name.lastname}</th>
                            <th>{users.course}</th>
                            <th>{users.year}{users.section}</th>
                        </tr>
                    ))}
                </table>
             </View>
          </View>
        </ScrollView>
    );
}

export default Users;

const styles = StyleSheet.create({
    container: {
        padding: 25,
    },
    title: {
        fontFamily: 'Century Gothic',
        fontWeight: 'bold',
        fontSize: 20,
        textTransform:'uppercase'
    },
    details: {
        fontFamily: 'Century Gothic',
        fontWeight: '300',
        fontSize: 20,
        marginTop: 30,
        marginLeft: 50,
    },
    Header: {
        backgroundColor: 'green',
        fontFamily: 'arial',
        fontSize: 15,
        color: 'white',
    },
    userdata: {
        backgroundColor: 'lightgreen',
        fontFamily: 'arial',
        fontSize: 15,
        textTransform:'uppercase',
    },
})