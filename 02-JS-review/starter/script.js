const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

/*const books = getBook(3);
books;
// const title=books.title;
// const author=books.author;

const { author, title, pages, genres, publicationDate } = books;

genres;

const [primaryGenre, secondaryGenre, ...otherGenre] = genres;

otherGenre;

// LHS-> Rest Operators
// RHS-> Spread Operator

const newGenres = [...genres, "horror"];

newGenres;

const updatedBook = {
  ...books,
  moviePublicationDate: "11/05/2004",
  pages: 1240,
  reviewsCount: 0,
};
// Same property name is ovverride the previous object
updatedBook;
// Template Literal
pages;
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published on the ${books.publicationDate}`;
summary;

// Teneray Operator
const lengthSummary = pages > 1000 ? "The books is very long" : "Small Book";
pages;
lengthSummary;

// Arrow Function
const getPublishYear = (str) => str.split("-")[0];
getPublishYear(publicationDate);

// Short Curcuiting
// For Falsy Value->0,'',null ,undefined

console.log(false && "Somestring");
console.log(true && "Some String");

console.log(false || "Somestring");
console.log(true || "Some String");

const spanishTranslation = books.translations.spanish || "Not Translated";
spanishTranslation;

const count = updatedBook.reviewsCount || "no data";
count;

// To solve for 0 and ''
const updatedCount = updatedBook.reviewsCount ?? "no data";
updatedCount;

// Optional Chaining
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  // Pronlem if something is undefined

  // ?. is optional chaining
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(books));

// Array methods
// Map method is a method to apply a callback function on every element of the array
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
x;

const books1 = getBooks();
const titles = books1.map((books) => books.title);
titles;

const essentialData = books1.map((book) => ({
  title: book.title,
  author: book.author,
}));

essentialData;

// Filter method
// Only gives the elements which satify the callback function
const longBooks = books1
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books1
  .filter((book) => book.genres.includes("adventure"))
  .map((book)=>book.title);
adventureBooks;

// Reduce Method
// This method is to make a array to one value takes one argument as callback function and second parameter as starter value

const pagesAllBooks=books1.reduce((acc,book)=>acc+book.pages,0)
pagesAllBooks

// Sort Method-> affects the orginal array
// Use to sort the value
const arr=[3,7,1,4]
// Slice is used to give a copy
const sorted=arr.slice().sort((a,b)=>b-a)
sorted
arr

const sortedByPages=books1.slice().sort((a,b)=>a.pages-b.pages).map(book=>book.title)
sortedByPages

// Addition in Arrays
const newBook={
  id:6,
  title:'Harry Potter',
  author:'J.K Rowling'
}

const booksAfterAdd=[...books1,newBook]
booksAfterAdd

// Delete in Array
const booksAfterDelete=booksAfterAdd.filter((book)=>book.id!==3)
booksAfterDelete

// Update in Array
const booksAfterUpdate=booksAfterDelete.map((book)=>{
  book.id===1?{...book,pages:1210}:book
})

booksAfterUpdate*/

// Promises
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))

console.log("Jonas")


async function getTodos(){
  const res =await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data=await res.json()
  console.log(data)
  return data
}
getTodos()

const todos=getTodos()
console.log(todos)

console.log("Jonas");


