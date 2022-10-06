import { Link } from "react-router-dom";

const SkillsitesList = ({skillsites},{title}) => {
   


    return (
        <div className="site-list">
            <h1>{ title}</h1>
            {skillsites.map((skillsite) => (
                <div className="skillsite-preview" key={skillsite.id}>
                    <Link to ={`/skillsites/${skillsite.id}`}>
                    <h2>{skillsite.companyTitle}</h2>
                    <h3>{skillsite.skill}</h3>
                
                    </Link>
              </div>
            ))

            }
            
    </div>
  
    );
}
 
export default SkillsitesList;
