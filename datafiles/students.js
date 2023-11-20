import React from "react";
import { user } from "./userinfo";
import { FlatList, StyleSheet, Text,View } from "react-native";

const Students = () => {
    const studentList = user.filter((user) => user.userType == "Student");
    return(
        <View style={styles.container}> 
            <Text style={styles.title}>Lists of Students</Text>           
                <FlatList
                    renderItem={({item}) => (
                        <table>
                            <tr  key={item.id} style={styles.Header}>
                                <th style={{width: 10}}>ID</th>
                                <th style={{width: 90}}>NAME</th>
                                <th style={{width: 120}}>COURSE</th>
                            </tr>

                            <tr style={styles.studentdata}>
                                <td style={{textAlign: 'center'}}>{item.id}</td>
                                <td style={{textAlign: 'center'}}>{item.name.firstname} {item.name.lastname}</td>
                                <td style={{textAlign: 'center'}}>{item.course}</td>
                            </tr>
                            </table>
                        )}
                        data={studentList} 
                    keyExtractor={(item) => item.id}
                /> 
                
        </View>
    );
}

export default Students;

const styles = StyleSheet.create({
    container: {
        padding: 25,
    },
    title: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 18,
        textTransform:'uppercase'
    },
    Header: {
        backgroundColor: 'green',
        fontFamily: 'Arial',
        fontSize: 15,
        color: 'white',
        
    },
    studentdata: {
        backgroundColor: 'lightgreen',
        fontFamily: 'arial',
        fontSize: 15,
        textTransform:'uppercase'
        
    },
})