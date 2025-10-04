import Input from './components/Input';
import NavBar from './components/NavBar';
import ThemeProvider from './context/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <NavBar />
      <section className=" w-full dark:bg-gray-800 justify-center flex py-9">
        <Input />
      </section>
    </ThemeProvider>
  );
};
export default App;
