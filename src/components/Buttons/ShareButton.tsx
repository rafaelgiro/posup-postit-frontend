import { apiExport } from "../../utils/api";
import { ButtonProps } from "./interfaces";
import { ActionButton } from "./styles";

export const ShareButton = (props: ButtonProps) => {
  const { id } = props;

  async function handleShare() {
    try {
      const res = await apiExport.get(`/file/${id}`);
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "postit.txt");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ActionButton onClick={handleShare}>
      <svg
        width="22"
        height="20"
        viewBox="0 0 55 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.13598 42.4685L3.37598 39.8485L6.07598 25.6885L13.376 16.7885L23.516 12.2685L40.296 11.9685L39.596 0.928467L51.336 16.3685L50.976 22.8685L42.496 30.8085L37.136 28.8885L33.136 24.2485L19.116 28.4885L9.67598 33.5285L8.11598 44.7885"
          fill="black"
        />
        <path
          d="M2.79639 44.1685C1.79639 43.2085 1.75639 41.6285 2.53639 38.5685C3.29639 35.5085 5.97639 29.3885 7.37639 25.8085C8.77639 22.2285 7.83639 19.1285 10.9364 17.1085C14.0364 15.0885 22.5764 14.8685 26.0164 13.7285C29.4764 12.5685 29.1764 10.5485 31.6164 10.2285C34.0564 9.90848 39.5164 11.8085 40.6764 11.7685C41.8164 11.7485 38.6764 11.5885 38.4964 10.0685C38.3364 8.56848 39.1164 4.18848 39.6764 2.72848C40.2364 1.28848 40.8364 0.468484 41.8964 1.38848C42.9764 2.30848 44.7764 5.70849 46.0764 8.28849C47.3564 10.8685 48.3964 15.3085 49.6164 16.9085C50.8564 18.5285 54.3564 16.4485 53.3964 17.9485C52.4564 19.4485 46.3164 23.1485 43.8964 25.9485C41.4564 28.7485 39.8164 33.9085 38.8364 34.8085C37.8364 35.6885 38.0764 32.3085 37.9764 31.2885C37.8564 30.2685 38.2564 30.0485 38.1364 28.7085C37.9964 27.3685 38.9964 24.2085 37.1964 23.2885C35.3964 22.3685 30.7964 23.2085 27.3364 23.1285C23.8764 23.0685 19.5164 21.6485 16.4564 22.9085C13.4164 24.1485 10.4764 27.9085 9.01639 30.6485C7.55639 33.3685 7.61639 36.5085 7.69639 39.2885C7.75639 42.0885 9.99639 45.8085 9.41639 47.3285M5.95639 45.7885C5.29639 44.3885 4.47639 39.4285 3.89639 35.6685C3.29639 31.9285 1.15639 26.7285 2.37639 23.3485C3.61639 19.9485 7.83639 17.1285 11.2364 15.3485C14.6164 13.5485 18.6764 13.0885 22.7164 12.5885C26.7564 12.0885 32.8164 12.1085 35.4764 12.3085C38.1564 12.4885 38.0364 14.1085 38.7164 13.7085C39.4164 13.3085 39.9764 11.2685 39.6164 9.86848C39.2564 8.46848 36.4764 6.42848 36.5964 5.30848C36.7164 4.18848 39.0364 2.86848 40.3564 3.10848C41.6964 3.36848 42.5964 4.48848 44.5964 6.84848C46.5964 9.20848 51.0364 15.1285 52.3564 17.2885C53.6964 19.4285 53.7164 18.2685 52.6164 19.7685C51.4964 21.2685 47.9564 24.6285 45.7164 26.2485C43.4764 27.8685 40.7164 28.9485 39.1964 29.4885C37.6764 30.0085 36.5564 29.9285 36.5964 29.4285C36.6564 28.9485 39.1964 27.6085 39.5364 26.5485C39.8564 25.5085 40.1764 23.6285 38.5564 23.0885C36.9364 22.5485 33.5564 22.7285 29.7764 23.2685C25.9764 23.8085 19.0764 24.8485 15.8564 26.3685C12.6164 27.8885 11.8164 29.9085 10.3364 32.3885C8.85639 34.8885 7.27639 39.5485 6.95639 41.2885C6.63639 43.0285 8.29639 42.4485 8.39639 42.8085L5.95639 45.7885Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </ActionButton>
  );
};
