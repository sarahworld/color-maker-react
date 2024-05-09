import React,{useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {

    const [boxes, setBoxes] = useState([])

    const create = newBox => {
        console.log(newBox)
        setBoxes(boxes => [...boxes, newBox])
    }


    // return (
    //     <div>
    //         <div>{boxes ? (
    //             boxes.map(box => {
    //     <Box
    //         id={box.id}
    //         key={box.id}
    //         width={box.width}
    //         height={box.height}
    //         backgroundColor={box.backgroundColor}
            
    //     />
    // })): (<div>NO BOX</div>)}</div>
    //         <NewBoxForm createBox={create}/>
    //     </div>
    // )

    const boxComponents = boxes.map(box => (
        <Box
          key={box.id}
          id={box.id}
          width={box.width}
          height={box.height}
          backgroundColor={box.backgroundColor}
        />
      ));
    
      return (
        <div>
          <NewBoxForm createBox={create} />
          {boxComponents}
        </div>
      );

}

export default BoxList;