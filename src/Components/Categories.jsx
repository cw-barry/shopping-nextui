import React from 'react';
import { Button, Grid } from '@nextui-org/react';

const Categories = ({ categories, handleFilter }) => {
  return (
    <>
      <Grid.Container>
        <Grid xs={12} justify="center">
          <Button.Group color="warning" flat size="xs" auto>
            {categories.map((item, index) => (
              <Button
                key={index}
                onPress={() => handleFilter(categories[index])}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Button>
            ))}
          </Button.Group>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Categories;
