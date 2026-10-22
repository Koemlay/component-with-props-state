
// // create ProductType
// type ProductType = {
//     title: string;
//     des: string;
//     price: number;
//     image: string
// }

// // array object
// export const ProductList: ProductType[] = [
//     {
//         image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxDb3NtaWMlMjBIZWFkcGhvbmVzfGVufDB8MHx8fDE3MjgxNTYwNTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
//         title: "Headphones",
//         des: "Experience music like never before with our state-of-the-art Cosmic Headphones. Immerse yourself in crystal-clear sound and unparalleled comfort.",
//         price: 199.99
//     },
//     {
//         image: "https://i.pinimg.com/736x/c7/22/b7/c722b70cedb8637dbb83ca822c79a23b.jpg",
//         title: "BMW M4",
//         des: "Experience music like never before with our state-of-the-art Cosmic Headphones. Immerse yourself in crystal-clear sound and unparalleled comfort.",
//         price: 2000
//     },
//     {
//         image: "https://i.pinimg.com/1200x/12/65/b3/1265b3fcbb7c43e91c5f5bad92db8ddb.jpg",
//         title: "Ferrari SF90",
//         des: "Experience music like never before with our state-of-the-art Cosmic Headphones. Immerse yourself in crystal-clear sound and unparalleled comfort.",
//         price: 4000
//     },
//     {
//         image: "https://i.pinimg.com/1200x/63/7a/93/637a936a3b393d754ce944220dc5f579.jpg",
//         title: "NISSAN GT-R NISMO 2020",
//         des: "Experience music like never before with our state-of-the-art Cosmic Headphones. Immerse yourself in crystal-clear sound and unparalleled comfort.",
//         price: 5000
//     },
//     {
//         image: "https://i.pinimg.com/1200x/13/8c/02/138c021ba1aa36f3a6a341e20e78bfaa.jpg",
//         title: "Audi R8",
//         des: "Experience music like never before with our state-of-the-art Cosmic Headphones. Immerse yourself in crystal-clear sound and unparalleled comfort.",
//         price: 4500
//     },

// ]

export type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  description: string;
  image: string;
  isPopular: boolean;
};


export const products: Product[] = [
  {
    id: 1,
    name: "Bacon Onion Pizza Focaccia",
    price: 3.44,
    oldPrice: 4.3,
    description: "ភីហ្សាសម្រាប់មនុស្ស 1 នាក់",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    isPopular: false,
  },
  {
    id: 2,
    name: "Tuna Melt Sandwich",
    price: 3.92,
    oldPrice: 4.9,
    description: "Mix of tuna cream cheese onions. We Recommend adding: Jalapeno peppers",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400",
    isPopular: true,
  },
  {
    id: 3,
    name: "Cream Cheese Basil Tomatoes Sandwich",
    price: 3.68,
    oldPrice: 4.6,
    description: "Try Coppa as extra addon or any meat of your choice. No onions",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400",
    isPopular: true,
  },
  {
    id: 4,
    name: "Smoked Chicken Mix",
    price: 3.76,
    oldPrice: 4.7,
    description: "Chicken deli mixed with grainy mustard mayo and onions.",
    image: "https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=400",
    isPopular: true,
  },
]