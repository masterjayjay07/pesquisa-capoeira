import AppRoutes from "./routes";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <AppRoutes />
    </div>
  );
};

export default App;
