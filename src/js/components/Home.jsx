import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NavbarWeb } from "./nav.jsx";
import Footer from "./Footer.jsx";
import { HeroBar } from "./Hero.jsx";
import { CardContent } from "./Cards.jsx";

//create your first component
const Home = () => {
    const data = [{
        imgUrl: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=1200,height=675/catalog/crunchyroll/0d6ab170084ea3a605e149673c591c7d.jpg",
        title: "Taichi y Agumon",
        description: "Tai Kamiya y Agumon son el dúo más icónico de Digimon Adventure, unidos por el coraje, la lealtad y una amistad inquebrantable. Tai, como líder nato, siempre está dispuesto a arriesgarse por sus amigos, y Agumon lo sigue con total confianza, enfrentando juntos los mayores desafíos del Mundo Digital. Su vínculo es tan fuerte que impulsa a Agumon a digievolucionar en el poderoso Greymon y más allá, desatando un verdadero fuego de valor cada vez que el peligro acecha. Juntos, son el corazón y el escudo del equipo.",
        btnText: "Read more"
    }, {
        imgUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea914385-70d7-476d-aa3b-37d0c449c464/dep83uw-3bc7a2b7-8623-4c3e-a53c-fef6606b110f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VhOTE0Mzg1LTcwZDctNDc2ZC1hYTNiLTM3ZDBjNDQ5YzQ2NFwvZGVwODN1dy0zYmM3YTJiNy04NjIzLTRjM2UtYTUzYy1mZWY2NjA2YjExMGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.E1o20IqtBU66tmAgjyaF_kj_EtI59NPih8-MtPB0pLc",
        title: "Sora y Biyomon",
        description: "Sora Takenouchi y Biyomon comparten un lazo profundo basado en el cuidado, la empatía y el amor verdadero. Desde el inicio de Digimon Adventure, Biyomon demuestra una devoción inquebrantable por Sora, viéndola no solo como una compañera, sino como parte de su familia. Aunque Sora al principio duda de su capacidad para amar, gracias a Biyomon descubre el valor de sus sentimientos y el poder de proteger a quienes le importan. Juntas, enfrentan cada desafío con fuerza y ternura, demostrando que el amor es una de las armas más poderosas del Mundo Digital.",
        btnText: "Read more"
    }, {
        imgUrl: "https://static.anime21.blog.br/2021/07/imagem-1-4.png",
        title: "T.K y Patamon",
        description: "T.K. Takaishi y Patamon forman uno de los vínculos más entrañables en Digimon Adventure. Unidos por la pureza de la esperanza, su amistad está llena de ternura, confianza y valentía. Aunque T.K. es el más pequeño del grupo, su corazón es fuerte, y Patamon siempre está a su lado para protegerlo. Juntos han vivido momentos de alegría y dolor, incluyendo sacrificios que marcaron a toda una generación. La evolución de Patamon en Angemon es símbolo del poder que nace cuando la esperanza nunca se pierde.",
        btnText: "Read more"
    }, {
        imgUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dbdd7c05-9d1a-4453-a11f-adb581b10004/ded2wsa-29be396d-0881-4cbb-b3e2-d92f8cb0ea3d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RiZGQ3YzA1LTlkMWEtNDQ1My1hMTFmLWFkYjU4MWIxMDAwNFwvZGVkMndzYS0yOWJlMzk2ZC0wODgxLTRjYmItYjNlMi1kOTJmOGNiMGVhM2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.keVblO-jQ0m1NMNcxW8SrrN-IKqwPnZssEt1IeBxRzY",
        title: "Kari y Gatomon",
        description: "Kari Kamiya y Gatomon comparten una conexión profunda marcada por la compasión, la luz interior y la redención. Kari, portadora del emblema de la Luz, irradia bondad y sensibilidad, cualidades que logran tocar el corazón de Gatomon, quien inicialmente servía al mal. Su encuentro transforma a Gatomon, revelando su verdadera naturaleza y permitiendo que florezca una amistad poderosa y sincera. Juntas, demuestran que incluso en la oscuridad más profunda, una chispa de luz puede guiar el camino hacia la esperanza y la evolución.",
        btnText: "Read more"
    }]
    return (
        <>
            <NavbarWeb />
            <div className="container">
                <HeroBar />
                <div className="row d-flex justify-content-around align-items-stretch">
                {data.map((el, index) => <CardContent imgUrl={el.imgUrl} title={el.title} description={el.description} btnText={el.btnText} />)}
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Home;