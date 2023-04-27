import styled from 'styled-components';
import CardRecomenda from '../CardRecomenda';
import { Titulo } from '../Titulo';
import { livros } from './dadosUltimosLancamentos';
import imagemLivro from '../../imagens/livro2.png';

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

export default function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#eb9b00" tamanhoFonte="36px">
        Últimos Lançamentos
      </Titulo>
      <NovosLivrosContainer>
        {livros.map(livro => (
          <img src={livro.src} alt="livro" />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por..."
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google."
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}
