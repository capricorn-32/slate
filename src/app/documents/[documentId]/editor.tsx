"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import StarterKit from "@tiptap/starter-kit";
import Table from "@tiptap/extension-table";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";

import { useEditorStore } from "@/store/use-editor-store";

export const Editor = () => {
  const { setEditor } = useEditorStore();
  const editor = useEditor({
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px",
        class:
          "focus:outline-none print:border-0 bg-white border border-[#c7c7c7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
      },
    },
    extensions: [
      StarterKit,
      TaskList,
      Table,
      TableHeader,
      TableCell,
      TableRow,
      Image,
      ImageResize,
      Underline,
      FontFamily,
      TextStyle,
      TaskItem.configure({
        nested: true,
      }),
    ],
    content: `
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th colspan="3">Description</th>
                </tr>
                <tr>
                  <td>Cyndi Lauper</td>
                  <td>Singer</td>
                  <td>Songwriter</td>
                  <td>Actress</td>
                </tr>
              </tbody>
            </table>

            <p><span style="font-family: Inter">Did you know that Inter is a really nice font for interfaces?</span></p>
                    <p><span style="font-family: Comic Sans MS, Comic Sans">It doesn’t look as professional as Comic Sans.</span></p>
                    <p><span style="font-family: serif">Serious people use serif fonts anyway.</span></p>
                    <p><span style="font-family: monospace">The cool kids can apply monospace fonts aswell.</span></p>
                    <p><span style="font-family: cursive">But hopefully we all can agree, that cursive fonts are the best.</span></p>
                    <p><span style="font-family: var(--title-font-family)">Then there are CSS variables, the new hotness.</span></p>
                    <p><span style="font-family: 'Exo 2'">TipTap even can handle exotic fonts as Exo 2.</span></p>
          `,
  });

  return (
    <div className="size-full overflow-x-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
