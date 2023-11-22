import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const HomeScreen = () => {

  const [selectCate, setSelectCate] = useState('Food');

  return (
    <View style={styles.mainContainer}>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Image source={require('../assets/HomeLogo.png')} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../assets/location.png')} />
            <Text style={styles.headerText1}>Bangalore</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.coins}>
            <Image source={require('../assets/coin.png')} />
            <Text style={styles.headerText2}>25</Text>
          </View>

          <TouchableOpacity>
            <Image source={require('../assets/QRcode.png')} style={{ marginLeft: 25 }} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../assets/notification.png')} style={{ marginLeft: 25, height: 30, width: 30 }} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Container */}
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder={'Search Name'}
          />

          <View style={styles.searchIcon}>
            <Image source={require('../assets/search.png')} />
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categories}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => setSelectCate('Food')} style={[
              styles.category1,
              selectCate === 'Food' ? { backgroundColor: '#E9ECFF' } : null,
              selectCate === 'Food' && { borderColor: '#5775F1', borderWidth: 2 },
            ]}>
              <Image source={require('../assets/Food.png')} />
              <Text style={styles.cetegoryText}>Food</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectCate('Entertainment')} style={[
              styles.category2,
              selectCate === 'Entertainment' ? { backgroundColor: '#E9ECFF' } : null,
              selectCate === 'Entertainment' && { borderColor: '#5775F1', borderWidth: 2 },
            ]}>
              <Image source={require('../assets/Entertainment.png')} />
              <Text style={styles.cetegoryText}>Entertainment</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectCate('Education')} style={[
              styles.category2,
              selectCate === 'Education' ? { backgroundColor: '#E9ECFF' } : null,
              selectCate === 'Education' && { borderColor: '#5775F1', borderWidth: 2 },
            ]}>
              <Image source={require('../assets/Education.png')} />
              <Text style={styles.cetegoryText}>Education</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* List */}
        <View style={styles.listContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity style={styles.product1}>
              <Image source={require('../assets/item1.png')} />

              <View style={{ marginTop: 10, marginHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: '#4F4F4F' }}>KFC</Text>

                <View style={styles.unLock}>
                  <Image source={require('../assets/unlock.png')} />
                  <Text style={{ color: '#27AE60', fontWeight: '500', marginLeft: 5 }}>Unlocked</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.product1}>
              <Image source={require('../assets/item2.png')} />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#5775F1'
  },

  header: {
    marginHorizontal: 20,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText1: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FFFFFF',
    marginLeft: 5
  },

  headerText2: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginLeft: 5
  },

  coins: {
    flexDirection: 'row',
    backgroundColor: '#ADD8E6',
    padding: 7,
    paddingHorizontal: 12,
    borderRadius: 50
  },

  container: {
    backgroundColor: '#F0F3FF',
    width: '100%',
    height: '100%',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: 20
  },

  searchBar: {
    backgroundColor: '#F8F9FE',
    width: 383,
    height: 44,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    marginHorizontal: 15,
    marginTop: 30,
  },

  input: {
    flex: 1,
    paddingHorizontal: 10,
    marginLeft: 30
  },

  searchIcon: {
    position: 'absolute',
    left: 10,
    top: 10
  },

  categories: {
    marginTop: 20,
    marginLeft: 15,
    // marginHorizontal: 15,
  },

  category1: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 50
  },

  cetegoryText: {
    marginLeft: 10,
    color: 'black',
    fontSize: 14,
  },

  category2: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    marginLeft: 20
  },

  listContainer: {
    marginHorizontal: 15,
    marginTop: 20,
  },

  product1: {
    width: 190,
    height: 'auto',
    backgroundColor: '#FFFFFF',
    padding: 3,
    borderRadius: 15,
  },

  unLock: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAFFF3',
    padding: 7,
    borderRadius: 15,
  }
});

export default HomeScreen;