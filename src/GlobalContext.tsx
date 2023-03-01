import { useContext, createContext, useState, FunctionComponent } from 'react'

const GlobalContext = createContext<any>(null);

export function useGlobal() {
  return useContext(GlobalContext);
}

interface IGlobalProviderProps {
  children: any;
}
export const GlobalProvider: FunctionComponent<IGlobalProviderProps> = ({ children }) => {
  const storedData = window.localStorage.getItem('data');
  const [global, setGlobal] = useState(storedData ? JSON.parse(storedData) : defaultData);

  return (
    <GlobalContext.Provider value={{ global: global, setGlobal: setGlobal }}>
      {children}
    </GlobalContext.Provider>
  )
}

const defaultData = {
  lang: 'EN',
  notes:
  {
    0:
    {
      title: 'Welcome!',
      items:
      {
        0: {
          content: `I'm an item.\nYou can edit, move or delete me`,
          type: 'subtitle'
        }
      }
    }
  }
}