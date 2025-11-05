import { useState, useEffect } from "react";

export default function Gallery() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/certification')
      .then(res => res.json())
      .then(setItems)
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {items.map((item) => (
        <img
          key={item.id}
          src={item.image || item.images?.[0]}
          alt={item.name}
          style={{ width: "200px" }}
        />
      ))}
    </div>
  );
}
