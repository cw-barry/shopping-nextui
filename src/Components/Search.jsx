import { Input, Spacer, Grid, Text } from '@nextui-org/react';
import { useEffect } from 'react';
import { useState } from 'react';
export default function Search({
  data,
  setProducts,
  price,
  setPrice,
  filter,
  setFilter,
}) {
  const [query, setQuery] = useState('');
  // const [price, setPrice] = useState({});
  const handlePrice = (e) => {
    setPrice({ ...price, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log('price update');
    setFilter({ ...filter, min: price?.min || 0, max: price?.max || 100000 });
    // setProducts(
    //   data.filter(
    //     (item) =>
    //       item.price > (price?.min || 0) && item.price < (price?.max || 100000)
    //   )
    // );
  }, [price]);

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
          setFilter({ ...filter, search: e.target.value });
          // setProducts(
          //   data.filter((item) =>
          //     item.title.toLowerCase().includes(e.target.value.toLowerCase())
          //   )
          // );
        }}
      />
      <Spacer y={0.5} />
      <Grid.Container gap={1}>
        <Grid>
          <Text h5>Price</Text>
        </Grid>
        <Grid direction="column">
          <Input
            type="number"
            underlined
            placeholder="min"
            color="default"
            size="sm"
            aria-label="min"
            min={0}
            step={10}
            onChange={handlePrice}
            name="min"
            value={price?.min || ''}
          />
          <Input
            name="max"
            onChange={handlePrice}
            step={10}
            min={0}
            type="number"
            underlined
            placeholder="max"
            color="primary"
            size="sm"
            aria-label="max"
            value={price?.max || ''}
          />
        </Grid>
      </Grid.Container>
    </>
  );
}
