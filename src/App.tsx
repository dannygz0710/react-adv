import { Navigation } from './routes/Navigation';

function App() {
  return (
    <>
      <p>{process?.env?.NODE_ENV}</p>
      <Navigation />
    </>
  );
}

export default App;
