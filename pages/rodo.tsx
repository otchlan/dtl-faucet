import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
   <div
     style={{
       width: "96%",
       margin: "16px auto",
       padding: "8px",
       textAlign: "center",
       color: "grey",
     }}
   >
     <p>
       Administratorem Twoich danych osobowych jest deeptechlabs. Poniżej znajdziesz wszelkie niezbędne informacje dotyczące przetwarzania Twoich danych osobowych w związku z realizacją usługi (wskazujemy podstawę do przetwarzania danych).
     </p>
     <br />
     <p>
       1. Dane kontaktowe inspektora ochrony danych osobowych Barbara Szymańska, bszymanska@deeptechlabs.pl.
     </p>
     <br />
     <p>
       2. Przedstawicielem Administratora jest Barbara Szymańska, bszymanska@deeptechlabs.pl.
     </p>
     <br />
     <p>
       3. Dane osobowe przetwarzane są w celu komunikacji, w tym do wysyłania newslettera, zaproszeń na wydarzenia, informacji o aktualnościach i promocjach, a także do komunikacji związanej z obsługą klienta i realizacją usług. Przetwarzanie danych może obejmować takie działania jak: identyfikacja, gromadzenie, zapisywanie, przechowywanie, przetwarzanie, zmiana, dostęp i usuwanie. Wszystko zgodnie z obowiązującymi przepisami o ochronie danych osobowych.(w tym miejscu podajemy cel przetwarzania danych) na podstawie art. 13 i 14 (Rozporządzenie Parlamentu Europejskiego i Rady z dnia 27 kwietnia 2016 r.).
     </p>
     <br />
     <p>
       4. Dane osobowe będą przechowywane przez okres 5 lat.
     </p>
     <br />
     <p>
       5. Po zakończeniu przetwarzania danych osobowych w pierwotnym celu, dane będą przetwarzane w celu ewentualnego dochodzenia roszczeń. Oraz wysłany będzie mail z aktualizacją, w przypadku braku odpowiedzi na wysłany mail, dane będą usunięte w ciągu 3 miesięcy.
     </p>
     <br />
     <p>
       6. Podanie danych jest dobrowolne.
     </p>
     <br />
     <p>
       7. Twoje dane osobowe nie będą przekazywane żadnym zewnętrznym odbiorcom.
     </p>
     <br />
     <p>
       8. Jako administrator Twoich danych, zapewniamy Ci prawo dostępu do Twoich danych, możesz je również sprostować, żądać ich usunięcia lub ograniczenia ich przetwarzania. Możesz także skorzystać z uprawnienia do złożenia wobec Administratora sprzeciwu wobec przetwarzania Twoich danych oraz prawa do przenoszenia danych do innego administratora danych. W przypadku wyrażenia dobrowolnej zgody, przysługuje Ci prawo cofnięcia zgody na przetwarzanie danych w dowolnym momencie co nie wpływa na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem. Informujemy także, że przysługuje Ci prawo wniesienia skargi do organu nadzorującego przestrzeganie przepisów ochrony danych osobowych.
     </p>
     <br />
     <p>
       9. Twoje dane osobowe mogą być przetwarzane w sposób zautomatyzowany, w tym z wykorzystaniem profilowania. Proces ten polegał będzie na dobraniu i dzieleniu się przez zepół deeptechlabs odpowiednią dobraną dla Ciebie treścią.
     </p>
     <br />
    </div>


      <motion.div
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* Other components or content */}
      </motion.div>

      <Footer />
    </>
  );
}
