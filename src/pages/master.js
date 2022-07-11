import LeftNav from "../components/layout/left-nav.js";
import RightNav from "../components/layout/right-nav.js";
import Footer from "../components/layout/footer.js";
import WidetEditor from "../components/modals/widget-editor-modal.js";
import WidetPreview from "../components/modals/widget-preview-modal.js";

function Master({ component }) {
  return (
    <div className="">
      <div className="grid md:grid-cols-5 h-full">
        <LeftNav />
        <main className="MainBackground col-span-4">{component}</main>
      </div>

      <Footer />
      <WidetEditor />
      <WidetPreview />
    </div>
  );
}

export default Master;
