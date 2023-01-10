import Counter from './components/Counter/Counter';
import FetchedFacts from './components/FetchedJoke/FetchedJoke';
import ColoredBlocks from './components/ColoredBlocks/ColoredBlocks';

const App = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <p>Hello world!</p>
      <Counter />
      <FetchedFacts />
      <ColoredBlocks />
    </div>
  );
};

export default App;
