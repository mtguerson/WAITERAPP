import { Container, Board, OrdersCotainer } from './styles';

export function Orders() {
  return (
    <Container>
      <Board>
        <header>
          <span>🕑</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>

        <OrdersCotainer>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
        </OrdersCotainer>
      </Board>

      <Board>
        <header>
          <span>🕑</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>

        <OrdersCotainer>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
        </OrdersCotainer>
      </Board>

      <Board>
        <header>
          <span>🕑</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>

        <OrdersCotainer>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
        </OrdersCotainer>
      </Board>
    </Container>
  );
}
