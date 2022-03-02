import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreensName } from '.';
import { AccountRouteParams } from '../routes/AccountRoute';

export type HomeProps = NativeStackScreenProps<
  AccountRouteParams,
  ScreensName.Home
>;
