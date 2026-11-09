import {
  Bookmark
  
} from "lucide-react";

const Card = ({data}) => {
  // console.log(data);
  return (
    <div className="card">

        {/* Top Part */}
        <div className="top">
          <img src={data.logo} alt={data.company} />
          <button>Save <Bookmark/></button>
        </div>

        {/* Middle Part */}
        <div className="middle">
            <h3>{data.company} <span>{data.posted}</span></h3>
            <h2>{data.position}</h2>
            <div>
                <button>{data.jobType}</button>
                <button>{data.experience}</button>
            </div>
        </div>


        {/* Bottom Part*/}
        <div className="bottom">
            <div>
                <h3>{data.salary}</h3>
                <span>{data.location}</span>
            </div>
            <button>Apply Now</button>
        </div>

    </div>
  )
}

export default Card
