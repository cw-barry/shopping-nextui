import React, { useState } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';

export const ProductsUI = ({ products }) => {
  const [selecteds, setSelecteds] = useState([]);

  const handleClick = (id) => {
    if (!selecteds.includes(id)) {
      setSelecteds([...selecteds, id]);
    } else {
      setSelecteds(selecteds.filter((i) => i !== id));
    }
  };

  return (
    <Grid.Container
      gap={2}
      justify="flex-start"
      css={{ p: 0, m: 0, w: '100%' }}
    >
      {products.map((item, index) => (
        <Grid
          xs={6}
          sm={3}
          key={index}
          // onClick={() => handleClick(item.id)}
        >
          <Card
            isPressable
            style={
              selecteds.includes(item.id)
                ? { border: '2px solid red' }
                : { border: '' }
            }
          >
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                // src={item.thumbnail}
                src={item.images[0]}
                objectFit="cover"
                width="100%"
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: 'flex-start' }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.title}</Text>
                <Text
                  css={{
                    color: '$accents7',
                    fontWeight: '$semibold',
                    fontSize: '$sm',
                    paddingRight: '1.3rem',
                  }}
                >
                  $ {item.price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};
