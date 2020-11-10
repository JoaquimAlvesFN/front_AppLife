import styled from 'styled-components';

export const Container = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

export const Form = styled.form({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 100
});

export const Input = styled.input({
    border: 0,
    backgroundColor: '#DDD',
    marginBottom: 5,
    height: 38,
    width: 200,
    borderRadius: 8,
    paddingLeft: 10
});

export const Button = styled.button({
    border: 0,
    backgroundColor: '#0D9200',
    marginBottom: 5,
    height: 38,
    width: 200,
    borderRadius: 8,
    paddingLeft: 10,
    color: '#FFF',
    fontWeight: 'bold',
    
});