import { NavigationContainer } from '@react-navigation/native';
import UserNavigation from '../user/navigation/UserNavigation';
import NewNavigation from '../news/navigation/NewNavigation';
import React, { useContext } from 'react';
import UserContext from '../user/utilities/UserContext';

const AppNavigation = () => {
    const { isLoggedIn } = useContext(UserContext);
    return (
        <NavigationContainer>
            {!isLoggedIn ? < UserNavigation/> 
                : < NewNavigation  />
            }
        </NavigationContainer>
    )
}

export default AppNavigation