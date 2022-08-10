//import logo from './logo.svg';
import './App.css';
import PriceCard from './PriceCard';
function App() {
  let data =[{
    plan:"Free",
    price:0,
    user:"Single User",
    isUser:true,
    storage:"5GB Storage",
    isStorage:true,
    publicProject:"Unlimited Public Projects",
    isPublicProject:true,
    communityAccess:"Community Access",
    isCommunityAccess:true,
    privateProject:"Unlimited Private Projects",
    isPrivateProject:false,
    phone:'Dedicated Phone Support',
    isPhone:false,
    subdomain:'Free Subdomain',
    isSubdomain:false,
    statusReport:"Monthly Status Reports",
    isReport:false
  },
  {
    plan:"PLUS",
    price:9,
    user:<b>5 Users</b>,
    isUser:true,
    storage:"50GB Storage",
    isStorage:true,
    publicProject:"Unlimited Public Projects",
    isPublicProject:true,
    communityAccess:"Community Access",
    isCommunityAccess:true,
    privateProject:"Unlimited Private Projects",
    isPrivateProject:true,
    phone:'Dedicated Phone Support',
    isPhone:true,
    subdomain:'Free Subdomain',
    isSubdomain:true,
    statusReport:"Monthly Status Reports",
    isReport:false
  },{
    plan:"PRO",
    price:49,
    user:<b>Unlimited Users</b>,
    isUser:true,
    storage:"150GB Storage",
    isStorage:true,
    publicProject:"Unlimited Public Projects",
    isPublicProject:true,
    communityAccess:"Community Access",
    isCommunityAccess:true,
    privateProject:"Unlimited Private Projects",
    isPrivateProject:true,
    phone:'Dedicated Phone Support',
    isPhone:true,
    subdomain:"Unlimited Free Subdomain",
    isSubdomain:true,
    statusReport:"Monthly Status Reports",
    isReport:true
  }]
  return <>
   <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((element,i)=>(
          <PriceCard  data={element} key={i}/>
        ))
      }
    </div>
  </div>
</section>
  </>  
}

export default App;






{
  data.map((elements,i)=>{
    return <PriceCard data={elements} key={i}/>
  })
}  