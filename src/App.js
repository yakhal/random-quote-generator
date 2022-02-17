import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState({
    quote: "Time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs"
  })

  async function getNewQuoteHandler() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      const quote = {
        author: data.author,
        content: data.content,
      };
      console.log(quote)
      setData({
        quote: quote.content,
        author: quote.author
      })
    } else {
      console.log("Unexpected Error Occured")
    }
  }

  // const classes = classNames("min-h-screen flex items-center", "bg-"+data.color)

  return (
    <div className="min-h-screen bg-indigo-500 px-5 flex items-center">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-bold text-white mb-5 font-sans italic">PickQuotes</h1>
        <Card data={data} getQuote={getNewQuoteHandler}></Card>
        <p className="italic text-sm text-white/80 text-center mt-4 ">By <a className="underline hover:no-underline" href="https://twitter.com/prakharrrastogi">Prakhar</a></p>
      </div>
    </div>
  );
}

export default App;
