import Image from "next/image"
import { useTreks } from "../api"
import Navigatsioon from "../components/Navigatsioon"
import styles from "../styles/Treks.module.css"

const Matk = ({ matk }) => {
    return (
        <div className={styles.matk}>
            <div className={styles.pildiKonteiner}>
                <Image
                    alt={`${matk.title} pilt`}
                    src={`https://res.cloudinary.com/demo/image/fetch/${matk.imageUrl}`}
                    quality={100}
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            <span>{matk.title}</span><br />
            <a
                href={`https://www.google.com/maps/@${matk.locationLatitude},${matk.locationLongitude},14z`}
                target="_blank"
            >
                {matk.locationDescription}
            </a>
        </div>
    )
}

const Matkad = () => {
    const { data, error } = useTreks()
    console.log(data);
    if (error) return <div>Viga matkade laadimisel</div>
    if (!data) return <div>Laen sisu...</div>

    return (
        <div className={styles.matkad}>
            {data.map(matk => <Matk key={matk.id} matk={matk} />)}
        </div>
    )
}

export default () => {
    return (
        <div className={styles.pais}>
            <Navigatsioon />
            <Matkad />
        </div>
    )
}