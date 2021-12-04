import React from "react";

function ActivityVideo(props) {

return (
  <>
  {
    props.link.map((i)=>{
      return <video src={i.link}></video>
    })
  }
</>
);

}

export default ActivityVideo;