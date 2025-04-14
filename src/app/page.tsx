import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button>Touch me</Button>
      Click <Link href="/documents">here</Link>
    </div>
  );
};

export default Home;
