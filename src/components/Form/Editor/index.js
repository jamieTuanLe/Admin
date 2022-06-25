import React, { useEffect, useRef } from "react";
import Script from "next/script";
import * as S from "./styles";

const config = [
  "heading",
  "|",
  "bold",
  "italic",
  "link",
  "bulletedList",
  "numberedList",
  "outdent",
  "indent",
  "|",
  "ckfinder",
  "blockQuote",
  "insertTable",
  "mediaEmbed",
  "|",
  "undo",
  "redo",
];

const Editor = ({ onChange, editorLoaded, name, value, errors, ...rest }) => {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);

  return (
    <>
      {editorLoaded ? (
        <S.EditorWrapper>
          <CKEditor
            type=""
            name={name}
            config={{
              toolbar: config,
            }}
            editor={ClassicEditor}
            data={value}
            onChange={onChange}
          />
          <S.Error>{errors?.[name]}</S.Error>
        </S.EditorWrapper>
      ) : (
        <div>Editor loading</div>
      )}
      <Script
        src="https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.js"
        strategy="lazyOnload"
      ></Script>
    </>
  );
};

export default Editor;
