import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
     
   
      en: {
        translations: {
          title: "Coming Soon -AllinOne App Reimagening Travel",
          pre: "Pre-Register and get 250€ off your first booking!",
          des:'Bespoke Travel is only one click away with the upcoming AllinOne APP. Be ready for the Adventure of your Lifetime and on top of that benefit from our Referral System. Pre-Register now and get 10% off your first booking',
          pr:'Pre-Register',
          appf:'App Features',
          appf1:'Booking',
          appf2:'Explore',
          appf3:'Customer Support',
          appfd1:'Easily make a booking for your favorite hotel, restaurant or just contact our VIP-Support and get a tailored offer.',
          appfd2:'Within the App you will be able to explore activities, restaurants and the best hotels nearby with just one click.',
          appfd3:'Our customer support agents are here for you whenever you need them. Get ready for first class service.',
          hiw:'How it Works',
          hiw1:'Download the App',
          hiw2:'Find your next trip',
          hiw3:'Book within the App',
          hiw4:'Enjoy your trip',
          d1:'Explore Dubai, London, Mykonos, Ibiza',
          e1:'Easily find your next Hotel, Restaurant and Activity based on your location',
          e2:'Best Price Guarantee',
          e3:'Available in: Dubai, London, Ibiza',
          e4:'Refer friends and earn up to 10%',
          c1:'Experience First Class Service',
          c2:'Interested in:',
          c3:'Your Name',
          c4:'Your Email',
          c5:'Your Budget',
          c6:'...',
          c7:'Send',
          e1:'Subscribe to stay uptodate and never miss out on exclusive deals from AllinOne',
          e2:'Your email',
          e3:'Subscribe',
          f1:'Company',
          f2:'App',
          f3:'Download',
          f4:'About',
          f5:'Careers',
          f6:'Feature',
          f7:'How it Works',
          f8:'App Screen',
          f9:'Pre-Register',
          f10:'Copyright © 2021 AllinOne. All Rights Reserved.',
        }
      },
      de: {
        translations: {
            title: "Demnächst - AllinOne App Reimagening Travel",
            pre: "Registrieren Sie sich vor und erhalten Sie 250 € Rabatt auf Ihre erste Buchung!",
            des:'Maßgeschneidertes Reisen ist mit der kommenden AllinOne APP nur einen Klick entfernt. Seien Sie bereit für das Abenteuer Ihres Lebens und profitieren Sie darüber hinaus von unserem Empfehlungssystem. Registrieren Sie sich jetzt vor und erhalten Sie 10% Rabatt auf Ihre erste Buchung'
                ,pr:'Vorregistrierung',
                appf:'App-Funktionen',
                appf1:'Buchung',
                appf2:'Erkunden',
                appf3:'Kundenbetreuung',
                appfd1:'Buchen Sie ganz einfach Ihr Lieblingshotel, Restaurant oder kontaktieren Sie einfach unseren VIPSupport und erhalten Sie ein maßgeschneidertes Angebot.',
                appfd2:'Innerhalb der App können Sie Aktivitäten, Restaurants und die besten Hotels in der Nähe mit nur einem Klick erkunden.',
                appfd3:'Unsere Kundendienstmitarbeiter sind für Sie da, wann immer Sie sie brauchen. Machen Sie sich bereit für erstklassigen Service.',
                hiw:'Wie es funktioniert',
                hiw1:'Laden Sie die App herunter',
                hiw2:'Finde deine nächste Reise',
                hiw3:'Buchen Sie in der App',
                hiw4:'Genieße deine Reise',
                d1:'Erkunden Sie Dubai, London, Mykonos, Ibiza',
                e1:'Finden Sie ganz einfach Ihr nächstes Hotel, Restaurant und Ihre nächste Aktivität basierend auf Ihrem Standort',
          e2:'Bestpreisgarantie',
          e3:'Verfügbar in: Dubai, London, Ibiza',
          e4:'Freunde empfehlen und bis zu 10 % verdienen',
            c1:'Erleben Sie erstklassigen Service',
            c2:'Interessiert an:',
            c3:'Dein Name',
            c4:'Ihre E-Mail',
            c5:'Ihr Budget',
            c6:'...',
            c7:'Senden',
            e1:'Abonnieren Sie, um auf dem Laufenden zu bleiben und verpassen Sie nie wieder exklusive Angebote von AllinOne',
            e2:'Ihre E-Mail',
            e3:'Abonnieren',
            f1:'Unternehmen',
            f2:'App',
            f3:'Herunterladen',
            f4:'Über',
            f5:'Karriere',
            f6:'Merkmal',
            f7:'Wie es funktioniert',
            f8:'App-Bildschirm',
            f9:'Vorregistrierung',
            f10:'Copyright © 2021 AllinOne. Alle Rechte vorbehalten.',
            

        }
      },
    },
    fallbackLng: "en",
    lng: 'de', 
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
