import productImage from '../assets/image/product.jpg';

export const productsData = [
    {
      id: 1,
      title: "Laptop",
      productCode: "1001",
      details: "Get started with this example Product",
      openingQty: "50",
      closingQty: "2999",
      image: productImage
    },
    {
      id: 2,
      title: "Bottle",
      productCode: "1002",
      details: "Get started with this example Product",
      openingQty: "30",
      closingQty: "999",
      image: productImage
    },
    {
      id: 3,
      title: "Bag",
      productCode: "1003",
      details: "Get started with this example Product",
      openingQty: "60",
      closingQty: "1299",
      image: productImage
    }
  ];
  
  export const vendorsData = [
    {
      id: 1,
      product: "Laptop",
      name: "Sadain",
      contact: "9890878065",
      address: "123, Street, city"
    },
    {
      id: 2,
      product: "Bottle",
      name: "Kihzer",
      contact: "9890878065",
      address: "123, Street, city"
    },
    {
      id: 3,
      product: "Bag",
      name: "Adnan",
      contact: "9890878065",
      address: "123, Street, city"
    }
  ];

  export const purchaseData = [
    {
      id: 1,
      vendor: "Sadain",
      product: "Laptop",
      qty: "9890878065",
      date: "Oct 31, 2020, 6;39 a.m"
    },
    {
      id: 2,
      vendor: "Kihzer",
      product: "Bottle",
      qty: "9890878065",
      date: "Oct 31, 2020, 6;39 a.m"
    },
    {
      id: 3,
      vendor: "Adnan",
      product: "Bag",
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
      product: "Laptop",
      qty: "10",
      paymentType: "Cash",
      date: "Oct 31, 2020, 6;39 a.m"
    },
    {
      id: 2,
      customer: "Kihzer",
      product: "Bottle",
      qty: "10",
      paymentType: "Cash",
      date: "Oct 31, 2020, 6;39 a.m"
    },
    {
      id: 3,
      customer: "Adnan",
      product: "Bag",
      qty: "18",
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