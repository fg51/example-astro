import { createSignal } from "solid-js";
import { ArrowRightIcon } from "lucide-solid";

import { Button } from "~/components/ui/button";

export default function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    // <Button variant="solid" onClick={() => setCount(count() + 1)}>
    <Button variant="subtle" onClick={() => setCount(count() + 1)}>
      <ArrowRightIcon />
      Clicks: {count()}
    </Button>
  );
}
