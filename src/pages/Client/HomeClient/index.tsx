import axios from "axios";
import { useEffect, useState } from "react";
import JSZip from "jszip";

type LogFiles = {
  name: string;
  content: string;
};

export default function HomeClient() {
  const [logFiles, setLogFiles] = useState<LogFiles[]>([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const owner = "rafaelsulimann";
      const repo = "spring-backstage-test";
      const runId = "8149283929";
      const token = "zzzzz";

      const url = `https://api.github.com/repos/${owner}/${repo}/actions/runs/${runId}/logs`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
          },
          responseType: "arraybuffer", // Resposta como um array buffer para arquivos binários
        });

        const zip = new JSZip();
        const zipContents = await zip.loadAsync(response.data);
        const filesArray = [];

        // Itera somente sobre os arquivos dentro da pasta 'build_and_push'
        for (const [filename, fileData] of Object.entries(zipContents.files)) {
          if (!fileData.dir && filename.startsWith("build_and_push/")) {
            const content = await fileData.async("string");
            // Cria um objeto com o nome do arquivo e seu conteúdo
            filesArray.push({
              name: filename.replace("build_and_push/", ""), // Remove o caminho da pasta para obter apenas o nome do arquivo
              content: content,
            });
          }
        }

        setLogFiles(filesArray); // Atualiza o estado com o array de arquivos
      } catch (error) {
        console.error("Falha ao obter os logs", error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      {logFiles.map((file, index) => (
        <div key={index}>
          <h2>{file.name}</h2>
          <pre>{file.content}</pre>
        </div>
      ))}
    </div>
  );
}
