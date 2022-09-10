import Header from "./Header";
import Movies from "./Movies";
import Layout from "./Layout";


function App() {
  return (
    <Layout startingTheme="light">
      <div >
        <Header />
        <Movies />
      </div>
    </Layout>
  );
}

export default App;
