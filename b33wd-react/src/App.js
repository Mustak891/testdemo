import "./App.css"; 

export default function Appbox(){
     const numbers = [{
       name : "FREE",
       packages: "$0",
       singleuser: "✔ Single User",
       storage: "✔ 5GB Storage",
       projects: "✔ Unlimited Public Projects",
       access: "✔ Community Access",
       privates: "✖ Unlimited Private Projects",
       dedicated: "✖ Dedicated Phone Support",
       subdomain:"✖ Free Subdomain",
       monthly :"✖ Monthly Status Reports"
     },{
      name : "PLUS",
      packages: "$9",
      singleuser: "✔ 5 User",
      storage: "✔ 50GB Storage",
      projects: "✔ Unlimited Public Projects",
      access: "✔ Community Access",
      privates: "✔ Unlimited Private Projects",
      dedicated: "✔ Dedicated Phone Support",
      subdomain:"✔ Free Subdomain",
      monthly :"✖ Monthly Status Reports"
     },{
      name : "PRO",
      packages: "$49",
      singleuser: "✔ Unlimited Users",
      storage: "✔ 150GB Storage",
      projects: "✔ Unlimited Public Projects",
      access: "✔ Community Access",
      privates: "✔ Unlimited Private Projects",
      dedicated: "✔ Dedicated Phone Support",
      subdomain:"✔ Free Subdomain",
      monthly :"✔ Monthly Status Reports"
     }]
     return(
       <div className="box_1" >
         {numbers.map((number) => (
         <Detail name={number.name} packages={number.packages} singleuser={number.singleuser} storage={number.storage} projects={number.projects} access={number.access} 
         privates={number.privates} dedicated={number.dedicated} subdomain={number.subdomain} monthly={number.monthly} />
         ))}
       </div>
     )
}

function Detail({name, packages, singleuser, storage, projects, access, privates, dedicated, subdomain, monthly}){
  return(
    <div className="numbox">
      <div>
        <h3 className="nametop">{name}</h3>
      </div>
      <div>
        <h1 className="namebottom">{packages}<span className="month">/month</span></h1>
      </div>
      <div>
        <h3> {singleuser}</h3>
      </div>
      <div>
        <h3>{storage}</h3>
      </div>
      <div>
        <h3>{projects}</h3>
      </div>
      <div>
        <h3>{access}</h3>
      </div>
      <div>
        <h3>{privates}</h3>
      </div>
      <div>
        <h3>{dedicated}</h3>
      </div>
      <div>
        <h3>{subdomain}</h3>
      </div>
      <div>
        <h3>{monthly}</h3>
      </div>
      <div>
      <button className="button">Button</button>
      </div>
    </div>
  )
}
