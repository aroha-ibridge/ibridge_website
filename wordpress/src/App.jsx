import NormalizePath from './components/routing/NormalizePath';
import AppRouter from './routes/Router';

function App() {
  return (
    <NormalizePath>
      <AppRouter />
    </NormalizePath>
  );
}

export default App;
