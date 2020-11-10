import React, { useEffect, useState } from 'react';
import { FaPlus, FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import { api } from '../../services/api';

import { Container, Button, ListTodo, Description, ListTasks, ActionsTask } from './styles';

interface ITasks {
    id: string;
    name: string;
    description: string;
    finish: number;
}

const Home: React.FC = () => {
    const [tasks, setTasks] = useState<ITasks[]>([]);
    const [complete, setComplete] = useState<Boolean>(false);

    
    const getTasks = () => {
        api.get('/tasks')
        .then(response => {
            if(response.status === 200) {
                console.log(response.data);
                setTasks(response.data);
            }
        });
    }
    
    const handleDelete = (id: string) => {
        api.delete(`/tasks/${id}`).then(response => {
            if(response.status == 204) {
                getTasks();
            }
        })
    }

    const handleCompleteTask = () => {
        
    }
    
    useEffect(() => {
        getTasks();
    }, []);

  return (
      <>
        <Header />
        <Container>
            <ListTodo>
                { !tasks ? 

                    <ListTasks>
                        <span>Sem registros de Todo</span>
                    </ListTasks> :

                    tasks.map(task => (
                        <ListTasks onClick={() => {setComplete(!complete)}} key={task.id}>
                            <div>
                                <span>{task.name}</span>
                            </div>
                            <ActionsTask>
                                <Description>{task.description}</Description>
                                <div>
                                    <FaEdit style={{marginRight: 10, cursor: 'pointer'}} size={20} />
                                    <FaTrashAlt onClick={() => {handleDelete(task.id)}} style={{cursor: 'pointer'}} size={20} />
                                </div>
                            </ActionsTask>
                        </ListTasks>
                    ))
                }
            </ListTodo>
            <Link to="/newTask">
                <Button title="Adicionar nova Task">
                    <FaPlus color="#FFF" size={30}/>
                </Button>
            </Link>
        </Container>
      </>
  );
}

export default Home;