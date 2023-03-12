import { useContext, createContext, useState, FunctionComponent, useEffect } from 'react'

const GlobalContext = createContext<any>(null);

export function useGlobal() {
  return useContext(GlobalContext);
}

interface IGlobalProviderProps {
  children: any;
}
export const GlobalProvider: FunctionComponent<IGlobalProviderProps> = ({ children }) => {
  const storedData = window.localStorage.getItem('data');
  // If there's no data saved to localStorage, use the default data.
  const [global, setGlobal] = useState(storedData ? { ...JSON.parse(storedData), dropDown: false } : defaultData);
  localStorage.setItem('data', JSON.stringify(global));

  const setTheme = (systemTheme?: string) => {
    if (global.themeSelect === 'system') {
      setGlobal({ ...global, theme: systemTheme });
    } else {
      setGlobal({ ...global, theme: global.themeSelect });
    }
  }

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemTheme = isDark ? 'dark' : 'light';
    setTheme(systemTheme);
  }, [global.themeSelect])

  const getSystem = (e: any) => {
    const isDark = e.target.matches;
    const systemTheme = isDark ? 'dark' : 'light';
    setTheme(systemTheme);
  }

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', getSystem);
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', getSystem);
    }
  }, [])

  return (
    <GlobalContext.Provider value={{ global: global, setGlobal: setGlobal }}>
      {children}
    </GlobalContext.Provider>
  )
}

// This is the structure of the data used by the app, with defaults in case the app wasn't used yet.
const defaultData = {
  currentNote: 0, // Index of the note that's being edited
  dropDown: false,  // Tells if menu dropdown is active or not
  themeSelect: 'system',
  theme: 'light',  // Color theme (dark/light/wired/cardcaptor)
  notes:
    [
      {
        title: `I'm your first note...`, // Note title
        focus: 1, // Index of the item that's being edited
        items:  // Items inside note
          [
            {
              content: `...and we're items!`, // Item text
              type: 'text' // Item type (text/heading/bulleted/checkbox)
              // checked: false // For checkbox type only, specifies if it's checked or not
            },
            {
              content: `We can be changed, edited, moved or deleted.`,
              type: 'text'
            }
          ]
      }
    ]
}