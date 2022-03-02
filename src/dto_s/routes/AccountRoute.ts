import { StackNavigationProp } from '@react-navigation/stack';
import { ScreensName } from '../screens';

export type AccountRouteParams = {
  Home: { id: number } | undefined;
};

export type AccountRouteProps = StackNavigationProp<
  AccountRouteParams,
  ScreensName.Home
>;
