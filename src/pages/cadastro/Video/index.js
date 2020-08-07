import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField  from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo(){
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Video Padrão',
    url: 'https://www.youtube.com/watch?v=bvOgTtZriLo&t=7s',
    categoriaId: 'Músicas',
  }); 

    return (
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>

        <form onSubmit={(event) => {
          event.preventDefault();       

          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: 1,
          }).then(() => {
            console.log('CADASTRADO COM SUCESSO!');
            history.push('/');
          });

        }}>

        <FormField
          label="Titulo do vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoriaId}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>

        </form>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link> 
      </PageDefault>
    )
  }

  export default CadastroVideo;