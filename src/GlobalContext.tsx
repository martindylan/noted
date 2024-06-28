import { useContext, createContext, useState, useEffect, PropsWithChildren } from 'react'
import { GlobalType } from 'types';

// This is the structure of the data used by the app, with defaults in case the app wasn't used yet.
export const defaultGlobal = {
  currentNote: 0, // Index of the note that's being edited
  dropDown: false,  // Tells if menu dropdown is active or not
  themeSelect: 'system',
  theme: 'light',  // Color theme (dark/light/wired/cardcaptor)
  notes:
    [
      {
        title: `I'm your first note...`, // Note title
        id: 999, // Unique id
        focus: 1, // Index of the item that's being edited
        isDragging: false,
        items:  // Items inside note
          [
            {
              content: `...and we're items!`, // Item text
              type: 'text', // Item type (text/heading/bulleted/checkbox)
              id: 123, // Unique id
              checked: false // For checkbox type only, specifies if it's checked or not
            },
            {
              content: `We can be changed, edited, moved or deleted.`,
              type: 'text',
              id: 456,
              checked: false // For checkbox type only, specifies if it's checked or not
            }
          ]
      }
    ]
}

type GlobalContextType = {
  global: GlobalType,
  setGlobal: React.Dispatch<React.SetStateAction<GlobalType>>
}

const GlobalContext = createContext<GlobalContextType>({ global: defaultGlobal, setGlobal: () => { } });

export function useGlobal() {
  return useContext(GlobalContext);
}

export const GlobalProvider = (props: PropsWithChildren) => {
  const storedData = window.localStorage.getItem('data');
  // If there's no data saved to localStorage, use the default data.
  const [global, setGlobal] = useState(storedData ? { ...JSON.parse(storedData), dropDown: false } : defaultGlobal);
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

  return (
    <GlobalContext.Provider value={{ global: global, setGlobal: setGlobal }}>
      {props.children}
    </GlobalContext.Provider>
  )
}