import React from "react";
import Card from "./components/Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      color: "white"
    }
    this.getNewQuoteHandler = this.getNewQuoteHandler.bind(this);
  }

  render() {
    return (
      <div className="min-h-screen px-5 flex items-center" style={{ backgroundColor: this.state.color, color: this.state.color }}>
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl text-center font-bold text-white mb-5 font-sans italic">PickQuotes</h1>
          <Card data={this.state} getQuote={this.getNewQuoteHandler}></Card>
          <p className="italic text-sm text-white/80 text-center mt-4 ">By <a className="underline hover:no-underline" href="https://twitter.com/prakharrrastogi">Prakhar</a></p>
        </div>
      </div>
    );
  }

  // Retrieve data from API and setState when the component mounted
  componentDidMount() {
    if (!this.state.quote) {
      (async () => {
        try {
          this.setState(await this.getQuoteData());
        } catch (e) {
          console.log(e)
        }
      })();
    }
  }

  // Generates Random color 
  getRandomColor() {
    const colors = ["#737373", "#ef4444", "#f97316", "#ca8a04", "#84cc16", "#10b981", "#0ea5e9", "#6366f1", "#d946ef", "#fb7185"]
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Used to handle "New Quote" button click 
  async getNewQuoteHandler() {
    const data = await this.getQuoteData();
    this.setState(data);
  }

  // Used to retrieve data from API
  async getQuoteData() {
    let quote = {
      quote: "Some Error occured, please try again later.",
      author: "Error",
      color: this.getRandomColor()
    };
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      quote = { 
        quote: data.content,
        author: data.author,
        color: this.getRandomColor()
      };
    } 
    return quote;
  }
}

export default App;
