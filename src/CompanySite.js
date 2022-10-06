import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./UseFetch";


const CompanySite = () => {
    const { id } = useParams();
    const {data:skillsite, error, isLoading}=useFetch('  http://localhost:3000/skillsite/'+ id)
    const history = useHistory();
    const handleDeleteSiteSkill = () => {
        fetch('http://localhost:3000/skillsite/' + skillsite.id, {
            method:'DELETE'
        }).then(() => {
          history.push('/')  
        })
    }
    return ( 
        <div className="company-site">
            {isLoading && <div>Wait for few seconds...</div>} 
            {error && <div>{error}</div>} 
            {skillsite && (<section>
                <h2>{skillsite.CompanyTitle}</h2>
                <h3>{skillsite.skill}</h3>
                <div>{skillsite.about}</div>
                <button onClick={handleDeleteSiteSkill} >Erase</button>
            
            </section>
            )} 
            

        </div>
     );
}
 
export default CompanySite;