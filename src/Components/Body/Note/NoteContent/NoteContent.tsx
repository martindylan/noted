import { useContent } from '../ContentContext';
// Components
import Item from './Item/Item';
import NewItem from './NewItem/NewItem';

export default function NoteContent() {
  console.log("note content rendered");
  const { content, setContent } = useContent();
  const items = content.items;

  // Remove item
  const removeItem = (id: number) => {
    let newItems = { ...items };
    delete newItems[id];
    setContent({ ...content, items: newItems });
  }

  return (
    <div>
      {Object.keys(items).map((item: any, i: number) => {
        return <Item id={item} key={item} removeItem={removeItem} type={items[item].type} />
      })}
      <NewItem />
    </div>
  )
}
