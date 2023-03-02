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

  localStorage.setItem('data', JSON.stringify(global));

  return (
    <GlobalContext.Provider value={{ global: global, setGlobal: setGlobal }}>
      {children}
    </GlobalContext.Provider>
  )
}

const defaultData = {
  lang: 'EN',
  currentNote: 0,
  currentItem: 0,
  notes:
    [
      {
        title: `I'm your first note`,
        items:
        [
          {
            content: `And I'm an item.\nYou can change my type, edit, move or delete me.`,
            type: 'text'
          }
        ]
      }
    ]
}