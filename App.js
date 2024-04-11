const Stack = createNativeStackNavigator();
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Companies from './android/app/src/screens/Companies';
//import Frame1 from './components/Frame1';
import RegisterForCompany from './android/app/src/screens/RegisterForCompany';
import Dashboard from './android/app/src/screens/Dashboard';
import CreateProfile from './android/app/src/screens/CreateProfile';
import AddProject from './android/app/src/screens/AddProject';
//import Frame6 from './components/Frame6';
import AddTeamMember from './android/app/src/screens/AddTeamMember';

import EditProjects from './android/app/src/screens/EditProjects';
import Login from './android/app/src/screens/login';
import Dashboard2 from './android/app/src/screens/Dashboard2';
import RegisterForStudents from './android/app/src/screens/RegisterForStudents';
import WelcomePage from './android/app/src/screens/WelcomePage';
import Modal from './android/app/src/screens/Modal';
import ProjectTracking from './android/app/src/screens/ProjectTracking';
import CreateTeam from './android/app/src/screens/CreateTeam';
import DashboardSideBar from './android/app/src/screens/DashboardSideBar';
import ProjectEvaluationCompany from './android/app/src/screens/ProjectEvaluationCompany';
import ProjectEvaluationStudent from './android/app/src/screens/ProjectEvaluationStudent';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="WelcomePage"
              component={WelcomePage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Companies"
              component={Companies}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RegisterForCompany"
              component={RegisterForCompany}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CreateProfile"
              component={CreateProfile}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CreateTeam"
              component={CreateTeam}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DashboardSideBar"
              component={DashboardSideBar}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="EditProjects"
              component={EditProjects}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Dashboard2"
              component={Dashboard2}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RegisterForStudents"
              component={RegisterForStudents}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Modal"
              component={Modal}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AddProject"
              component={AddProject}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AddTeamMember"
              component={AddTeamMember}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProjectTracking"
              component={ProjectTracking}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProjectEvaluationCompany"
              component={ProjectEvaluationCompany}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProjectEvaluationStudent"
              component={ProjectEvaluationStudent}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
