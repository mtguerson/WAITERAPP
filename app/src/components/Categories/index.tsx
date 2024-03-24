import { Category, Icon } from './styles';
import { Text } from '../Text';

import { categories } from '../../mocks/categories';

export function Categories() {
  return (
    categories.map((category) => {
      return (
        <Category key={category._id}>
          <Icon>
            <Text>{category.icon}</Text>
          </Icon>

          <Text>{category.name}</Text>
        </Category>
      );
    })
  );
}
