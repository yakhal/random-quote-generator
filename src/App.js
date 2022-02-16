import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState({
    quote:"Time is limited, so don't waste it living someone else's life.",
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
    <div className="min-h-screen flex items-center bg-indigo-500">
      <Card data={data} getQuote={getNewQuoteHandler}></Card>
    </div>
  );
}

export default App;
