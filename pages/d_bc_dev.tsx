import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Footer from "@/components/footer";
import TopSection from "@/components/Top2div";
import MarginDiv from "@/components/Vert1Div";

export default function Home() {
  return (
    <>
      <TopSection
        leftContent={
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
            <img
              src="/ls_logo.png"
              alt="Image Description"
              style={{
                padding: "10%",
                maxWidth: "80%",
                maxHeight: "80%",
                objectFit: "contain",
              }}
            />
          </div>
        }
        rightContent={
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", textAlign: "center" }}>
          Witaj w naszej Letniej Szkole Sztucznej Inteligencji, miejscu, gdzie pasja spotyka się z praktyką. Ta unikalna inicjatywa to nie tylko intensywne tygodnie nauki, ale również platforma dla innowacji, kreatywności i budowania relacji. Praca w zespołach nad prawdziwymi projektami pod okiem doświadczonych ekspertów, pozwoli Ci nie tylko zdobyć praktyczne umiejętności, ale też zrozumieć, jak wygląda praca w świecie sztucznej inteligencji. Dodatkowo, szereg zaplanowanych wyjazdów i aktywności integracyjnych pozwoli Ci nawiązać cenne relacje, które mogą okazać się kluczowe w przyszłej karierze. I pamiętaj, nasza szkoła jest otwarta dla każdego, niezależnie od doświadczenia technicznego. Sztuczna inteligencja to coś więcej niż matematyka i programowanie - to przede wszystkim sposób myślenia, który chcemy Ci pomóc rozwinąć. Dołącz do nas już dziś, ilość miejsc jest ograniczona udział w szkole jest bezpłatny!
          </div>
        }
      />

      <TopSection
        leftContent={
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
            <img
              src="/ls_logo.png"
              alt="Image Description"
              style={{
                padding: "10%",
                maxWidth: "80%",
                maxHeight: "80%",
                objectFit: "contain",
              }}
            />
          </div>
        }
        rightContent={
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", textAlign: "center" }}>
            | **Element**            | **Opis**  |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Lokalizacja**           | Miejsce z odpowiednią przestrzenią dla uczestników do nauki i pracy w grupach. Powinno być wyposażone w sprzęt niezbędny do prowadzenia zajęć i realizacji projektów (np. komputery, tablice, materiały biurowe). |
| **Personel**               | Wykwalifikowany zespół, w skład którego wchodzą instruktorzy, mentorzy, osoba odpowiedzialna za logistykę, koordynator projektów, itp.                                                                   |
| **Program nauki**     | Plan nauczania powinien zawierać wykłady, warsztaty, zajęcia praktyczne i czas na realizację projektów. Zalecane jest uwzględnienie czasu na indywidualne konsultacje i grupowe dyskusje.                                 |
| **Projekty**              | Wybrane projekty, które uczestnicy będą realizować podczas szkoły. Projekt powinien być adekwatny do poziomu uczestników i powinien pozwolić im na stosowanie i rozwijanie nabytych umiejętności.                              |
| **Materiały dydaktyczne** | Podręczniki, notatki, materiały multimedialne, oprogramowanie i inne narzędzia niezbędne do nauki i realizacji projektów.                                                                                                        |
| **Środki finansowe**       | Budżet na pokrycie kosztów wynajmu lokalizacji, wynagrodzeń dla personelu, zakupu materiałów dydaktycznych, catering dla uczestników, itp.                                                                                          |
| **Zgłoszenia**            | System rekrutacyjny dla uczestników. To może obejmować formularze zgłoszeniowe, wywiady, testy predyspozycji czy też inny proces selekcji.                                                                                            |
| **Komunikacja**           | Strategia komunikacji, która może obejmować marketing i promocję, komunikację z uczestnikami przed i w trakcie szkoły, a także feedback po zakończeniu szkoły.                                                                    |

          </div>
        }
      />

            <TopSection
              leftContent={
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
                  <img
                    src="/ls_logo.png"
                    alt="Image Description"
                    style={{
                      padding: "10%",
                      maxWidth: "80%",
                      maxHeight: "80%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              }
              rightContent={
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", textAlign: "center" }}>
                Poniżej znajduje się proponowany opis szkoły oraz sugestie dotyczące grafiki dla każdego z paragrafów:

                | **Sekcja** | **Opis** | **Sugestia Grafiki** |
                |-----|-----|-----|
                | **O szkole** | Nasza Letnia Szkoła to unikalne doświadczenie, które pozwala uczestnikom zanurzyć się w fascynującym świecie sztucznej inteligencji. Przez kilka intensywnych tygodni będziesz miał okazję pracować w zespole nad wymagającymi projektami, zdobywać praktyczne umiejętności i uczyć się od doświadczonych ekspertów. | Grafika z logo szkoły lub zdjęcie uczestników pracujących nad projektem. |
                | **Program** | Program naszej szkoły jest skrojony na miarę potrzeb współczesnego świata. Obejmuje on zarówno teorię, jak i praktyczne projekty z zakresu sztucznej inteligencji, a także warsztaty dotyczące efektywnej komunikacji, zarządzania projektami i kreatywnego myślenia. | Infografika z przeglądem programu lub harmonogramem szkoły. |
                | **Projekty** | Podczas szkoły będziesz miał okazję pracować nad prawdziwymi projektami z zakresu sztucznej inteligencji. Projekty te będą wymagały od Ciebie nie tylko zastosowania zdobytej wiedzy, ale również kreatywnego myślenia i pracy zespołowej. | Zdjęcia lub grafiki przedstawiające projekty, które uczestnicy mogą realizować. |
                | **Zasady rekrutacji** | Rekrutacja do naszej szkoły opiera się na formularzu zgłoszeniowym oraz rozmowie kwalifikacyjnej. Szukamy osób z pasją do nauki, gotowych podjąć wyzwanie i zanurzyć się w świecie sztucznej inteligencji. | Grafika pokazująca proces rekrutacji, np. infografika. |
                | **Opinie uczestników** | Uczestnicy naszej szkoły doceniają jej intensywność, praktyczne podejście do nauki oraz możliwość pracy nad prawdziwymi projektami. Przeczytaj, co mówią o nas poprzedni uczestnicy! | Zdjęcia i cytaty od poprzednich uczestników. |

                </div>
              }
            />

            <TopSection
              leftContent={
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
                  <img
                    src="/ls_logo.png"
                    alt="Image Description"
                    style={{
                      padding: "10%",
                      maxWidth: "80%",
                      maxHeight: "80%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              }
              rightContent={
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", textAlign: "center" }}>
               **Zapraszamy do udziału w Letniej Szkole Centrum SI!**

               Niezależnie od Twojego kierunku studiów czy specjalizacji, Letnia Szkoła Centrum SI oferuje wyjątkowe doświadczenie zdobywania wiedzy i umiejętności z obszaru sztucznej inteligencji. Współpracujemy z UMCS, KUL i Politechniką Lubelską, które udostępniają swoich pracowników i infrastrukturę, aby zapewnić tygodniowe intensywne warsztaty. To nie tylko okazja do nauki i zdobycia praktycznych umiejętności, ale także szansa na zainicjowanie współpracy z czołowymi instytucjami edukacyjnymi w naszym regionie.

               Dołączając do naszej Letniej Szkoły, masz szansę stać się częścią rozwoju dynamicznego sektora sztucznej inteligencji w Lublinie i przyczynić się do powstania ogólnopolskiego ośrodka w tej dziedzinie. Dodatkowo, uczelnie współpracujące z nami zyskują możliwość promowania się wśród szerokiej grupy potencjalnych studentów i naukowców, budując silniejsze relacje z lokalnymi społecznościami i przemysłem.

               Nie przegap tej wyjątkowej okazji! Sprawdź naszą ofertę, poznaj różnorodność możliwości, które oferuje sztuczna inteligencja i dołącz do nas w tym fascynującym i dynamicznym świecie.

Opinie uczestników** | Uczestnicy naszej szkoły doceniają jej intensywność, praktyczne podejście do nauki oraz możliwość pracy nad prawdziwymi projektami. Przeczytaj, co mówią o nas poprzedni uczestnicy! | Zdjęcia i cytaty od poprzednich uczestników. |

                </div>
              }
            />

            <TopSection
              leftContent={
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
                  <img
                    src="/ls_logo.png"
                    alt="Image Description"
                    style={{
                      padding: "10%",
                      maxWidth: "80%",
                      maxHeight: "80%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              }
              rightContent={
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", textAlign: "center" }}>
                INFORMACJA DLA URZĘDNIKÓW

                Zgadza się, włączenie doświadczonych pracowników z Urzędu Miasta do programu Letniej Szkoły Centrum SI dostarczy uczestnikom niezwykle cennej perspektywy na praktyczne zastosowania sztucznej inteligencji. Poniżej przedstawiam proponowany proces przygotowania przez nich prezentacji:

                Wybór Tematu: Każdy pracownik wybiera konkretny obszar swojej pracy lub problem, który jest istotny dla jego departamentu, i na którym skupi się jego prezentacja.

                Zgromadzenie Informacji: Pracownik zbiera wszystkie istotne informacje na temat wybranego obszaru lub problemu. Powinien uwzględnić zarówno ogólną charakterystykę, jak i szczegółowe aspekty, które mogą być ważne dla zrozumienia kontekstu.

                Struktura Prezentacji: Prezentacja powinna zawierać wstęp, rozwinięcie i zakończenie. Wstęp powinien przedstawić temat i problem, rozwinięcie powinno omówić problem w większych szczegółach, a zakończenie powinno podsumować prezentację i ewentualnie zaproponować możliwe rozwiązania.

                Tworzenie Slajdów: Pracownik tworzy slajdy dla prezentacji, które pomogą uczestnikom lepiej zrozumieć przedstawiane treści. Slajdy powinny być jasne, zwięzłe i zawierać kluczowe punkty z prezentacji.

                Próba Prezentacji: Pracownik powinien przeprowadzić próbną prezentację, aby upewnić się, że wszystko jest zrozumiałe i przejrzyste. Może to być przed innymi członkami zespołu lub mentorami.

                Przygotowanie do Pytań i Dyskusji: Pracownik powinien być przygotowany na pytania i dyskusję po prezentacji. To może wymagać dodatkowego researchu i przygotowania na najczęściej zadawane pytania.

                Podczas Letniej Szkoły, pracownicy będą pełnili rolę mentorów dla grup projektowych, udzielając porad i wskazówek na temat swojego obszaru pracy i problemów, które mogą być rozwiązane za pomocą sztucznej inteligencji. To z pewnością dostarczy uczestnikom cennego doświadczenia i praktycznej wiedzy.

                </div>
              }
            />

            <TopSection
              leftContent={
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
                  <img
                    src="/ls_logo.png"
                    alt="Image Description"
                    style={{
                      padding: "10%",
                      maxWidth: "80%",
                      maxHeight: "80%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              }
              rightContent={
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", textAlign: "center" }}>
                Program

                S

                </div>
              }
            />



            <TopSection
              leftContent={
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
                  <img
                    src="/ls_logo.png"
                    alt="Image Description"
                    style={{
                      padding: "10%",
                      maxWidth: "80%",
                      maxHeight: "80%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              }
              rightContent={
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", textAlign: "center" }}>
                INFORMACJA DLA UCZELNI

                Szanowni Państwo,

Z ogromną radością pragniemy zaprosić Was do współpracy w ramach naszej Letniej Szkoły Centrum SI, która stanowi platformę edukacyjną dla studentów z różnych dziedzin, zainteresowanych sztuczną inteligencją. Dzięki naszej współpracy z UMCS, KUL i Politechniką Lubelską, uczestnicy programu będą mieli szansę uczestniczyć w intensywnych tygodniowych warsztatach prowadzonych przez specjalistów z Waszych uczelni.

Wierzymy, że taka współpraca przyniesie korzyści dla wszystkich stron. Dla uczelni to szansa na promocję wśród młodych, ambitnych ludzi oraz możliwość włączenia się w tworzenie ogólnopolskiego ośrodka sztucznej inteligencji. Dla studentów to nieoceniona możliwość zdobycia praktycznych umiejętności i wiedzy z obszaru sztucznej inteligencji.

Dodatkowo, zamierzamy nawiązać ścisłą współpracę z Urzędem Miasta, gdzie doświadczeni pracownicy poszczególnych departamentów będą pełnili rolę mentorów dla grup projektowych. Ich praktyczna wiedza i doświadczenie, połączone z akademickim podejściem do nauki, z pewnością przyczynią się do stworzenia unikalnego, praktycznego programu edukacyjnego.

Jesteśmy przekonani, że nasza inicjatywa pomoże Lublinowi stać się czołowym ośrodkiem sztucznej inteligencji w Polsce, promując region jako miejsce innowacji i dynamicznego rozwoju. Wierzymy, że nasza współpraca będzie istotnym krokiem w kierunku tego celu.

Czekamy na Państwa pozytywną odpowiedź i gotowi jesteśmy odpowiedzieć na wszelkie pytania dotyczące naszej propozycji współpracy.

Z poważaniem,

[Nazwa twojej organizacji]

                </div>
              }
            />

      <Footer />
    </>
  );
}



