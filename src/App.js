import { useState } from "react";
import Card from "./components/Card";

function App() {
  const getRandomColor = () => {
    const colors = ["#737373", "#ef4444", "#f97316", "#ca8a04", "#84cc16", "#10b981", "#0ea5e9", "#6366f1", "#d946ef", "#fb7185"]
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const [data, setData] = useState({
    quote: "Time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
    color: "#ec4899"
  })

  async function getNewQuoteHandler() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      const quote = {
        quote: data.content,
        author: data.author,
        color: getRandomColor()
      };
      setData(quote);
    } else {
      console.log("Unexpected Error Occured")
    }
  }

  return (
    <div className="min-h-screen px-5 flex items-center" style={{backgroundColor: data.color, color:data.color}}>
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-bold text-white mb-5 font-sans italic">PickQuotes</h1>
        <Card data={data} getQuote={getNewQuoteHandler}></Card>
        <p className="italic text-sm text-white/80 text-center mt-4 ">By <a className="underline hover:no-underline" href="https://twitter.com/prakharrrastogi">Prakhar</a></p>
      </div>
    </div>
  );
}

export default App;
