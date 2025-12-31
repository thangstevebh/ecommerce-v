import { Footer } from "@/components/app/footer";
import { Header } from "@/components/app/header";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  head: () => ({
    meta: [
      { title: "Ecommerce app" },
      { name: "description", content: "This is ecommerce app description" },
    ],
  }),
  component: RouteComponent,
  notFoundComponent: () => {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>404 - Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    );
  },
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
