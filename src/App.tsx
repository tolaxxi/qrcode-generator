import { useState } from 'react';
import Input from './components/Input';
import NavBar from './components/NavBar';
import QrCode from './components/QrCode';
import ThemeProvider from './context/ThemeProvider';

const App = () => {
  const [Url, setUrl] = useState('');

  return (
    <ThemeProvider>
      <NavBar />
      <section className=" w-full flex-col h-dvh items-center justify-center dark:bg-gray-950 flex gap-5  pt-20 pb-7">
        <Input setUrl ={setUrl}/>
        <QrCode Url={Url} />
      </section>
    </ThemeProvider>
  );
};
export default App;
