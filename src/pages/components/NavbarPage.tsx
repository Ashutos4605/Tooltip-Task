import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  const lightUsageCode = `import { Navbar } from "@/components/navbar"

<Navbar
  variant="light"
  size="default"
  animation="fadeIn"
  hoverAnimation="none"
/>`;

  const darkUsageCode = `import { Navbar } from "@/components/navbar"

<Navbar
  variant="dark"
  size="default"
  animation="slideUp"
  hoverAnimation="none"
/>`;

  const primaryUsageCode = `import { Navbar } from "@/components/navbar"

<Navbar
  variant="primary"
  size="lg"
  animation="scaleIn"
  hoverAnimation="scale"
/>`;

  const glassUsageCode = `import { Navbar } from "@/components/navbar"

<Navbar
  variant="glass"
  size="default"
  animation="fadeIn"
  hoverAnimation="none"
/>`;

  const propsData = [
    {
      prop: "variant",
      type: '"dark" | "light" | "primary" | "glass"',
      default: '"light"',
      description: "The visual style variant of the navbar",
    },
    {
      prop: "size",
      type: '"default" | "sm" | "lg" | "xl"',
      default: '"default"',
      description: "The height of the navbar",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"fadeIn"',
      description: "Entrance animation when the navbar mounts",
    },
    {
      prop: "hoverAnimation",
      type: '"jiggle" | "scale" | "bounce" | "none"',
      default: '"none"',
      description: "Hover animation effect on the navbar",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description:
        "If true, renders the Navbar as a different element using Radix Slot",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description: "Additional custom class names for extended styling",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Navbar</h1>
        <p className="text-lg text-gray-600">
          A responsive navigation bar component with multiple variants and
          GSAP-powered animations.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <div className="flex flex-col gap-10">
          <ComponentDemo code={lightUsageCode}>
            <div className="w-full">
              <Navbar variant="light" size="default" animation="fadeIn" hoverAnimation="none" />
            </div>
          </ComponentDemo>

          <ComponentDemo code={darkUsageCode}>
            <div className="w-full">
              <Navbar variant="dark" size="default" animation="slideUp" hoverAnimation="none" />
            </div>
          </ComponentDemo>

          <ComponentDemo code={primaryUsageCode}>
            <div className="w-full">
              <Navbar variant="primary" size="lg" animation="scaleIn" hoverAnimation="scale" />
            </div>
          </ComponentDemo>

          <ComponentDemo code={glassUsageCode}>
            <div className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
              <Navbar variant="glass" size="default" animation="fadeIn" hoverAnimation="none" />
            </div>
          </ComponentDemo>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default NavbarPage;
