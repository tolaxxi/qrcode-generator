import Input from './components/Input';
import NavBar from './components/NavBar';
import QrCode from './components/QrCode';
import ThemeProvider from './context/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <NavBar />
      <section className=" w-full flex-col h-dvh items-center dark:bg-gray-950 flex gap-5 py-25">
        <Input />
        <QrCode />
      </section>
    </ThemeProvider>
  );
};
export default App;
