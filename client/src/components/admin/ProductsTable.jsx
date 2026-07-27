import { Link } from "react-router-dom";

import Card from "../ui/Card";

function ProductsTable({
  products,
  onDelete,
}) {
  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">

          <thead className="bg-slate-800">
            <tr>
              <th className="p-4 text-left text-white">
                Product
              </th>

              <th className="p-4 text-left text-white">
                Category
              </th>

              <th className="p-4 text-left text-white">
                Price
              </th>

              <th className="p-4 text-left text-white">
                Stock
              </th>

              <th className="p-4 text-center text-white">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>

            {products.map((product) => (
              <tr
                key={product._id}
                className="border-t border-slate-800"
              >

                <td className="p-4 text-white">
                  {product.name}
                </td>

                <td className="p-4 text-slate-300">
                  {product.category}
                </td>

                <td className="p-4 text-cyan-400">
                  ₹{product.price.toLocaleString()}
                </td>

                <td className="p-4 text-white">
                  {product.stock}
                </td>

                <td className="space-x-2 p-4 text-center">

                  <Link
                    to={`/admin/products/${product._id}/edit`}
                    className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      onDelete(product._id)
                    }
                    className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-400"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>
      </div>
    </Card>
  );
}

export default ProductsTable;