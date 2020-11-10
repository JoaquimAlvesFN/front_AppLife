import styled from 'styled-components';

export const Container = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

export const Button = styled.button({
    position: 'absolute',
    bottom: 40,
    right: 40,
    cursor: 'pointer',
    width: 60,
    height: 60,
    borderRadius: 50,
    border: 0,
    backgroundColor: '#0D9200'
});

export const ListTodo = styled.div({
    display: 'flex',
    flexDirection: 'column'
});

export const Description = styled.span({
    color: '#DDD',
    marginRight: 10,
});

export const ListTasks = styled.div({
    marginTop: 20,
    cursor: 'pointer'
});

export const ActionsTask = styled.div({
    display: 'flex', 
    flexDirection: 'row', 
    marginTop: 10, 
    marginBottom: 30
});
