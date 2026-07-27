import Card from "../ui/Card";

function OrderProducts({ items }) {
  return (
    <Card className="p-8">

      <h2 className="mb-8 text-2xl font-bold text-white">
        Ordered Products
      </h2>

      <div className="space-y-6">

        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-slate-800 pb-6"
          >

            <div>

              <h3 className="text-lg font-semibold text-white">
                {item.name}
              </h3>

              <p className="mt-2 text-slate-400">
                Quantity : {item.quantity}
              </p>

            </div>

            <div className="text-right">

              <p className="text-lg font-semibold text-cyan-400">
                ₹{item.price.toLocaleString()}
              </p>

            </div>

          </div>
        ))}

      </div>

    </Card>
  );
}

export default OrderProducts;