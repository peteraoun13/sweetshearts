import { BrowserRouter } from "react-router-dom";
import { PageLayout } from "./components/layout/PageLayout/PageLayout.jsx";
import { ScrollToTop } from "./components/common/ScrollToTop/ScrollToTop.jsx";
import { AppRoutes } from "./routes/AppRoutes.jsx";

export default function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <ScrollToTop />
      <PageLayout>
        <AppRoutes />
      </PageLayout>
    </BrowserRouter>
  );
}
