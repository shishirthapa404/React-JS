import {
  Bookmark
  
} from "lucide-react";

const card = () => {
  return (
    <div className="card">

        {/* Top Part */}
        <div className="top">
          <img src="https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651105.jpg" alt="image" />
          <button>Save <Bookmark/></button>
        </div>

        {/* Middle Part */}
        <div className="middle">
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div>
                <button>Part Time</button>
                <button>Senior Level</button>
            </div>
        </div>


        {/* Bottom Part*/}
        <div className="bottom">
            <div>
                <h3>$120/hr</h3>
                <span>New York, NY</span>
            </div>
            <button>Apply Now</button>
        </div>

    </div>
  )
}

export default card
