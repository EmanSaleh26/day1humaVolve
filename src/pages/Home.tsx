import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Table from "../components/ui/Table";

const students = [
  { Name: "Eman", Age: 22, City: "Cairo" },
  { Name: "Sara", Age: 24, City: "Giza" },
  { Name: "Omar", Age: 23, City: "Aswan" },
];

export default function Home() {
  return (
    <div className="p-6 flex flex-col gap-10">
      <div>
        <h1 className="text-2xl font-bold">Reusable Components Demo</h1>

      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Buttons</h2>
        <div className="flex gap-3">
          <Button text="Save" variant="primary" onClick={() => alert("Saved!")} />
          <Button text="Cancel" variant="secondary" onClick={() => alert("Cancelled")} />
          <Button text="Delete" variant="danger" disabled onClick={() => alert("Deleted")} />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Cards</h2>
        <div className="flex flex-wrap gap-4">
         
          <Card
  title="React"
  description="A JavaScript library for building user interfaces."
  image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
/>
<Card
  title="TypeScript"
  description="A typed superset of JavaScript."
  image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
>
  <Button text="Learn More" variant="primary" onClick={() => alert("Learning...")} />
</Card>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Students</h2>
        <Table columns={["Name", "Age", "City"]} data={students} striped />
      </section>
    </div>
  );
}