// // NodeListはforEachで回せる。
// const headerMenuButton = document.getElementById("header-menu-button")
// // NodeList
// console.log(headerMenuButton.childNodes)
// const figures = headerMenuButton.childNodes
// figures.forEach(elem => {
//   console.log(elem)
// })


// // HTMLCollectionはforEachで回せない。
// const headerMenuButton = document.getElementById("header-menu-button")
// // HTMLCollection
// console.log(headerMenuButton.children)
// const figures = headerMenuButton.children
// figures.forEach(elem => {
//   console.log(elem)
// })
// // 結果
// // =>Uncaught TypeError: figures.forEach is not a function
// // =><anonymous> file:///Users/tk-mba/Documents/study-css-layout/assets/js/behavior.js:15


// // なのでArray.from()を使ってました。
// // HTMLCollectionはforEachで回せない。
// const headerMenuButton = document.getElementById("header-menu-button")
// // HTMLCollection
// console.log(headerMenuButton.children)
// const figures = Array.from(headerMenuButton.children)
// figures.forEach(elem => {
//   console.log(elem)
// })

// 指摘していただき気付いた、十分に理解ができていなかった点。
// 収集したオブジェクトがなんでもかんでも『HTMLCollection』だと思い込んでました。
// 『querySelectorAll()』で収集したら『NodeList』だった。
const figures = document.querySelectorAll("figure")
console.log(figures)  // => NodeList
figures.forEach(elem => {
  console.log(elem)
})
