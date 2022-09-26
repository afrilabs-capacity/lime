import LeftNav from "../components/layout/left-nav.js";
import RightNav from "../components/layout/right-nav.js";
import Footer from "../components/layout/footer.js";
import WidetEditor from "../components/modals/widget-editor-modal.js";
import WidetPreview from "../components/modals/widget-preview-modal.js";
import Header from "../components/layout/header";

function Master({ component }) {
  return (
    <div className="">
      <div className="grid md:grid-cols-5 h-full bg-repeat AsideBackground">
        <LeftNav />
        <main className="MainBackground col-span-4">
          <Header />
          {component}
        </main>
      </div>

      <Footer />
      <WidetEditor />
      <WidetPreview />
    </div>
  );
}

export default Master;
