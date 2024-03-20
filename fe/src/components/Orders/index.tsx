import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
		"_id": "65fa3e96cbb38ef3a0279001",
		"table": "7",
		"status": "WAITING",
		"products": [
			{
				"product": {
          "name": "Pizza quatro queijos",
          "imagePath": "1710896986309-quatro-queijos.png",
          "price": 40,
				},
				"quantity": 3,
				"_id": "65fa3e96cbb38ef3a0279002"
			},
			{
				"product": {
					"name": "Coca Cola",
					"imagePath": "1710897811047-coca-cola.png",
					"price": 6,
				},
				"quantity": 3,
				"_id": "65fa3e96cbb38ef3a0279003"
			}
		],
	}
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container >
  );
}
