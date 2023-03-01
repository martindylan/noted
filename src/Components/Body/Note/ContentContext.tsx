import { useContext, createContext, useState, FunctionComponent } from 'react'
import { useGlobal } from '../../../GlobalContext';


const ContentContext = createContext<any>(null);

export function useContent() {
  return useContext(ContentContext);
}

type ContentProviderProps = {
  children: any;
  note: number;
}
export const ContentProvider: FunctionComponent<ContentProviderProps> = (props) => {
  const { global, } = useGlobal();
  const notes = global.notes;
  const [content, setContent] = useState({ ...notes[props.note] });

  return (
    <ContentContext.Provider value={{ content: content, setContent: setContent }}>
      {props.children}
    </ContentContext.Provider>
  )
}