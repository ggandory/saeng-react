import logo from "./logo.svg";
import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a href={"/read/" + t.id}>{t.title}</a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(e) {
  return (
    <article>
      <h2>{e.title}</h2>
      {e.body}
    </article>
  );
}

function App() {
  const topics = [
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "javascript", body: "javascript is..." },
  ];
  return (
    <div className="App">
      <Header title="REACT" />
      <Nav topics={topics} />
      <Article title="Welcome" body="Hello, Web" />
      <Article title="Bye" body="What's up" />
    </div>
  );
}

export default App;
