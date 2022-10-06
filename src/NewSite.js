import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NewSite = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [companyTitle, setCompanyTitle] = useState('')
    const [skill,setSkill] = useState('')
    const [about, setAbout] = useState('')
    const history= useHistory()
    const handleSubmit =(e) => {
        e.preventDefault() 
        const skillsite = { companyTitle, skill, about };
        // setIsLoading(true)
        fetch(' http://localhost:3000/skillsite', {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(skillsite)
        })
        .then(() => {
           
            setIsLoading(false)
            history.push('/')
        })

    }
    return (  
        <div className="newSite">
            <h2> Add a new SiteSkill</h2>
            <form onSubmit={handleSubmit}>
                <label>Site title:</label>
                <input type='text' value={companyTitle} onChange={(e)=>setCompanyTitle(e.target.value)} required />

                <label>Site skill:</label>
                <input type='text' value={skill} onChange={(e)=>setSkill(e.target.value)} required />

                <label>Site body:</label>
                <textarea value={about} onChange={(e) => setAbout(e.target.value)} required></textarea>
               

                {!isLoading && <button>Add skillsite</button>}
                { isLoading&&  <button disabled>Adding skillsite....</button>}
               
            </form>
       </div> 
    );
}
 
export default NewSite;