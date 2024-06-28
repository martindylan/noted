import { useContext, createContext, useState, useEffect, PropsWithChildren } from 'react'
import { defaultGlobal, useGlobal } from '../../../GlobalContext';
import { NoteType } from '../../../types';

type NoteContextType = {
  note: NoteType,
  setNote: React.Dispatch<React.SetStateAction<NoteType>>
}

const NoteContext = createContext<NoteContextType>({ note: defaultGlobal.notes[0], setNote: () => { } });

export function useNote() {
  return useContext(NoteContext);
}

type NoteContextProviderProps = {
  index: number;
}

export const NoteContextProvider = (props: PropsWithChildren<NoteContextProviderProps>) => {
  const { global, setGlobal } = useGlobal();
  const notes = global.notes;
  const { index, children } = props;
  const [note, setNote] = useState({ ...notes[index] });

  useEffect(() => {
    let newNotes = [...global.notes];
    newNotes[index] = note;
    setGlobal({ ...global, notes: newNotes });
  }, [note])

  return (
    <NoteContext.Provider value={{ note: note, setNote: setNote }}>
      {children}
    </NoteContext.Provider>
  )
}