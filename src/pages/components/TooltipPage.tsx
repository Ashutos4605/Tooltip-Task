import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
  const basicUsageCode = `import { Tooltip } from "@/components/Tooltip/Tooltip"
import { Button } from "@/components/Button/Button"

<Tooltip content="This is a tooltip!" position="top" variant="dark">
  <Button variant="primary" hoverAnimation="none" size="sm">Hover me (Top)</Button>
</Tooltip>

<Tooltip content="Bottom tooltip" position="bottom" variant="light">
  <Button variant="secondary" hoverAnimation="none" size="sm">Hover me (Bottom)</Button>
</Tooltip>

<Tooltip content="Left tooltip" position="left" variant="primary">
  <Button variant="outline" hoverAnimation="none" size="sm">Hover me (Left)</Button>
</Tooltip>

<Tooltip content="Right tooltip" position="right" variant="dark">
  <Button variant="dark" hoverAnimation="none" size="sm">Hover me (Right)</Button>
</Tooltip>`;

  const variantsCode = `import { Tooltip } from "@/components/Tooltip/Tooltip"
import { Button } from "@/components/Button/Button"

<Tooltip content="Dark variant" variant="dark">
  <Button variant="dark" hoverAnimation="none" size="sm">Dark</Button>
</Tooltip>

<Tooltip content="Light variant" variant="light">
  <Button variant="outline" hoverAnimation="none" size="sm">Light</Button>
</Tooltip>

<Tooltip content="Primary variant" variant="primary">
  <Button variant="primary" hoverAnimation="none" size="sm">Primary</Button>
</Tooltip>`;

  const sizesCode = `import { Tooltip } from "@/components/Tooltip/Tooltip"
import { Button } from "@/components/Button/Button"

<Tooltip content="Small tooltip" size="sm" variant="dark">
  <Button variant="primary" hoverAnimation="none" size="sm">Small</Button>
</Tooltip>

<Tooltip content="Medium tooltip" size="md" variant="dark">
  <Button variant="primary" hoverAnimation="none" size="sm">Medium</Button>
</Tooltip>

<Tooltip content="Large tooltip" size="lg" variant="dark">
  <Button variant="primary" hoverAnimation="none" size="sm">Large</Button>
</Tooltip>`;

  const propsData = [
    {
      prop: "content",
      type: "string",
      default: "-",
      description: "The text content displayed inside the tooltip",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Position of the tooltip relative to the trigger element",
    },
    {
      prop: "variant",
      type: '"dark" | "light" | "primary"',
      default: '"dark"',
      description: "The visual style variant of the tooltip",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "The size of the tooltip text and padding",
    },
    {
      prop: "delay",
      type: "number",
      default: "200",
      description: "Delay in milliseconds before the tooltip appears",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"fadeIn"',
      description: "Entrance animation when the tooltip appears",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description:
        "If true, renders the wrapper as a different element using Radix Slot",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "The trigger element that the tooltip wraps around",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-lg text-gray-600">
          A popup that displays information related to an element when the
          element receives hover focus.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={basicUsageCode}>
          <div className="flex gap-6 flex-wrap">
            <Tooltip
              content="This is a tooltip!"
              position="top"
              variant="dark"
            >
              <Button variant="primary" hoverAnimation="none" size="sm">
                Hover me (Top)
              </Button>
            </Tooltip>
            <Tooltip
              content="Bottom tooltip"
              position="bottom"
              variant="light"
            >
              <Button variant="secondary" hoverAnimation="none" size="sm">
                Hover me (Bottom)
              </Button>
            </Tooltip>
            <Tooltip
              content="Left tooltip"
              position="left"
              variant="primary"
            >
              <Button variant="outline" hoverAnimation="none" size="sm">
                Hover me (Left)
              </Button>
            </Tooltip>
            <Tooltip
              content="Right tooltip"
              position="right"
              variant="dark"
            >
              <Button variant="dark" hoverAnimation="none" size="sm">
                Hover me (Right)
              </Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Variants</h2>
        <ComponentDemo code={variantsCode}>
          <div className="flex gap-6 flex-wrap">
            <Tooltip content="Dark variant" variant="dark">
              <Button variant="dark" hoverAnimation="none" size="sm">
                Dark
              </Button>
            </Tooltip>
            <Tooltip content="Light variant" variant="light">
              <Button variant="outline" hoverAnimation="none" size="sm">
                Light
              </Button>
            </Tooltip>
            <Tooltip content="Primary variant" variant="primary">
              <Button variant="primary" hoverAnimation="none" size="sm">
                Primary
              </Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sizes</h2>
        <ComponentDemo code={sizesCode}>
          <div className="flex gap-6 flex-wrap">
            <Tooltip content="Small tooltip" size="sm" variant="dark">
              <Button variant="primary" hoverAnimation="none" size="sm">
                Small
              </Button>
            </Tooltip>
            <Tooltip content="Medium tooltip" size="md" variant="dark">
              <Button variant="primary" hoverAnimation="none" size="sm">
                Medium
              </Button>
            </Tooltip>
            <Tooltip content="Large tooltip" size="lg" variant="dark">
              <Button variant="primary" hoverAnimation="none" size="sm">
                Large
              </Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;
