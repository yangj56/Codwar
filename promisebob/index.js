function submitOrder(user) {
    return Promise.all([
        OrderAPI.getShoppingCartAsync(user),
        CustomerAPI.getProfileAsync(user).then((p) => p.zipCode),
    ])
        .then(([shoppingCart, zipCode]) =>
            OrderAPI.placeOrderAsync(
                shoppingCart,
                calculateShipping(shoppingCart, zipCode)
            )
        )
        .then((orderSuccessful) => {
            console.log(
                `Your order ${
                    orderSuccessful ? "was" : "was NOT"
                } placed successfully`
            );
        });
}
