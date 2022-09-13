const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <a href="#1">Home</a>
      <a href="#2">News Feed</a>
      <a href="#3">Messages</a>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <ul>
        <li>Element 1</li>
        <li>Element 2</li>
        <li>Element 3</li>
      </ul>
    </div>
  );
};

export default App;
