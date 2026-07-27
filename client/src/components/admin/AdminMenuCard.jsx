import { Link } from "react-router-dom";

import Card from "../ui/Card";

function AdminMenuCard({
  title,
  description,
  icon,
  to,
}) {
  return (
    <Link to={to}>
      <Card className="p-6 transition-all duration-300 hover:scale-[1.02]">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-xl font-bold text-white">
              {title}
            </h2>

            <p className="mt-2 text-slate-400">
              {description}
            </p>

          </div>

          <div className="text-5xl">
            {icon}
          </div>

        </div>

      </Card>
    </Link>
  );
}

export default AdminMenuCard;