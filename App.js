import { StyleSheet, View} from 'react-native';
import Accounts from './datafiles/usersaccount';
import Users from './datafiles/users';
import Students from './datafiles/students';

const App= () => {
  return (
    <View style={styles.container}>
    
          <Accounts/>

          <Users/>
          
          <Students/>   
  
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    flexGrow: 1,
  }
});
