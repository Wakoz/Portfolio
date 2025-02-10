import { FaDownload } from "react-icons/fa";

const CVDownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv_julien_cartron.pdf";
    link.download = "Julien_Cartron_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="contact-link cv-download-link"
    >
      <FaDownload className="cv-download-icon" />
      Télécharger mon CV
    </button>
  );
};

export default CVDownloadButton;
