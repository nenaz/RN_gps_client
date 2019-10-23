import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { routes } from './src/routes';

const MainNavigator = createStackNavigator(routes, {initialRouteName: 'Auth'});
const App = createAppContainer(MainNavigator);
export default App;


// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
// } from 'react-native';
// import { Send } from './src/server-interaction';
// import { getAuthToken } from './src/modules/auth';

// const _onPressButton = () => {
//   console.log('_onPressButton');
//   Send('authUser', {
//     username: 'nenaz',
//     password: '4276',
//   }).then(async (response: any) => {
//     const authToken = await getAuthToken();
//   });
// };

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Button
//         title='Войти'
//         onPress={_onPressButton}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     width: '100%',
//   },
// });
