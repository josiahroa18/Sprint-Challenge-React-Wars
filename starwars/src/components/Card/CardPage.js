import React, { useState, useEffect } from 'react';
import CardHolder from './Card';
import axios from 'axios';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

function CardPage(props){
    const [cData, setCData] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/?page=${props.page}`)
        .then(res => {
            console.log(res.data.results);
            setCData(res.data.results);
        })
        .catch(err => {
            console.log(err);
        })
    }, [props.page])

    return (
        <Container>
            {cData.map((character, index) => {
                return <CardHolder
                    key={index}
                    name={character.name}
                    color={character.eye_color}
                    homeworld={character.homeworld}
                />
            })}
        </Container>
    );
}

export default CardPage;