import SFooter from "./style"
import data from '../header/data'

import { facebook, instagram, twitter } from '../../assets/redes'

export default function Footer() {
    return (
        <SFooter>

            <div>
                <span><a href="/">SingUp</a></span>
                <ul>
                    {data.map(data => (
                        <li key={data.id}>
                            <a href={data.link}>{data.text}</a>
                        </li>
                    ))}
                </ul>

                <nav>
                    <a href="#"><img src={instagram} alt="Ícone do instagram" /></a>
                    <a href="#"><img src={facebook} alt="Ícone do facebook" /></a>
                    <a href="#"><img src={twitter} alt="Ícone do twitter" /></a>
                </nav>
            </div>

            <p>© SingUp. Todos os direitos reservados 2023.</p>
    

        </SFooter>
    )
}