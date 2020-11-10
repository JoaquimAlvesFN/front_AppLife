import styled from 'styled-components';

export const Container = styled.div({
    display: 'flex',
    backgroundColor: '#DDD',
    justifyContent: 'space-between',
    padding: 15
});

export const Title = styled.span({
    fontFamily: 'sans-serif',
    fontWeight: 'bold'
});

export const ButtonLogout = styled.button({
    border: 0,
    background: 'none',
    cursor: 'pointer'
})