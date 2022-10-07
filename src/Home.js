import SkillsitesList from "./SkillsitesList";
import useFetch from "./UseFetch";

const Home = () => {
    const {data:skillsites,isLoading,error}=useFetch(' http://localhost:8000/skillsite')
    

    return (

        
        <div className="home">
            {error && <div>{error}</div>}
            {skillsites&&<SkillsitesList skillsites={ skillsites} title="Are you looking for life skills?"/>}
            {isLoading&&<div>Few seconds remaining.....</div>}
        </div>
   
        
      
     );
}
 
export default Home ;