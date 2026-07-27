import Card from "../ui/Card";

function DashboardCard({
  title,
  value,
  icon,
}) {
  return (
    <Card className="p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {value}
          </h2>

        </div>

        <div className="text-5xl">
          {icon}
        </div>

      </div>

    </Card>
  );
}

export default DashboardCard;