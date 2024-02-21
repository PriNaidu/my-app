import react, { useState } from "react"
import Button from "./Button"
import Greet from "./Greet"

const data = [
    {
        id: 1,
        title: "LinkedInModal",
        desc: "This description is for Linkedin",
    },
    {
        id: 2,
        title: "Apollo.AI",
        desc: "This description is for Linkedin",
    },
    {
        id: 3,
        title: "Add CSV List",
        desc: "This description is for Linkedin",
    }
]



const ModalOpen = () => {
 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };
    return (
        <div>
            {data.map((data, index) => (
                <div>
                    <h1>{data.title}</h1>
                    <p> {data.desc} </p>
                    <Button onClick={toggleModal}>
                        Click Me!!
                    </Button>
                    {isModalOpen && <Greet />}
                </div>
            ))}
        </div>
    );
}
export default ModalOpen