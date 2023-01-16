export const calculateTotals = (suggestions) => {
  const totalSelected = 0;
  const totalPrice = 0;
  suggestions?.forEach((suggestion) => {
    let totalSku = 0;
    totalSku = suggestion.selected.reduce(
      (a, b) => ({
        price: a.price + b.price,
      }),
      { price: 0 }
    );
    totalPrice = totalPrice + totalSku.price;
    totalSelected = totalSelected + suggestion.selected.length;
  });

  return { totalSelected, totalPrice };
};
