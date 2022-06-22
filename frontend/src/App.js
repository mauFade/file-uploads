import { useState } from "react";
import Style from "./styles/global";

import { Content, Container } from "./styles";

import { uniqueId } from "lodash";
import fileSize from "filesize";

import Uploads from "./components/Uploads";
import FileList from "./components/FileList";

import api from "./services/api";

const App = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const processUpload = (uploaded) => {
    const data = new FormData();

    data.append("file", uploaded.file, uploaded.name);

    api
      .post("/posts", data)
      .then((response) => {
        response.data.data.uploaded = true;
      })
      .catch((response) => {
        response.data.data.error = true;
      });
  };

  const handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: fileSize(file.size),
      preview: URL.createObjectURL(file),
      uploaded: false,
      error: false,
      url: null,
    }));

    setUploadedFiles(uploadedFiles);

    uploadedFiles.forEach(processUpload);
  };
  return (
    <Container>
      <Content>
        <Uploads onUpload={handleUpload} />
        {!!uploadedFiles.length && <FileList files={uploadedFiles} />}
      </Content>
      <Style />
    </Container>
  );
};

export default App;
