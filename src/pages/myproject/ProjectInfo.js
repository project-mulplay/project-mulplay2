import React, { useState } from "react";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./ProjectInfo.css";

const ProjectInfo = ({number}) => {

  const savebtnstyle3 = {
    margin: "50px 60px",
    right: "260px",
    float: 'left',
    backgroundColor: "#fff",
    border: "1px solid #EE833E",
    color: "#EE833E",
    fontSize: "18px",
    fontWeight: "500",
    width: "184px",
    height: "50px",
    borderRadius: "15px",
    cursor: "pointer",
  };

  const [editorData, setEditorData] = useState(({
    prod_content: "",
    prod_no: number+1,
  }));

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    const cleanData = data.replace(/<[^>]+>/g, ''); // HTML 태그 제거
    setEditorData({
      ...editorData,
      prod_content: cleanData,
    });
    // console.log(cleanData);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // 여기에서 데이터를 제출하거나 원하는 작업을 수행합니다.

    
    console.log(editorData);


    try {
      const response = await axios.post('http://localhost:3300/make/projectcontent', editorData);

      console.log('요청 성공:', response);
    } catch (error) {
      console.log(editorData);
      console.error('요청 실패:', error);
    }
  };

  return (
    <>
      <div className="pro_editor">
        <h3 style={{ fontWeight: "600" }}>프로젝트 소개</h3>
        <p>프로젝트 상세페이지 내용을 작성해 주세요.</p>
        <CKEditor
          name="prod_content"
          value={editorData.prod_content}
          editor={ClassicEditor}
          config={{
            placeholder: "내용을 입력하세요.",
          }}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log({ event, editor, data });
            handleEditorChange(event, editor); // Set the editor data on change
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      <button style={savebtnstyle3} type="submit" className="btn_signup" onClick={handleSubmit}>저장하기</button>
      </div>
    </>
  );
};

export default ProjectInfo;
