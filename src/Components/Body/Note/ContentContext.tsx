import { useContext, createContext, useState, FunctionComponent } from 'react'
import { useNotes } from '../../../NotesContext';


const ContentContext = createContext<any>(null);

export function useContent() {
  return useContext(ContentContext);
}

type ContentProviderProps = {
  children: any;
  note: number;
}
export const ContentProvider: FunctionComponent<ContentProviderProps> = (props) => {
  const { notes, } = useNotes();
  const [content, setContent] = useState({ ...notes[props.note] });

  return (
    <ContentContext.Provider value={{ content: content, setContent: setContent }}>
      {props.children}
    </ContentContext.Provider>
  )
}