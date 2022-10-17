import { Input, Spacer } from '@nextui-org/react';
import { useState } from 'react';
export default function Search({ data, setProducts }) {
  const [query, setQuery] = useState('');
  return (
    <>
      <Spacer y={1} />
      <Input
        clearable
        bordered
        size="sm"
        labelPlaceholder="Search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          const temp = data.filter((item) =>
            item.title.includes(e.target.value)
          );
          console.log(temp);
          setProducts(
            data.filter((item) =>
              item.title.toLowerCase().includes(e.target.value.toLowerCase())
            )
          );
        }}
      />
      <Spacer y={0.5} />
    </>
  );
}
