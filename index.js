const quotes = document.getElementById("quotes")
const author = document.getElementById("author")
const newQuotes = document.getElementById("newQuotes")
const tweetMe =document.getElementById("tweetMe")


const tweetNow = ()=>{
   const tweetPost =  `https://twitter.com/intent/tweet?text=${quotesData.text}` ;
   window.open(tweetPost)
}


let realData = ""
let quotesData = ""
const getNewQuotes = ()=>{
    let rnum = Math.floor(Math.random() * 1000)
    quotesData = realData[rnum]
    quotesData.author === null? author.innerText = "unknown":
    author.innerText = `${quotesData.author}`

    quotes.innerText = `${quotesData.text}`
    
}
const getQuotes = async ()=>  {
                    const api = "https://type.fit/api/quotes"
                    try{
                        let data = await fetch(api)
                        realData =await data.json() 
                        getNewQuotes();
                    }
                    catch(error){
                        console.log(error);
                    }
        }

        tweetMe.addEventListener('click' , tweetNow)
        newQuotes.addEventListener('click' , getNewQuotes)
        getQuotes()