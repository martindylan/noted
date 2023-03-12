import { useContext, createContext, useState, FunctionComponent, useEffect } from 'react'
import { useGlobal } from '../../../GlobalContext';


const NoteContext = createContext<any>(null);

export function useNote() {
  return useContext(NoteContext);
}

type NoteContextProviderProps = {
  children: any;
  note: number;
}
export const NoteContextProvider: FunctionComponent<NoteContextProviderProps> = (props) => {
  const { global, setGlobal } = useGlobal();
  const notes = global.notes;
  const [note, setNote] = useState({ ...notes[props.note] });

  useEffect(() => {
    let newNotes = [...global.notes];
    newNotes[props.note] = note;
    setGlobal({ ...global, notes: newNotes });
  }, [note])

  return (
    <NoteContext.Provider value={{ note: note, setNote: setNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}