import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <h1>Hello world</h1>
      <Button>Click</Button>
      <Input placeholder="Bora fechar esse projeto!" />
    </div>
  );
};

export default HomePage;
