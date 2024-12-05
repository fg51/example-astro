import { type Component, mergeProps, splitProps } from "solid-js";
import { css } from "styled-system/css";

import "./button.css";
import { ArrowRightIcon } from "lucide-solid";

import { Button as RawButton } from "../../src/components/ui/button";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: Component<ButtonProps> = (props) => {
  props = mergeProps({ size: "small" as ButtonProps["size"] }, props);
  const [local, rest] = splitProps(props, [
    "primary",
    "size",
    "backgroundColor",
    "label",
  ]);

  //const className = css({ color: "black", border: "3px solid" });
  const className = css({ border: "solid" });

  const primaryButton = css({
    //backgroundColor: "#1ea7fd",
    color: "indigo",
  });

  const secondaryButton = css({
    //color: "blue",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
    backgroundColor: "transparent",
    color: "#333",
  });

  //.storybook-button--small {
  const smallButton = css({
    //fontSize: "12px",
    fontSize: "sm",
  });
  //  padding: 10px 16px;
  //  font-size: 12px;
  //}

  //.storybook-button--medium {
  const mediumButton = css({
    fontSize: "md",
  });
  //  padding: 11px 20px;
  //  font-size: 14px;
  //}

  //.storybook-button--large {
  const largeButton = css({
    //  padding: 12px 24px;
    //fontSize: "16px",
    fontSize: "lg",
  });

  return (
    <RawButton
      {...rest}
      class={className}
      //colorPalette="indigo"
      variant="subtle"
      //variant="solid"
      //variant="outline"
      classList={{
        [smallButton]: local.size === "small",
        [mediumButton]: local.size === "medium",
        [largeButton]: local.size === "large",
        //"storybook-button": true,
        [primaryButton]: local.primary === true,
        [secondaryButton]: local.primary === false,
      }}
      style={{ "background-color": local.backgroundColor }}
    >
      {local.label}
      <ArrowRightIcon />
    </RawButton>
  );
};
