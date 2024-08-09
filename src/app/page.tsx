import BarChart from "@/components/BarChart";
import CardComp ,  { CardContent, CardProps} from "@/components/CardComp";
import PageTitle from "@/components/PageTitle";
import SalesCard from "@/components/SalesCard";
import { userSalesData } from "@/constant/graphData";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Image from "next/image";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    description: "+180.1% from last month",
    icon: Users
  },
  {
    label: "Sales",
    amount: "+12,234",
    description: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "+573",
    description: "+201 since last hour",
    icon: Activity
  }
];

export default function Page() {
  return (
    <div className="flex flex-col gap-5  w-full">
    <PageTitle title={"Dashboard"} />
    <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <CardComp
            key={i}
            amount={d.amount}
            description={d.description}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 transition-all gap-4">
<CardContent >
<p className="p-4 font-semibold"> Overview</p>
<BarChart/>
</CardContent>
<CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section>
          {userSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
