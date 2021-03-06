import React from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar, Image } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

import Login from './login';
import Register from './register'
import ScrollableTabs from './scrollableTabs';


const App = () => {
  return (
    <View>
      <SafeAreaView>
        <ThemeProvider theme={theme}>
          <StatusBar backgroundColor="#eb6909" barStyle="light-content" />
          <Image 
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
            resizeMode='contain'
          />
          <ScrollableTabs>
            <Login tabLabel='logowanie'/>
            <Register tabLabel='rejestracja'/>        
          </ScrollableTabs>
        </ThemeProvider>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '100%'
  },
  wrapper: {
    padding: 20
  }
});


const theme = {
  Button: {
    titleStyle: {
      color: 'red',
    },
  },
};



export default App;





/*

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { Button, ThemeProvider } from 'react-native-elements';

const App = () => {
  return (
    
    <Fragment>
      <ThemeProvider>
      <Button title="Hey!" />
    </ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Herasdasdmesasdas</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step Oneasdasd</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

*/