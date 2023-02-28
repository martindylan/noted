import { useContext, createContext, useState, FunctionComponent } from 'react'
import { myData } from '../../ItemsContext';

const NotesContext = createContext<any>(null);

export function useNotes() {
  return useContext(NotesContext);
}

type NotesProviderProps = {
  children: any;
}
export const NotesProvider: FunctionComponent<NotesProviderProps> = ({ children }) => {
  const [notes, setNotes] = useState({...myData.notes});

  return (
    <NotesContext.Provider value={{ notes: notes, setNotes: setNotes }}>
      {children}
    </NotesContext.Provider>
  )
}