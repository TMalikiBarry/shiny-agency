import DefaultPicture from '../../assests/profile.png'
import Card from "../Card";

const freelanceProfiles = [
    {
        name: 'Babs Saba',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
]

export default function Freelances() {

    return (
        <div>
            <div>
                <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </div>
        </div>
    )
}