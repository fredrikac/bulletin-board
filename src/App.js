import './App.css';
import BulletinBoard from "./components/BulletinBoard";

function App() {

  let data = [
    {question: "Vad är tre fördelar med att använda React?",
  answer: "En av de största fördelarna med React är att man skapar komponenter som är återanvändbara, vilket ju är helt i linje med DRY. Det gör att det går snabbt att utveckla appar som är relativt enkla att underhålla. Prestanda är en annan fördel - eftersom React skapar en virtuell DOM där endast den aktuella komponenten renderas/uppdateras så laddas React-appar extremt snabbt. Sist men inte minst så är React är otroligt populärt och används av många, vilket innebär att det finns bra dokumentation och ett stort community." 
    },
    {question: "Vad betyder Single Page Application och vad skiljer det från en vanlig webbplats?",
  answer: "Single page applications (SPA) är webbsidor/applikationer som hämtas en gång, och sedan renderas innehållet dynamiskt när användaren interagerar med sidan. Istället för att redirecta användaren till en annan sida som måste laddas om, så skrivs innehållet ut dynamiskt, vilket går mycket snabbare. Det gör att sidan ger ett sömlöst intryck."
    },    
    {question: "Nämn tre skillnader mellan React och Angular",
  answer: "React är ett bibliotek som skapats och underhålls av Facebook. Det används tillsammans med andra bibliotek och moduler och skapar upp en virtuell DOM med hjälp av komponenter. Angular är ett fullvärdigt ramverk byggt av Google och använder sig av en traditionell DOM. Medan React använder sig av one-way data binding så kan Angular hantera two-way binding. Det gör att applikationer byggda i Angular kan bli mycket komplexa. Internet verkar vara överens om att React är förhållandevis enkelt att lära sig (och därför lättillgängligt för juniora utvecklare), medan Angular är mycket mer komplext med en brant inlärningskurva."
    }
  ];


  return (
    <div className="App App-header">
      <BulletinBoard posts={data} />
    </div>
  );
}

export default App;
