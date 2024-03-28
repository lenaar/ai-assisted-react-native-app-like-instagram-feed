const initialData = {
  articles: [
    {
      id: 1,
      avatar: require("../assets/avatar1.jpeg"),
      name: "John Doe",
      image: require("../assets/image1.jpeg"),
      likes: 150,
      commentCount: 30,
      comments: ["Great article!", "Very informative.", "Loved this read!"],
    },
    {
      id: 2,
      avatar: require("../assets/avatar2.jpeg"),
      name: "Jane Smith",
      image: require("../assets/image2.jpeg"),
      likes: 200,
      commentCount: 45,
      comments: ["Really helpful.", "Thanks for sharing.", "Awesome post!"],
    },
    {
      id: 3,
      avatar: require("../assets/avatar1.jpeg"),
      name: "Alice Johnson",
      image: require("../assets/image3.jpeg"),
      likes: 75,
      commentCount: 12,
      comments: [
        "Interesting perspective.",
        "I learned a lot.",
        "Well written!",
      ],
    },
    {
      id: 4,
      avatar: require("../assets/avatar2.jpeg"),
      name: "Michael Brown",
      image: require("../assets/image1.jpeg"),
      likes: 180,
      commentCount: 38,
      comments: ["Great visuals!", "I agree with this.", "Nice approach."],
    },
    {
      id: 5,
      avatar: require("../assets/avatar2.jpeg"),
      name: "Emily White",
      image: require("../assets/image3.jpeg"),
      likes: 250,
      commentCount: 60,
      comments: ["Superb!", "This was very insightful.", "Love your work!"],
    },
  ],
  profile: {
    name: "John Doe",
    avatar: require("../assets/avatar1.jpeg"),
    followers: 1500,
    following: 200,
    posts: 50,
  },
  stories: [
    {
      id: 1,
      avatar: require("../assets/avatar2.jpeg"),
      name: "Jane Smith",
      isSeen: true,
    },
    {
      id: 2,
      avatar: require("../assets/avatar1.jpeg"),
      name: "Alice Johnson",
      isSeen: true,
    },
    {
      id: 3,
      avatar: require("../assets/avatar2.jpeg"),
      name: "Michael Brown",
      isSeen: false,
    },
    {
      id: 4,
      avatar: require("../assets/avatar2.jpeg"),
      name: "Emily White",
      isSeen: false,
    },
  ],
};

const updatedArticles = initialData.articles.map((article) => {
  // Clone the current article to avoid directly modifying the initial data
  let updatedArticle = { ...article };

  // Adjust the comments array to match the commentCount
  // If commentCount is greater than the current length, it trims the array
  // If it's smaller, it pads the array with the last comment repeated
  const lastComment =
    updatedArticle.comments[updatedArticle.comments.length - 1] ||
    "No comments";
  updatedArticle.comments = Array.from(
    { length: updatedArticle.commentCount },
    (v, k) => updatedArticle.comments[k] || lastComment
  );

  return updatedArticle;
});

// Creating the new data object with updated articles
const data = {
  ...initialData,
  articles: updatedArticles,
};

export default data;
