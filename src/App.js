import './App.css';
import { BrowserRouter,Switch, Route } from "react-router-dom";

//Components
import NavBar from './Components/Navbar'
import Footer from './Components/Footer';
import Body from './Components/Body';
import Cards from './Components/Cards';
//Images
import logo_white from './UI/logo_white.png';

function App() {
 
  const data ={
    body:{
      appType: 'BUSINESS WORKFLOW',
      tagLine: 'Get the most efficient UI for your business now!',
      description: 'Hire me to design a clean and modern UI for your product website',
      mainButtonText: 'HIRE ME',
      extraButtonText: 'PORTFOLIO',
    },
    cards:{
      description: 'This package will suit you if want a single page simple website for your product. It will cover only web UI. You can revise the design for 2 times after the initial draft discussion session..',      
    },    
    footer:{
      actionText: 'Start a project with me',
      description: 'Lets discuss our idea for presenting your business to the world in an interacive and efficient way',
      extraActionText: 'HIRE ME',
    }
  }

  return (
    <div className="box-border">
      <div className="flex flex-col">
        
        <BrowserRouter>
          <NavBar logo={logo_white}/>
          
          <Body 
              appType={data.body.appType}
              tagLine={data.body.tagLine}
              description={data.body.description}
              mainButtonText={data.body.mainButtonText}
              extraButtonText={data.body.extraButtonText}
          />
          
          <div className="pt-2 mb-4 text-3xl font-semibold text-center text-blue-800 lg:font-bold">Packages</div>
          <div id="divider" className=" mb-5 ring-2 ring-violet-300 lg:w-1/6 lg:mx-auto "></div> 

          <div className="max-w-sm mb-20 mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <Cards title="Getting Started" headline='Singularity' description={data.cards.description}/>
            <Cards title="Business Workflow" headline='Plurality' description={data.cards.description}/>
            <Cards title="Interactions" headline='Professional' description={data.cards.description}/>
          </div>
            
          <Footer
            actionText={data.footer.actionText}
            description={data.footer.description}
            extraActionText={data.footer.extraActionText}
          />


        </BrowserRouter>

     </div>
    </div>
  );
}

export default App;
