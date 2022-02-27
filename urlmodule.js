import url from 'url';

// let us understand it with analogy from android dev
// myUrl is our base url

const myUrl = new URL("https://www.example.org");

// this is the parameters of our @GET annotation of Retrofit
myUrl.pathname= '/a/b/c'

// this is the parameters for @Query annotation of Retrofit
myUrl.search = '?d=e'

// this is used to navigate to a specific section of the page
myUrl.hash = '#fgh'

// this will print info related to this url
console.log(myUrl)

// this will print how our resulting url will look like
console.log(myUrl.href)