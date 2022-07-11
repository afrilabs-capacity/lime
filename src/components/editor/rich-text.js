import { Editor } from "@tinymce/tinymce-react";
import { useBuilderStore } from "../../stores/builder";
import { useState, useEffect } from "react";
import { getWidgetIndex } from "../../utils/helper-functions";

export default function RichText() {
  const {
    hideWidgetEditorModal,
    widgetEditorModal,
    currentEditingWidget,
    updateWidgetField,
    widgets,
  } = useBuilderStore((state) => state);

  const widgetIndex = getWidgetIndex(currentEditingWidget, widgets);

  return (
    <>
      <h5 className="m-1">Display Label</h5>

      <Editor
        apiKey="mymryl9rtn2npjz2vhp3yovdx2of4phahbqil1sq29upca83"
        value={currentEditingWidget && widgets[widgetIndex].label}
        init={{
          height: 250,
          menubar: false,
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
          ],
          toolbar:
            "gallery | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  table | print preview ",
          file_browser_callback_types: "image",
          content_style: "img { width:100%}",
          image_dimensions: false,
          image_class_list: [{ title: "None", value: "mce-responsive" }],
          contextmenu: "link image table",
          paste_data_images: true,
        }}
        onEditorChange={(e) =>
          currentEditingWidget ? updateWidgetField("label", e) : null
        }
      />
    </>
  );
}
