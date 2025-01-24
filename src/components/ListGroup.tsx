import "bootstrap";
import { useState } from "react";

interface List {
  items: string[];
  heading: string;
  onSelect: (item: string) => void;
}

function ListGroup({ items, heading, onSelect }: List) {
  const [SelectIndex, SetSelectIndex] = useState(-1);

  return (
    <>
      <h1> {heading}</h1>
      {items.length === 0 && <p>Nothing Here</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              SelectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              SetSelectIndex(index);
              onSelect(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
