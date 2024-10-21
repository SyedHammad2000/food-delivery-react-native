export const categories = [
  {
    id: "1",
    name: "burger",
    image: require("../assets/images/burger.png"),
  },
  {
    id: "2",
    name: "chinese",
    image: require("../assets/images/chinese.png"),
  },
  {
    id: "3",
    name: "italian",
    image: require("../assets/images/italian.png"),
  },
  {
    id: "4",
    name: "soups",
    image: require("../assets/images/soups.png"),
  },
  {
    id: "5",
    name: "desserts",
    image: require("../assets/images/desserts.png"),
  },
  {
    id: "6",
    name: "seafood",
    image: require("../assets/images/seafood.png"),
  },
];

export const featured = [
  {
    id: "1",
    title: "Top Picks for Burgers",
    description: "The best burger places in town.",
    restaurant: [
      {
        id: "101",
        name: "Burger King",
        description: "Famous for their delicious grilled burgers.",
        start: "10:00 AM",
        image: require("../assets/images/papajohns.jpg"),
        //! review stars pic
        rating: 4.5,
        lat: 37.7749,
        lng: -122.4194,
        reviews: 4.5,
        category: "burger",
        address: "123 Main Street",
        dishes: [
          {
            id: "201",
            name: "Whopper",
            description: "A flame-grilled patty with lettuce",
            image: require("../assets/images/papajohns.jpg"),
            price: 29,
            
          },
          {
            id: "202",
            name: "Double Cheeseburger",
            description: "Two beef patties ",
            image: require("../assets/images/papajohns.jpg"),
            price: 29,
            
          },
        ],
      },
      {
        id: "102",
        name: "Five Guys",
        description: "Freshly made burgers with customizable toppings.",
        start: "11:00 AM",
        image: require("../assets/images/papajohns.jpg"),
        reviews: 4.7,
        rating: 4.7,
        lat: 37.7749,
        lng: -122.4194,
        category: "burger",
        address: "123 Main Street",
        dishes: [
          {
            id: "203",
            name: "Bacon Cheeseburger",
            description: "Crispy bacon with melted cheese .",
            image: require("../assets/images/papajohns.jpg"),
            price: 299,
            
          },

          {
            id: "204",
            name: "Veggie Burger",
            description: "A tasty vegetarian alternative .",
            image: require("../assets/images/papajohns.jpg"),
            price: 292,
            
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Chinese Delights",
    description: "Top Chinese restaurants serving modern dishes.",
    restaurant: [
      {
        id: "103",
        name: "Panda Express",
        description: "Famous for their orange chicken and fried rice.",
        start: "9:00 AM",
        image: require("../assets/images/papajohns.jpg"),
        reviews: 4.3,
        rating: 4.3,
        lat: 37.7749,
        lng: -122.4194,
        category: "chinese",
        //!address
        address: "123 Main Street",
        dishes: [
          {
            id: "205",
            name: "Orange Chicken",
            description: "Crispy chicken .",
            image: require("../assets/images/papajohns.jpg"),
            price: 211,
            
          },
          {
            id: "206",
            name: "Beef and Broccoli",
            description: "Tender beef stir-fried .",
            image: require("../assets/images/papajohns.jpg"),
            price: 29,
            
          },
        ],
      },
      {
        id: "104",
        name: "Dragon's Den",
        description: "Authentic Szechuan cuisine with a modern twist.",
        start: "12:00 PM",
        image: require("../assets/images/papajohns.jpg"),
        reviews: 4.6,
        lat: 37.7749,
        lng: -122.4194,
        category: "chinese",
        address: "123 Main Street",
        dishes: [
          {
            id: "207",
            name: "Kung Pao Chicken",
            description: "Spicy stir-fry with chicken.",
            image: require("../assets/images/papajohns.jpg"),
            price: 202,
            
          },
          {
            id: "208",
            name: "Szechuan Tofu",
            description: "Tofu cooked in a fiery .",
            image: require("../assets/images/papajohns.jpg"),
            price: 219,
            
          },
        ],
      },
    ],
  },
];
