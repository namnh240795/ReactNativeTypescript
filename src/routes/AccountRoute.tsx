import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountRouteParams } from '@typhoon/dto_s/routes/AccountRoute';
import Home from '@typhoon/screens/Home';
import { ScreensName } from '@typhoon/dto_s/screens';

const AccountStack = createStackNavigator<AccountRouteParams>();

const AccountRoute = () => {
  return (
    <AccountStack.Navigator initialRouteName={ScreensName.Home}>
      <AccountStack.Screen
        name={ScreensName.Home}
        component={Home}
        initialParams={{ id: 1234 }}
      />
    </AccountStack.Navigator>
  );
};

export default AccountRoute;
