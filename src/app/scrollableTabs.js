import React, { Component, Fragment } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';


const styles = StyleSheet.create({
  button: {
    
  },  
  buttonActive: {
    backgroundColor: 'transparent',
    color: '#2e2e2e',
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#eb6909',
  },
  buttonInactive: {
    backgroundColor: 'transparent',
    color: '#adadad',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#adadad',
  },
  tabsNav: {
    flexDirection: 'row',
    alignContent: 'stretch',
    backgroundColor: '#000'
  }
});


const TabButton = ({changeTab, label, style}) => (
  console.log(style),
  <TouchableOpacity onPress={changeTab}>
    <Text style={style}>{label}</Text>
  </TouchableOpacity>
)


class ScrollableTabs extends Component {
  constructor() {
    super();
    this.state = {
      current: 0
    }
    console.log(this)
  }

  createTabNav({item, index}) {
    console.log(item);
    return (<TabButton 
        key={index} 
        changeTab={this.changeTabBy(index)} 
        label={item.props.tabLabel}
        style={(this.state.current === index) ? styles.buttonActive : styles.buttonInactive}
      />)
  }

  changeTabBy(index) {
    return () => this.setState({ current: index });
  }

  render() {
    return (
      <Fragment>
        <FlatList 
          style={styles.tabsNav}
          data={this.props.children}
          renderItem={this.createTabNav.bind(this)}
          numColumns={this.props.children.length}
        />
        <View>
          {this.props.children[this.state.current]}
        </View> 
      </Fragment>
    )
  }
}


export default ScrollableTabs;