import User from "./components/User.js";
import Links from "./components/Links.js";
import Footer from "./components/Footer.js";

function App() {
  const media = {
    twitter: "Twitter Link",
    zuriTeam: "Zuri Team",
    zuriBooks: "Zuri Books",
    pythonBooks: "Python Books",
    bg: "Background Check for Coders",
    designBooks: "Design Books",
  };

  return (
    <div className="App">
      <User />
      <Links
        page={media.twitter}
        linkto="https://twitter.com/ajor_moses"
        id="btn__zuri"
      />
      <Links
        page={media.zuriTeam}
        linkto="https://training.zuri.team/"
        id="books"
      />
      <Links
        page={media.zuriBooks}
        linkto="http://books.zuri.team"
        id="book__python"
      />
      <Links
        page={media.pythonBooks}
        linkto="https://books.zuri.team"
        id="pitch"
      />
      <Links page={media.bg} linkto="https://background.zuri.team" />
      <Links
        page={media.designBooks}
        linkto="https://books.zuri.team/design-rules"
        id="book__design"
      />
      <Footer />
    </div>
  );
}

export default App;
