import { ArrowRight } from "lucide-react";
import { Button } from "../../components/common/Button/Button.jsx";
import { Container } from "../../components/common/Container/Container.jsx";
import { usePageTitle } from "../../hooks/usePageTitle.js";

export function NotFound() {
  usePageTitle("Page Not Found", "The page you requested could not be found.");

  return (
    <section className="not-found">
      <Container className="not-found__inner">
        <p className="eyebrow">404</p>
        <h1>This page has not been baked yet.</h1>
        <p>The page you are looking for may have moved, or the link may need a little attention.</p>
        <Button to="/" variant="primary" icon={<ArrowRight size={18} />}>
          Return Home
        </Button>
      </Container>
    </section>
  );
}
