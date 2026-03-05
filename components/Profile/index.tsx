import './styles.css';

export type ProfileProps = {
    imageId: string
    name: string
    size?: number
}

export const Profile = ({ imageId, name, size=100 }: ProfileProps) => {
    return (
    <img 
        src={`https://i.imgur.com/${imageId}.jpg`}
        alt={name}
        width={size} 
        height={size}
        className="avatar"
    />
    )
}