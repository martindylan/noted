import { useContext, createContext, useState, FunctionComponent } from 'react'

const ItemsContext = createContext<any>(null);

export function useItems() {
  return useContext(ItemsContext);
}
type ItemsProviderProps = {
  children: any;
}
export const ItemsProvider: FunctionComponent<ItemsProviderProps> = ({ children }) => {
  const [notes, setNotes] = useState({
    0:
    {
      title: 'Welcome!',
      items: {
        0: `I'm an item.\nYou can edit, move or delete me`
      }
    }
  });

  return (
    <ItemsContext.Provider value={{ notes: notes, setNotes: setNotes }}>
      {children}
    </ItemsContext.Provider>
  )
}
