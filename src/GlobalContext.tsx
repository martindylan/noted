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
  notes:
    [
      {
        title: `I'm your first note...`,
        focus: 1,
        items:
        [
          {
            content: `...and we're items!`,
            type: 'text',
            checked: false
          },
          {
            content: `We can be changed, edited, moved or deleted.`,
            type: 'text',
            checked: false
          }
        ]
      }
    ]
}