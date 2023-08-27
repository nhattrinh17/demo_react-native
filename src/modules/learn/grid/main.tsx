import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import styles from "./styles/style";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

interface DataProduct {
  name: string;
  url: string;
  price: number;
  priceOld: number;
  specifications: string[];
  review: number;
  star: number;
  saved: boolean;
}

function Grid(): JSX.Element {
  const [products, setProducts] = useState([
    {
      name: "Samsung SC 7686",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm_EUYe8G4Z0clreiY4dGKtQ0SFoqHCs4NtoI3h8XhtEEkeJV565zDXgLCQRyjSFmaZY&usqp=CAU",
      price: 700,
      priceOld: 900,
      specifications: [
        "Dry clean",
        "cyclone filter",
        "convenience cord storage",
      ],
      review: 31202,
      star: 5,
      saved: false,
    },
    {
      name: "Samsung SC 7686",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm_EUYe8G4Z0clreiY4dGKtQ0SFoqHCs4NtoI3h8XhtEEkeJV565zDXgLCQRyjSFmaZY&usqp=CAU",
      price: 700,
      specifications: [
        "Dry clean",
        "cyclone filter",
        "convenience cord storage",
      ],
      review: 1001,
      star: 1,
      saved: true,
    },
    {
      name: "Samsung SC 7686",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm_EUYe8G4Z0clreiY4dGKtQ0SFoqHCs4NtoI3h8XhtEEkeJV565zDXgLCQRyjSFmaZY&usqp=CAU",
      price: 700,
      specifications: [
        "Dry clean",
        "cyclone filter",
        "convenience cord storage",
      ],
      review: 1711,
      star: 2,
      saved: true,
    },
    {
      name: "Samsung SC 7686",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm_EUYe8G4Z0clreiY4dGKtQ0SFoqHCs4NtoI3h8XhtEEkeJV565zDXgLCQRyjSFmaZY&usqp=CAU",
      price: 700,
      specifications: [
        "Dry clean",
        "cyclone filter",
        "convenience cord storage",
      ],
      review: 213,
      star: 3,
      saved: false,
    },
    {
      name: "Samsung SC 7686",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm_EUYe8G4Z0clreiY4dGKtQ0SFoqHCs4NtoI3h8XhtEEkeJV565zDXgLCQRyjSFmaZY&usqp=CAU",
      price: 700,
      specifications: [
        "Dry clean",
        "cyclone filter",
        "convenience cord storage",
      ],
      review: 2002,
      star: 4,
      saved: false,
    },
    {
      name: "Samsung SC 7686",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm_EUYe8G4Z0clreiY4dGKtQ0SFoqHCs4NtoI3h8XhtEEkeJV565zDXgLCQRyjSFmaZY&usqp=CAU",
      price: 700,
      specifications: [
        "Dry clean",
        "cyclone filter",
        "convenience cord storage",
      ],
      review: 2731,
      star: 3,
      saved: false,
    },
    {
      name: "Samsung SC 7686",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm_EUYe8G4Z0clreiY4dGKtQ0SFoqHCs4NtoI3h8XhtEEkeJV565zDXgLCQRyjSFmaZY&usqp=CAU",
      price: 700,
      specifications: [
        "Dry clean",
        "cyclone filter",
        "convenience cord storage",
      ],
      review: 312,
      star: 1,
      saved: true,
    },
    {
      name: "Samsung SC 7686",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm_EUYe8G4Z0clreiY4dGKtQ0SFoqHCs4NtoI3h8XhtEEkeJV565zDXgLCQRyjSFmaZY&usqp=CAU",
      price: 700,
      priceOld: 900,
      specifications: [
        "Dry clean",
        "cyclone filter",
        "convenience cord storage",
      ],
      review: 31202,
      star: 5,
      saved: true,
    },
    {
      name: "Samsung SC 7686",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm_EUYe8G4Z0clreiY4dGKtQ0SFoqHCs4NtoI3h8XhtEEkeJV565zDXgLCQRyjSFmaZY&usqp=CAU",
      price: 700,
      specifications: [
        "Dry clean",
        "cyclone filter",
        "convenience cord storage",
      ],
      review: 1001,
      star: 1,
      saved: false,
    },
    {
      name: "Samsung SC 7686",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm_EUYe8G4Z0clreiY4dGKtQ0SFoqHCs4NtoI3h8XhtEEkeJV565zDXgLCQRyjSFmaZY&usqp=CAU",
      price: 700,
      specifications: [
        "Dry clean",
        "cyclone filter",
        "convenience cord storage",
      ],
      review: 1711,
      star: 2,
      saved: false,
    },
    {
      name: "Samsung SC 7686",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm_EUYe8G4Z0clreiY4dGKtQ0SFoqHCs4NtoI3h8XhtEEkeJV565zDXgLCQRyjSFmaZY&usqp=CAU",
      price: 700,
      specifications: [
        "Dry clean",
        "cyclone filter",
        "convenience cord storage",
      ],
      review: 213,
      star: 3,
      saved: true,
    },
    {
      name: "Samsung SC 7686",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm_EUYe8G4Z0clreiY4dGKtQ0SFoqHCs4NtoI3h8XhtEEkeJV565zDXgLCQRyjSFmaZY&usqp=CAU",
      price: 700,
      specifications: [
        "Dry clean",
        "cyclone filter",
        "convenience cord storage",
      ],
      review: 2002,
      star: 4,
      saved: false,
    },
    {
      name: "Samsung SC 7686",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm_EUYe8G4Z0clreiY4dGKtQ0SFoqHCs4NtoI3h8XhtEEkeJV565zDXgLCQRyjSFmaZY&usqp=CAU",
      price: 700,
      specifications: [
        "Dry clean",
        "cyclone filter",
        "convenience cord storage",
      ],
      review: 2731,
      star: 3,
      saved: true,
    },
    {
      name: "Samsung SC 7686",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm_EUYe8G4Z0clreiY4dGKtQ0SFoqHCs4NtoI3h8XhtEEkeJV565zDXgLCQRyjSFmaZY&usqp=CAU",
      price: 700,
      specifications: [
        "Dry clean",
        "cyclone filter",
        "convenience cord storage",
      ],
      review: 312,
      star: 1,
      saved: false,
    },
  ]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={(data) => (
          <View
            style={{
              ...styles.wrapperProduct,
              marginLeft: 10,
              marginRight: data.index % 2 == 1 ? 10 : 0,
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            <Product {...data} />
          </View>
        )}
      />
    </View>
  );
}

function Product(props: any): JSX.Element {
  const dataItem: DataProduct = props.item;
  const [dataProduct, setDataProduct] = useState(dataItem);

  return (
    <View style={styles.product}>
      <View style={styles.headerProduct}>
        <Image
          source={{ uri: dataProduct.url }}
          style={styles.imageProduct}
          resizeMode={"cover"}
        />
        {dataProduct.priceOld ? (
          <View>
            <Text style={{ ...styles.priceProduct, color: "red" }}>
              ${dataProduct.price}
            </Text>
            <Text
              style={{
                ...styles.priceProduct,
                color: "#ccc",
                textDecorationLine: "line-through",
              }}
            >
              ${dataProduct.priceOld}
            </Text>
          </View>
        ) : (
          <Text style={styles.priceProduct}>${dataProduct.price}</Text>
        )}
      </View>
      <Text style={styles.nameProduce}> {dataProduct.name}</Text>
      {dataProduct.specifications.map((specification, index) => (
        <Text
          key={index}
          style={styles.specification}
        >{`\u2022 ${specification}`}</Text>
      ))}
      <View style={styles.footerProduct}>
        <TouchableOpacity
          style={styles.boxSaveProduct}
          onPress={() => {
            dataProduct.saved = !dataProduct.saved;
            setDataProduct({ ...dataProduct });
          }}
        >
          <IconFontAwesome
            name={dataProduct.saved ? "heart" : "heart-o"}
            size={20}
            color={"red"}
          />
          <Text style={{ color: "red", marginLeft: 4, maxWidth: 60 }}>
            Save for cart
          </Text>
        </TouchableOpacity>
        <View>
          <View style={styles.boxStars}>
            {[1, 2, 3, 4, 5].map((number) => (
              <IconFontAwesome
                key={number}
                style={styles.iconStar}
                name={dataProduct.star >= number ? "star" : "star-o"}
                color={dataProduct.star >= number ? "#fe9804" : "#ccc"}
              />
            ))}
          </View>
          <Text style={styles.textReview}>
            {dataProduct.review > 1000
              ? `${(dataProduct.review / 1000).toFixed(2)}k`
              : dataProduct.review}{" "}
            reviews
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Grid;
