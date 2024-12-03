// import { createSignal } from "solid-js";

import { Slider } from "@ark-ui/solid/slider";

// export default function Slider() {
export const MySlider = () => {
  // const [count, setCount] = createSignal(0);

  return (
    <Slider.Root>
      <Slider.Label>Label</Slider.Label>
      <Slider.ValueText />
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  );
};
