import NewItem from './NewItem/NewItem';
import Item from './Item/Item';
import { useItems } from '../../../../ItemsContext';

export default function Content() {

  const { notes, setNotes } = useItems();
  // Remove item
  const removeItem = (id: number) => {
    let newItems = { ...notes[0].items };
    delete newItems[id];
    setNotes({ ...notes, 0: { items: newItems } });
  }

  return (
    <div>
      {Object.keys(notes[0].items).map((item: any, i: number) => {
        return <Item id={item} key={item} removeItem={removeItem}>{item.content}</Item>
      })}
      <NewItem></NewItem>
    </div>
  )
}
