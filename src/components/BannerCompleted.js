import "./BannerCompleted.css";
import BannerInfo from "./BannerInfo";

const BannerCompleted = () => {
  return (
    <>
      <BannerInfo
        name={"30PRAUM"}
        info={
          "30PRAUM é um selo fonográfico e produtora musical cearense de rap e trap brasileiro fundado em 2014 pela diretora executiva Clara Mendes e pelo rapper Matuê."
        }
      />
      <BannerInfo
        name={"Mainstreet"}
        info={
          "Desde que foi fundada, em 2020, pelo Trapper Orochi, a gravadora carioca Mainstreet Records tornou-se um expoente do rap brasileiro ao explorar parcerias do trap com o funk carioca."
        }
      />
      <BannerInfo
        name={"NADAMAL"}
        info={
          "Produtora de Filipe Ret, tem o objetivo de se tornar uma das maiores gravadoras do Rap nacional. O artista já é um dos maiores nomes do rap nacional, mas ele não se contenta apenas com isso. A gravadora conta com nomes como: Caio Luccas, TZ da Coronel, PJ Houdini..."
        }
      />
    </>
  );
};

export default BannerCompleted;
