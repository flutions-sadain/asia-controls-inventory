import productImage from '../assets/image/product.jpg';

export const productsData = [
    {
      id: 1,
      title: "Laptop",
      color: "1001",
      openingQty: 50,
      balance: "$2999",
      image: productImage
    },
    {
      id: 2,
      title: "Bottle",
      color: "1002",
      openingQty: 30,
      balance: "$4999",
      image: productImage
    },
    {
      id: 3,
      title: "Bag",
      color: "1003",
      openingQty: 60,
      balance: "$1299",
      image: productImage
    }
  ];
  
  export const vendorsData = [
    {
      id: 1,
      product: "Item 1",
      name: "Sadain",
      contact: "9890878065",
      address: "123, Street, city"
    },
    {
      id: 2,
      product: "Item 2",
      name: "Kihzer",
      contact: "9890878065",
      address: "123, Street, city"
    },
    {
      id: 3,
      product: "Item 3",
      name: "Adnan",
      contact: "9890878065",
      address: "123, Street, city"
    }
  ];

  export const purchaseData = [
    {
      id: 1,
      vendor: "Sadain",
      product: "Item 1",
      qty: "9890878065",
      date: "Oct 31, 2020, 6;39 a.m"
    },
    {
      id: 2,
      vendor: "Kihzer",
      product: "Item 2",
      qty: "9890878065",
      date: "Oct 31, 2020, 6;39 a.m"
    },
    {
      id: 3,
      vendor: "Adnan",
      product: "Item 3",
      qty: "9890878065",
      date: "Oct 31, 2020, 6;39 a.m"
    }
  ];
  
  export const customersData = [
    {
      id: 1,
      fullname: "Sadain",
      contact: "9890878065",
      address: "123, Street, city"
    },
    {
      id: 2,
      fullname: "Kihzer",
      contact: "9890878065",
      address: "123, Street, city"
    },
    {
      id: 3,
      fullname: "Adnan",
      contact: "9890878065",
      address: "123, Street, city"
    }
  ];

  export const salesData = [
    {
      id: 1,
      customer: "Sadain",
      product: "Item 1",
      qty: "9890878065",
      paymentType: "Cash",
      date: "Oct 31, 2020, 6;39 a.m"
    },
    {
      id: 2,
      customer: "Kihzer",
      product: "Item 2",
      qty: "9890878065",
      paymentType: "Cash",
      date: "Oct 31, 2020, 6;39 a.m"
    },
    {
      id: 3,
      customer: "Adnan",
      product: "Item 3",
      qty: "9890878065",
      paymentType: "Cash",
      date: "Oct 31, 2020, 6;39 a.m"
    }
  ];

  export const inventoryData = [
    {
      id: 1,
      date: "Oct 31, 2020, 6;39 a.m",
      product: "Item 1",
      vendor: "Sadain",
      customer: "Sadain",
      purchase: "10",
      sale: "5",
      balance: "10",
    },
    {
      id: 2,
      date: "Oct 31, 2020, 6;39 a.m",
      product: "Item 2",
      vendor: "Kihzer",
      customer: "Kihzer",
      purchase: "10",
      sale: "5",
      balance: "10",
    },
    {
      id: 3,
      date: "Oct 31, 2020, 6;39 a.m",
      product: "Item 3",
      vendor: "Adnan",
      customer: "Adnan",
      purchase: "10",
      sale: "5",
      balance: "10",
    }
  ];