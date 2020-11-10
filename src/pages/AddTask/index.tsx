import React, { FormEvent, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import { api } from '../../services/api';

import { Container, Form, NameTask, Description, Button, CloseForm } from './styles';

const AddTask: React.FC = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const { goBack } = useHistory();

    const submitTask = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!name || !description) {
            return alert('Preencher dados do Formulario.');
        }

        api.post('/tasks', {
            name,
            description,
            user_id: 1
        }).then(() => {
            goBack();
        });
    }

  return (
      <>
        <Header/>
        <Container>
            <Form onSubmit={submitTask}>
                <NameTask 
                    placeholder="Nome da Tarefa" 
                    value={name} 
                    onChange={text => setName(text.target.value)} 
                />
                <Description 
                    rows={5}
                    cols={50}
                    placeholder="Breve Descrição..." 
                    value={description} 
                    onChange={text => setDescription(text.target.value)} 
                />
                <Button>Adicionar</Button>
                <CloseForm onClick={() => {goBack()}}>
                    Cancelar
                </CloseForm>
            </Form>
        </Container>

      </>
  );
}

export default AddTask;