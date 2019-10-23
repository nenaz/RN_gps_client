import * as React from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';
import { getAuthToken } from '../../modules/auth';
import { Send } from '../../server-interaction';

interface TAuthPage {
  navigation: any,
}

export class AuthPage extends React.PureComponent<TAuthPage> {
  onPressButton = () => {
    const {navigate} = this.props.navigation;

    console.log('onPressButton');
    Send('authUser', {
      username: 'nenaz',
      password: '4276',
    }).then(async (response: any) => {
      const authToken = await getAuthToken();
      navigate('Maps')
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title='Войти'
          onPress={this.onPressButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});