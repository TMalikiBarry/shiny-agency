import Card from "../Card";
import styled from "styled-components";
import colors from "../../Utils/Style/colors";
import {useEffect, useState} from "react";
import {Loader} from "../../Utils/Style/Atom";

/*const freelanceProfiles = [
    {
        name: 'Babs Saba',
        jobTitle: 'Devops',
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
    },
    {
        name: 'Askia KAFFA',
        jobTitle: 'Développeur Mobile',
    },
]*/

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`


export default function Freelances() {
    const [freelancers, setFreelancers] = useState({});
    const [isDataLoading, setDataLoading] = useState(true)

    useEffect(() => {
        // fetchData()
        fetch(`http://localhost:8000/freelances`)
            .then((response) => response.json()
                .then(({freelancersList}) => {
                    console.log(freelancersList)
                    setFreelancers(freelancersList);
                    setDataLoading(false);
                })
                .catch((error) => {
                    console.error('ERREUR Freelancers ', error);
                    setDataLoading(true)
                }))

    }, []);

    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            {isDataLoading ?
                <LoaderWrapper>
                    <Loader/>
                </LoaderWrapper> :
                <CardsContainer>
                    {freelancers.map((profile, index) => (
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.job}
                            picture={profile.picture}
                            title={profile.name}
                        />
                    ))}
                </CardsContainer>}

        </div>
    )
}