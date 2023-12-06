import SHero from "./style"
import { Button, Modal } from '../'
import { primaryColor } from "../style";
import { useState } from "react";

export default function Hero() {

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        console.log(modalOpen);
        setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };



    return (
        <>
            <SHero>
                <div>
                    <h1>Ouça novo álbum e músicas do Post Malone</h1>
                    <h2>Ouça mais de 80 milhões de músicas, lançamentos exclusivos e vídeos musicais.</h2>

                    <div>
                        <Button bg='#595959' border='#595959' txt='Ouça novo Album!' color='#fff' hover='#747474' click={handleOpenModal}/>
                        <Button bg={primaryColor} border={primaryColor} txt='Sobre' color='#fff' hover='#3cb7ff' />
                    </div>
                </div>
            </SHero>
            <Modal isOpen={modalOpen} onClose={handleCloseModal}/>
        </> 
    )
}