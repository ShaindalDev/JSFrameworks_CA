import { LoaderStyle } from "./styles";
export default function Loader() {
    return (
      <LoaderStyle>
        <div className="loaderInfo">
        <p>Loading in products.. Please hold.....</p>
       </div>
          <span className="loader"></span>  
       
        
      </LoaderStyle>
    );
  }