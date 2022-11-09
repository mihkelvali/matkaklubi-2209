import { useTreks } from "../../api"
import { AdminPais } from "."
import { useState } from "react"

const Matkad = ({ setValitudMatk }) => {
    const { data, error } = useTreks()
    if (error) return <div>Viga matkade laadimisel</div>
    if (!data) return <div>Laen sisu...</div>

    return (
        <div style={{ flexShrink: 0 }}>
            {data.map(matk => (
                <a
                    key={matk.id}
                    style={{ marginBottom: 10, display: 'block' }}
                    onClick={() => setValitudMatk(matk)}
                >{matk.title}</a>
            ))}
        </div>
    )
}

const MatkaDetail = ({ valitudMatk, setValitudMatk }) => {
    console.log(valitudMatk)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 1 }}>
            <input placeholder="Pealkiri" value={valitudMatk.title || ''} onChange={e => setValitudMatk(vanaMatk => ({ ...vanaMatk, title: e.target.value }))} />
            <input placeholder="Kirjeldus" value={valitudMatk.description || ''} onChange={e => setValitudMatk(vanaMatk => ({ ...vanaMatk, description: e.target.value }))} />
            <input placeholder="Algab" value={valitudMatk.startsAt || ''} onChange={e => setValitudMatk(vanaMatk => ({ ...vanaMatk, startsAt: e.target.value }))} />
            <input placeholder="Lõpeb" value={valitudMatk.endsAt || ''} onChange={e => setValitudMatk(vanaMatk => ({ ...vanaMatk, endsAt: e.target.value }))} />
            <input placeholder="Asukoha kirjeldus" value={valitudMatk.locationDescription || ''} onChange={e => setValitudMatk(vanaMatk => ({ ...vanaMatk, locationDescription: e.target.value }))} />
            <input placeholder="Hind" value={valitudMatk.price || ''} onChange={e => setValitudMatk(vanaMatk => ({ ...vanaMatk, price: e.target.value }))} />
            <input placeholder="Pildi URL" value={valitudMatk.imageUrl || ''} onChange={e => setValitudMatk(vanaMatk => ({ ...vanaMatk, imageUrl: e.target.value }))} />
            <button onClick={() => { }}>Salvesta</button>
        </div>
    )
}

const MatkadAdmin = () => {
    const [valitudMatk, setValitudMatk] = useState(null)

    return (
        <div style={{ padding: 30 }}>
            <h1>Matkad admin</h1>
            <AdminPais />
            <div style={{ marginTop: 20 }}>
                <a onClick={() => setValitudMatk({})}>Loo uus matk</a>
            </div>
            <div style={{ display: 'flex', paddingTop: 20, gap: 20 }}>
                <Matkad setValitudMatk={setValitudMatk} />
                {valitudMatk ? <MatkaDetail valitudMatk={valitudMatk} setValitudMatk={setValitudMatk} /> : null}
            </div>
        </div>
    )
}

export default MatkadAdmin