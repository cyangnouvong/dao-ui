import Button from "./components/Button/Button";
import { useToast } from "./components/Toast/Toast";

const TestToast = () => {
  const { toast } = useToast();

  return (
    <Button onClick={() => toast("Test toast message", "error")}>
      TestToast
    </Button>
  );
};

export default TestToast;
