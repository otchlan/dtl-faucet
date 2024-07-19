import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Footer from "@/components/footer";
import LeftSection from "@/components/Top2div";
import ThreeSection from "@/components/Mid3div";
import OneSection from "@/components/OneDiv";
import { useState } from "react";

export default function Home() {
  const googleFormsUrl = "https://docs.google.com/forms/d/1o_NE4BSQHW9slFZs7uQFpafcJa4Rs2OxA9a4bYqinAI/prefill";
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <div>
      <LeftSection
        leftContent={
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <img
              src="/hak.png"
              alt="Image Description"
              style={{
                maxWidth: "70%",
                maxHeight: "70%",
                objectFit: "contain",
                maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
              }}
            />
          </div>
        }
        rightContent={
          <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <span style={{ color: "white", fontWeight: "bold" }}>Chcesz przekształcić swoje umiejętności w czyste złoto?<br /><br /></span>
            <span style={{ color: "grey" }}>Gotowy/a na wyzwanie alchemii XXI wieku?<br /></span>
            <span style={{ color: "grey" }}>Dołącz do naszego hakatonu i zmieniaj świat za pomocą kodu!<br /></span>
            <span style={{ color: "grey" }}>Wybierz jedną z dwóch ścieżek tematycznych, przemieniaj dane w wartościowe informacje i walcz o atrakcyjne nagrody.<br /></span>
            <span style={{ color: "grey" }}>Czy potrafisz wspiąć się na szczyt naszego rankingu? Zapisz się do naszego newslettera, aby otrzymywać najnowsze informacje, i obserwuj nas na Instagramie!<br /></span>
            <br />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <a href={googleFormsUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", margin: "8px" }}>
                <button style={{ padding: "8px", color: "black", border: "2px solid grey", borderRadius: "4px", backgroundColor: "#08fc9c" }}>
                  Zapisz się na newsletter
                </button>
              </a>
              <a href="https://www.instagram.com/centrum_si" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", margin: "8px" }}>
                <button style={{ padding: "8px", color: "black", border: "2px solid grey", borderRadius: "4px", backgroundColor: "#08fc9c" }}>
                  Instagram
                </button>
              </a>
              {isButtonClicked ? (
                <span style={{ padding: "8px", margin: "8px", color: "black", border: "2px solid grey", borderRadius: "4px", backgroundColor: "#08fc9c" }}>
                  centrumsi@deeptechlabs.pl
                </span>
              ) : (
                <button onClick={() => setIsButtonClicked(true)} style={{ padding: "8px", margin: "8px", color: "black", border: "2px solid grey", borderRadius: "4px", backgroundColor: "#08fc9c" }}>
                  Napisz do nas
                </button>
              )}
            </div>
          </div>
        }
      />

      <LeftSection
        leftContent={
          <div style={{ position: "relative", height: "100%", width: "100%" }}>
            <img
              src="/alchemist.png"
              alt="Image Description"
              style={{
                padding: "10%",
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        }
        rightContent={
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', textAlign: 'center' }}>
           Nasze ścieżki tematyczne "Alchemiczna Transmutacja Zadań" i "Przeobrażenie Kodu" są jak dwa różne eliksiry, każdy z nich oferuje unikalne doświadczenie. "Alchemia Danych" skupia się na odkrywaniu złota wśród surowych danych za pomocą Sztucznej Inteligencji, podczas gdy "Przeobrażenie Kodu" zaprasza do tworzenia innowacyjnych rozwiązań SI. Czy jesteś mistrzem kodowania czy dopiero zaczynasz, odkryjesz magię swoich umiejętności na tych ścieżkach.
         </div>
        }
      />

      <LeftSection
        leftContent={
          <div style={{ height: "100%", width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", height: "100%", flexDirection: "column", textAlign: "center" }}>
              <span style={{ color: "white", fontWeight: "bold", marginBottom: "10px" }}>Przemiana Chaosu</span>
              <img
                src="/alchemik_z1.png"
                alt="Image Description"
                style={{
                  padding: "10%",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        }
        rightContent={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', textAlign: 'center' }}>
            Po północy, w ciemnej pracowni alchemicznej, tajemna postać - Project Manager - przekazuje Ci starożytne zwoje. Na ich stronach znajdują się niewyraźne i chaotyczne zapisy, pełne nieuporządkowanych danych, wymagań projektu, dostępności zasobów i informacji o umiejętnościach członków zespołu. Twoim zadaniem jest przeobrazić ten chaos w złoto - harmonogram zadań, przypisanie zadań i skuteczne zarządzanie projektem.
            Pierwszy krok to zrozumienie i opanowanie sztuki alchemii danych. Musisz nauczyć się, jak przekształcić surowe dane w cenne informacje. Skup się na stworzeniu systemu, który potrafi zinterpretować i usystematyzować te dane, tworząc klarowne i precyzyjne zalecenia.
            Jak prawdziwy alchemik, użyj swoich umiejętności, aby przekształcić te zalecenia w rzeczywiste zadania. Twój system powinien potrafić przypisywać te zadania odpowiednim członkom zespołu, biorąc pod uwagę ich dostępność i umiejętności.
            Twoja ostateczna próba polega na skutecznym zarządzaniu tymi zadaniami. Musisz sprawdzić, czy system jest prawidłowo zarządzany, biorąc pod uwagę terminy i postępy prac.
            Czy masz to, czego trzeba, aby zakończyć ten alchemiczny proces? Czy możesz stać się tym, który zamieni surowe dane w złote informacje i przekształci chaos w harmonię? Przygoda czeka! 
          </div>
        }
      />

      <LeftSection
        leftContent={
          <div style={{ height: "100%", width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", height: "100%", flexDirection: "column", textAlign: "center" }}>
              <span style={{ color: "white", fontWeight: "bold", marginBottom: "10px" }}>Złoty interfejs</span>
              <img
                src="/alchemik_z2.png"
                alt="Image Description"
                style={{
                  padding: "10%",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        }
        rightContent={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', textAlign: 'center'}}>
            Na rozległych, niezbadanych równinach Danych, stajesz przed wyzwaniem o niespotykanej dotąd skali. Jako nasz Alchemik UX/UI, twój cel to wydobycie złota z surowych, nieuporządkowanych danych, tworząc z nich ergonomiczne, przyjazne i intuicyjne interfejsy. Twoja misja wymaga jednak zrozumienia tajemnej sztuki alchemii, przekształcenia potrzeb i oczekiwań użytkowników w prawdziwe skarby.
            Twoja podróż rozpoczyna się od destylacji Eliksiru Empatii. Przez przeprowadzanie empatycznych wywiadów i obserwacji, musisz zdobyć niezbędne surowce - informacje o użytkownikach. Następnie, stwórz Personas - unikalne talizmany, które będą reprezentować ich potrzeby i oczekiwania.
            Następnie, z pomocą starożytnych, alchemicznych składników, które zdobyłeś, musisz stworzyć Runiczne Mapy - wireframes i prototypy Twojego systemu. Te magiczne zapisy powinny ujawnić interakcje użytkownika z systemem, począwszy od logowania, poprzez przeglądanie i przypisywanie zadań, aż po monitorowanie postępów.
            Ostatecznie, przychodzi moment, kiedy musisz wezwać ostateczne narzędzie - Kowadło Alchemika. Wykorzystując swoje umiejętności w UX/UI designie, stwórz ostateczny, dopracowany design interfejsu, który nie tylko olśniewa, ale przede wszystkim jest użyteczny i intuicyjny dla użytkowników.
            Czy jesteś gotów podjąć to wyzwanie? Czy masz odwagę, by przemienić surowe dane w złote interfejsy, podobnie jak alchemicy zamieniali surowce w złoto? Twoja alchemiczna przygoda właśnie się rozpoczyna. Czy jesteś gotów, aby stać się Alchemikiem UX/UI?  
          </div>
        }
      />




      <OneSection
        content={
          <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <span style={{ color: "white", fontWeight: "bold" }}>Zostań sponsorem<br /><br /></span>
            <span style={{ color: "grey" }}>Nasze ścieżki tematyczne "Alchemia Danych" i "Przeobrażenie Kodu" są jak dwa różne eliksiry, każdy z nich oferuje unikalne doświadczenie. "Alchemia Danych" skupia się na odkrywaniu złota wśród surowych danych za pomocą AI, podczas gdy "Przeobrażenie Kodu" zaprasza do tworzenia innowacyjnych rozwiązań AI. Czy jesteś mistrzem kodowania czy dopiero zaczynasz, odkryjesz magię swoich umiejętności na tych ścieżkach.</span>
            <a href={googleFormsUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <button style={{ width: "100%", padding: "8px", marginTop: "16px", color: "black", border: "2px solid grey", borderRadius: "4px", backgroundColor: "#08fc9c" }}>
                Zapisz się na newsletter
              </button>
            </a>
          </div>
        }
      />

      <ThreeSection
        leftContent={<div>Left Content</div>}
        middleContent={<div>Middle Content</div>}
        rightContent={<div>Right Content</div>}
      />

      <Footer />
    </div>
  );
}
