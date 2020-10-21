import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile154239Navigator from '../features/UserProfile154239/navigator';
import Tutorial154238Navigator from '../features/Tutorial154238/navigator';
import NotificationList154210Navigator from '../features/NotificationList154210/navigator';
import Settings154209Navigator from '../features/Settings154209/navigator';
import Settings154201Navigator from '../features/Settings154201/navigator';
import UserProfile154199Navigator from '../features/UserProfile154199/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile154239: { screen: UserProfile154239Navigator },
Tutorial154238: { screen: Tutorial154238Navigator },
NotificationList154210: { screen: NotificationList154210Navigator },
Settings154209: { screen: Settings154209Navigator },
Settings154201: { screen: Settings154201Navigator },
UserProfile154199: { screen: UserProfile154199Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
