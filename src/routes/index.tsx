import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashutosh Palhare — IT Professional & Developer" },
      { name: "description", content: "Versatile IT professional crafting web, mobile, security and design solutions." },
      { property: "og:title", content: "Ashutosh Palhare — Portfolio" },
      { property: "og:description", content: "Versatile IT professional crafting web, mobile, security and design solutions." },
    ],
  }),
  component: Index,
});

function Index() {
  return <Portfolio />;
}
