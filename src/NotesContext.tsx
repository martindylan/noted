import { useContext, createContext, useState, FunctionComponent } from 'react'

const NotesContext = createContext<any>(null);

export function useNotes() {
  return useContext(NotesContext);
}

type NotesProviderProps = {
  children: any;
}
export const NotesProvider: FunctionComponent<NotesProviderProps> = ({ children }) => {
  const storedNotes = window.localStorage.getItem('notes');
  const [notes, setNotes] = useState(storedNotes ? JSON.parse(storedNotes) : defaultNotes);

  return (
    <NotesContext.Provider value={{ notes: notes, setNotes: setNotes }}>
      {children}
    </NotesContext.Provider>
  )
}

const defaultNotes = {
  0:
  {
    title: 'Welcome!',
    items:
    {
      0: {
        content: `I'm an item.\nYou can edit, move or delete me`
      }
    }
  }
}