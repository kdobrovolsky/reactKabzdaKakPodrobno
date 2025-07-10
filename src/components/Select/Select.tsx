import { useState ,KeyboardEvent, useEffect} from "react";
import s from "./Select.module.css";
type ItemType = {
  title: string;
  value: any;
};

type SelectPropsType = {
  value?: any;
  onChange: (value: any) => void
  items: ItemType[];
};

export const Select = ({ items, value,onChange }: SelectPropsType) => {
  const [active, setActive] = useState(false)
  const [hoveredElementValue, setHoveredElementValue] = useState(value)

  const selectedItem = items.find((i) => i.value === value);
  const showItems = () => setActive(!active)
 const onItemClick = (value: any) => {
    onChange(value); showItems()
 }

 const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!active && ['ArrowDown', 'ArrowUp', 'Enter', 'Escape'].includes(e.key)) {
        setActive(true);
        return;
    }

    if (!active) return;

    e.preventDefault();
    const currentIndex = items.findIndex(item => item.value === hoveredElementValue);

    switch (e.key) {
        case 'Escape':
            setActive(false);
            break;
            
        case 'Enter':
            if (hoveredElementValue !== undefined) {
                onChange(hoveredElementValue);
                setActive(false);
            }
            break;
            
        case 'ArrowDown': {
            const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
            setHoveredElementValue(items[nextIndex].value);
            break;
        }
            
        case 'ArrowUp': {
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
            setHoveredElementValue(items[prevIndex].value);
            break;
        }
    }
}

useEffect(()=> {
    setHoveredElementValue(value)
}, [value])


  return (
    <div>
      <div className={s.select + ''} onKeyUp={onKeyDown}  tabIndex={0}>
      <span className={s.main} onClick={showItems}>{selectedItem ? selectedItem.title : "Ничего не выбрано"}</span>
        {active &&
        <div className={s.items}> 
        {items.map((t) => (
          <div onMouseEnter={()=>setHoveredElementValue(t.value)}  className={`${s.item} ${hoveredElementValue === t.value ? s.selected : ''}`} key={t.value} onClick={()=>onItemClick(t.value)}>{t.title}</div>
        ))}
        </div>
        }
        
      </div>
    </div>
  );
};
