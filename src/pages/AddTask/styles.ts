import styled from 'styled-components';

export const Container = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

export const Form = styled.form({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50
});

export const NameTask = styled.input({
    height: 38,
    border: 0,
    borderRadius: 4,
    backgroundColor: '#DDD',
    paddingLeft: 10,
    marginBottom: 5
});

export const Description = styled.textarea({
    border: 0,
    borderRadius: 4,
    backgroundColor: '#DDD',
    marginBottom: 10
});

export const Button = styled.button({
    border: 0,
    borderRadius: 10,
    backgroundColor: '#0D9200',
    padding: 15,
    color: '#FFF',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: 10
});

export const CloseForm = styled.span({
    textAlign: 'center',
    border: 0,
    borderRadius: 10,
    backgroundColor: '#B50D00',
    padding: 15,
    color: '#FFF',
    fontWeight: 'bold',
    cursor: 'pointer'
});