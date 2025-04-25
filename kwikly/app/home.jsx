import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';

const categories = [
  { name: 'MyList', icon: 'list' },
  { name: 'Offers', icon: 'local-offer' },
  { name: 'Gifts', icon: 'card-giftcard' },
  { name: 'Buy It', icon: 'shopping-cart' },
  { name: 'More', icon: 'more-horiz' },
];

// ✅ Sample Data with image and name filled
const bestsellers = [
  {
    name: 'Dairy, Bread & Eggs',
    image: require('../assets/images/dairy.jpg'),
  },
  {
    name: 'Vegetables & Fruits',
    image: require('../assets/images/Tomato.jpg'),
  },
];

const groceryItems = [
  {
    name: 'Chips & Namkeen',
    image: require('../assets/images/chips.jpg'),
  },
  {
    name: 'Cold Drinks & Ice Cream',
    image: require('../assets/images/colddrink.jpg'),
  },
  {
    name: 'Oil, Ghee & Masala',
    image: require('../assets/images/png-sunflower-oil-plastic-bottles-isolated-white-background.jpg'),
  },
  {
    name: 'Bakery & Biscuits',
    // image: require('../assets/bakery.png'),
  },
];

const snacks = [
  {
    name: 'Cookies',
    image: require('../assets/images/chocolate-chips-cookies.jpg'),
  },
  {
    name: 'Soda',
    // image: require('../assets/snacks/soda.png'),
  },
];

const featured = [
  {
    name: 'play station 5',
    image: require('../assets/images/playstation.jpg'),
  },
  {
    name: 'Sumsung s25',
    image: require('../assets/images/Samsungs25.jpg'),
  },
  {
    name: 'Sumsung s25',
    image: require('../assets/images/Iphone 16 pro max.jpg'),
  },
];
const Electronics = [
    {
      name: 'Headphone',
      image: require('../assets/images/headphone.jpg'),
    },
    {
      name: 'mouse',
      image: require('../assets/images/mouse.jpg'),
    },
    {
        name:'Speaker',
        image: require('../assets/images/Speaker.jpg'),
    },
    {
        name: 'mouse',
        image: require('../assets/images/mouse.jpg'),
      },
  ];

  export default function Home() {

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.delivery}>Kwikly in</Text>
          <Text style={styles.time}>10 minutes</Text>
          <Text style={styles.location}>HOME - HARSH DHANAWADE ▼</Text>
          <Ionicons
            name="person-circle-outline"
            size={28}
            color="white"
            style={styles.avatar}
          />
        </View>

        {/* Search */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput placeholder='Search "kids toys"' style={styles.input} />
          <Ionicons name="mic" size={20} color="gray" />
        </View>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
          {categories.map((cat, idx) => (
            <TouchableOpacity key={idx} style={styles.categoryItem}>
              <MaterialIcons name={cat.icon} size={24} color="white" />
              <Text style={styles.categoryText}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Bestsellers */}
        <Text style={styles.sectionTitle}>Bestsellers</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.horizontalGrid}>
            {bestsellers.map((item, idx) =>
              item?.image && item?.name ? (
                <TouchableOpacity key={idx} style={styles.categoryCard}>
                  <Image source={item.image} style={styles.categoryImage} />
                  <Text style={styles.categoryName}>{item.name}</Text>
                </TouchableOpacity>
              ) : null
            )}
          </View>
        </ScrollView>

        {/* Grocery and Kitchen */}
        
        <Text style={styles.sectionTitle}>Grocery and Kitchen</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.grid}>
          {groceryItems.map((item, idx) =>
            item?.image && item?.name ? (
              <TouchableOpacity key={idx} style={styles.categoryCard}>
                <Image source={item.image} style={styles.categoryImage} />
                <Text style={styles.categoryName}>{item.name}</Text>
              </TouchableOpacity>
            ) : null
          )}
        </View>
        </ScrollView>
        {/* Grocery and Kitchen */}
        
        <Text style={styles.sectionTitle}>Featured this week</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.grid}>
          {featured.map((item, idx) =>
            item?.image && item?.name ? (
              <TouchableOpacity key={idx} style={styles.categoryCard}>
                <Image source={item.image} style={styles.categoryImage} />
                <Text style={styles.categoryName}>{item.name}</Text>
              </TouchableOpacity>
            ) : null
          )}
        </View>
        </ScrollView>

        <Text style={styles.sectionTitle}>Elecronics</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.horizontalGrid}>
            {Electronics.map((item, idx) =>
              item?.image && item?.name ? (
                <TouchableOpacity key={idx} style={styles.categoryCard}>
                  <Image source={item.image} style={styles.categoryImage} />
                  <Text style={styles.categoryName}>{item.name}</Text>
                </TouchableOpacity>
              ) : null
            )}
          </View>
        </ScrollView>

      </ScrollView>
      

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="home-outline" size={24} color="#484C52" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Cart')}>
          <Entypo name="dots-three-horizontal" size={20} color="#484C52" />
          <Text style={styles.navLabel}>Categories</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Cart')}>
          <MaterialIcons name="shopping-bag" size={24} color="#484C52" />
          <Text style={styles.navLabel}>Order Again</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Cart')}>
      <Ionicons name="cart-outline" size={24} color="#484C52" />
      <Text style={styles.navLabel}>Cart</Text>
    </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1 },
  header: {
    backgroundColor: '#3479f6',
    padding: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'relative',
  },
  delivery: { color: 'white', fontSize: 14 },
  time: { color: 'white', fontSize: 24, fontWeight: 'bold' },
  location: { color: 'white', fontSize: 14, marginTop: 4 },
  avatar: { position: 'absolute', right: 16, top: 16 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 12,
  },
  input: { flex: 1, marginHorizontal: 8 },
  categories: { paddingHorizontal: 10 },
  categoryItem: {
    backgroundColor: '#3479f6',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 10,
  },
  categoryText: { color: 'white', fontSize: 12, marginTop: 4 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', margin: 16 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  item: {
    width: '40%',
    backgroundColor: '#f9f9f9',
    marginVertical: 8,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: { width: 50, height: 50, resizeMode: 'contain' },
  itemText: { textAlign: 'center', marginTop: 8, fontSize: 12 },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 61,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: { alignItems: 'center', justifyContent: 'center' },
  navLabel: { fontSize: 12, color: '#484C52', marginTop: 4 },
  horizontalGrid: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  categoryCard: {
    width: 160,
    backgroundColor: '#fff',
    marginRight: 16,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
