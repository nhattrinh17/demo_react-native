import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  RefreshControl,
  Alert,
  TouchableOpacity,
} from "react-native";
import styles from "./styles/style";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { BlockInputStyleOne } from "~/uiCore";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

function DataHorizontal(props: any): JSX.Element {
  const { name, url } = props.item;

  return (
    <View style={styles.wrapperHorizontal}>
      <Image
        style={styles.imageDemo}
        source={{
          uri: url,
        }}
        resizeMode="cover"
      />
      <Text style={styles.textDemo}>{name}</Text>
    </View>
  );
}

function DataItem(props: any): JSX.Element {
  const { urlImagre, name, status, price, type, website } = props.item;
  const onPress = props.onPress;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        <Image
          source={{
            uri: urlImagre,
          }}
          resizeMode={"cover"}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.description}>
            Status:{" "}
            {status ? (
              <Text style={styles.textStatus}>OPENING</Text>
            ) : (
              <Text style={styles.textStatus}>OPENING SOON</Text>
            )}
          </Text>
          <Text style={styles.description}>Price: {price}$</Text>
          <Text style={styles.description}>Pood Type: {type}</Text>
          <Text style={styles.description}>Website: {website}</Text>
          <View style={styles.socialNetwork}>
            <IconFontAwesome5
              name="facebook-square"
              size={24}
              style={styles.iconSocialNetwork}
            />
            <IconFontAwesome5
              name="instagram-square"
              size={24}
              style={styles.iconSocialNetwork}
            />
            <IconFontAwesome5
              name="pinterest"
              size={24}
              style={styles.iconSocialNetwork}
            />
            <IconFontAwesome5
              name="linkedin"
              size={24}
              style={styles.iconSocialNetwork}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function DataList(): JSX.Element {
  const [refreshing, setRefreshing] = useState(false);
  const [valueSearch, setValueSearch] = useState("");

  const data = [
    {
      urlImagre:
        "https://www.disneycooking.com/wp-content/uploads/2021/04/cha-bo.jpg",
      name: "Cách làm chả bò thơm ngon, dai giòn SIÊU hấp dẫn",
      status: true,
      price: 1000,
      type: "Cha Bo",
      website: "test",
    },
    {
      urlImagre:
        "https://www.disneycooking.com/wp-content/uploads/2021/04/pho-xao-300x200.jpg",
      name: "Cách làm phở xào bò cực ngon dễ làm, không nát",
      status: true,
      price: 1200,
      type: "Pho xao",
      website: "test",
    },
    {
      urlImagre:
        "https://www.disneycooking.com/wp-content/uploads/2021/03/ca-bien-kho-300x200.jpg",
      name: " Cách kho cá biển ngon, không tanh cực đơn giản",
      status: false,
      price: 800,
      type: "Cha Bo",
      website: "test",
    },
    {
      urlImagre:
        "https://www.disneycooking.com/wp-content/uploads/2021/03/goi-dua-leo-kho-ca-sac-300x200.jpg",
      name: "Cách làm gỏi dưa leo khô cá sặc đơn giản mà cực ngon",
      status: true,
      price: 1000,
      type: "Cha Bo",
      website: "test",
    },
    {
      urlImagre:
        "https://www.disneycooking.com/wp-content/uploads/2021/03/chao-ca-hoi-pho-mai-mon-chao-an-dam-dinh-duong-cho-tre-300x200.jpg",
      name: "Cách nấu cháo cá hồi phô mai giàu dinh dưỡng cho bé ăn dặm",
      status: true,
      price: 1000,
      type: "Cha Bo",
      website: "test",
    },
    {
      urlImagre:
        "https://www.disneycooking.com/wp-content/uploads/2021/03/canh-ghe-rau-muong-300x200.jpg",
      name: "Cách nấu canh ghẹ rau muống thanh mát, ngọt lành",
      status: false,
      price: 1000,
      type: "OK",
      website: "test",
    },
    {
      urlImagre:
        "https://www.disneycooking.com/wp-content/uploads/2021/01/overnight-oat-300x200.jpg",
      name: "Overnight oats là gì? 3+ cách làm overnight oats giảm cân",
      status: true,
      price: 1000,
      type: "Cha Bo",
      website: "test",
    },
  ];

  const dataHorizontal = [
    {
      name: "Hamburger",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgRJ1KQL3CRHykA5hd4KVIVgp1fkOJJqKXhA&usqp=CAU",
    },
    {
      name: "Coffee",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYDoMzzfzE_xTrjVhqZ_xar7DbNnIjInXTA&usqp=CAU",
    },
    {
      name: "Juice",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00imU62Ttlb8sglJ0eIvh5aqioRxfJoEtaw&usqp=CAU",
    },
    {
      name: "Hamburger",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgRJ1KQL3CRHykA5hd4KVIVgp1fkOJJqKXhA&usqp=CAU",
    },
    {
      name: "Coffee",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYDoMzzfzE_xTrjVhqZ_xar7DbNnIjInXTA&usqp=CAU",
    },
    {
      name: "Juice",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00imU62Ttlb8sglJ0eIvh5aqioRxfJoEtaw&usqp=CAU",
    },
    {
      name: "Hamburger",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgRJ1KQL3CRHykA5hd4KVIVgp1fkOJJqKXhA&usqp=CAU",
    },
    {
      name: "Coffee",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYDoMzzfzE_xTrjVhqZ_xar7DbNnIjInXTA&usqp=CAU",
    },
    {
      name: "Juice",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00imU62Ttlb8sglJ0eIvh5aqioRxfJoEtaw&usqp=CAU",
    },
  ];

  const handleRefresh = () => {
    setRefreshing(true);

    // Thực hiện các thao tác làm mới dữ liệu
    console.log("Refreshing");

    setTimeout(() => setRefreshing(false), 5000);
  };

  const handleLoadMore = () => {
    // Gọi API hoặc thực hiện xử lý để tải thêm dữ liệu từ nguồn dữ liệu

    // Mô phỏng việc tải thêm dữ liệu
    console.log("load More");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.inputSearch}>
          <BlockInputStyleOne
            backgroundColor={"#999"}
            width={"100%"}
            iconName="search"
            iconColor={"#000"}
            placeholder="Enter name..."
            value={valueSearch}
            onChange={(e) => setValueSearch(e)}
            marginBottom={0}
          />
        </View>
        <IconFontAwesome name="navicon" style={styles.iconNav} size={32} />
      </View>
      <View style={styles.listDataHorizontal}>
        <FlatList
          horizontal
          data={dataHorizontal}
          renderItem={(item) => <DataHorizontal {...item} />}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              title="Đang làm mới..."
              colors={["red", "green", "blue"]}
              progressBackgroundColor="#000"
              progressViewOffset={50}
              // size="large"
            />
          }
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
        />
      </View>
      <FlatList
        keyExtractor={(item) => item.name}
        data={data}
        renderItem={(item) => (
          <DataItem
            {...item}
            onPress={() => {
              Alert.alert("On press", item.item.name);
            }}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            title="Đang làm mới..."
            colors={["red"]}
            progressBackgroundColor="#000"
            progressViewOffset={50}
            // size="large"
          />
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
      {/* <ScrollView>
        {data.map((item, index) => (
          <DataItem {...item} key={index} />
        ))}
      </ScrollView> */}
    </View>
  );
}

export default DataList;
