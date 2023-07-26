function CartList({ cart }) {
  return (
    <div>
      {cart.map((cartItem, cartIndex) => {
        return (
          <div>
            <img src={cartItem.url} width={40} />
            <span>{cartItem.name}</span>
            <span>{cartItem.price}</span>
          </div>
        );
      })}
    </div>
  );
}

export default CartList;
