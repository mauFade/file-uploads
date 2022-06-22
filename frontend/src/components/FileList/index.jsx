import { Container, FileInfo, Preview } from "./styles";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

const index = ({ files }) => {
  return (
    <Container>
      {files.map((uploadedFile) => (
        <li key={uploadedFile.id}>
          <FileInfo>
            <Preview src={uploadedFile.preview} />
          </FileInfo>
          <div>
            <strong>{uploadedFile.name}</strong>
            <span>
              {uploadedFile.readableSize} {!!uploadedFile.url && <button>Excluir</button>}
            </span>
          </div>
          <div>
            {uploadedFile.url && (
              <a
                href="https://file-uploads-mau.s3-sa-east-1.amazonaws.com/799ee26b3ba343e529f47ea78467940e-photo.jpeg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
              </a>
            )}
            {uploadedFile.uploaded && <MdCheckCircle size={24} color="#78E5D5" />}
            {uploadedFile.error && <MdError size={24} color="#E57878" />}
          </div>
        </li>
      ))}
    </Container>
  );
};

export default index;
