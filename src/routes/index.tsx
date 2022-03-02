import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AccountRoute from './AccountRoute';

export default function Routes() {
  return (
    <NavigationContainer>
      <AccountRoute />
    </NavigationContainer>
  );
}
