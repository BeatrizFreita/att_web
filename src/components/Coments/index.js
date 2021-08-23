import { Container } from "./styles";

function Coments({ coment }) {
    return(
        <Container>
            <header>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                <div>
                    <strong>
                        por {coment.author.name}
                    </strong>
                    <p>
                        em {coment.created_at} às 8:23
                    </p>
                </div>
            </header>
            <p>{coment}</p>
        </Container>
    );
}