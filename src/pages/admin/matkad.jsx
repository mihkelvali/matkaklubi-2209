import { useTreks, createTrek, updateTrek, deleteTrek } from "../../api"
import { AdminPais } from "."
import { useState } from "react"

import { MATKA_PARAMEETRID } from '../../constants'

const Matkad = ({ setValitudMatk }) => {
    const { data, error } = useTreks()
    if (error) return <div>Viga matkade laadimisel</div>
    if (!data) return <div>Laen sisu...</div>

    return (
        <div style={{ flexShrink: 0 }}>
            {data.map(matk => (
                <a
                    key={matk.id}
                    style={{
                        marginBottom: 10,
                        display: 'block',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        textDecorationColor: 'blue',
                        color: 'blue'
                    }}
                    onClick={() => setValitudMatk(matk)}
                >{matk.title}</a>
            ))}
        </div>
    )
}

const MatkaMuutmiseInput = ({ kohahoidja, nimi, valitudMatk, setValitudMatk }) => (
    <input
        placeholder={kohahoidja}
        value={valitudMatk[nimi] || ''}
        style={{
            padding: 5,
            width: 300,
            marginBottom: 5
        }}
        onChange={e => setValitudMatk(
            vanaMatk => ({ ...vanaMatk, [nimi]: e.target.value })
        )}
    />
)

const MatkaDetail = ({ valitudMatk, setValitudMatk }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 1 }}>
            {MATKA_PARAMEETRID.map(
                ({ kohahoidja, nimi }) =>
                    <MatkaMuutmiseInput
                        kohahoidja={kohahoidja}
                        nimi={nimi}
                        valitudMatk={valitudMatk}
                        setValitudMatk={setValitudMatk}
                    />
            )}
            <button
                onClick={() => {
                    if (!valitudMatk.id) {
                        createTrek(valitudMatk);
                        setValitudMatk({});
                    } else {
                        updateTrek(valitudMatk);
                    }
                }}
                style={{
                    marginBottom: 10,
                    borderRadius: 5,
                    paddingTop: 5,
                    paddingBottom: 5,
                }}
            >Salvesta</button>
            {valitudMatk.id
                ? <button
                    onClick={() => {
                        deleteTrek(valitudMatk.id);
                        setValitudMatk(null);
                    }}
                    style={{
                        color: '#fff',
                        backgroundColor: '#dc3545',
                        border: 0,
                        borderRadius: 5,
                        paddingTop: 5,
                        paddingBottom: 5,
                    }}
                >Kustuta matk</button>
                : null
            }
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
                <button onClick={() => { setValitudMatk({}) }}>Loo uus matk</button>
            </div>
            <div style={{ display: 'flex', paddingTop: 20, gap: 20 }}>
                <Matkad setValitudMatk={setValitudMatk} />
                {valitudMatk ? <MatkaDetail valitudMatk={valitudMatk} setValitudMatk={setValitudMatk} /> : null}
            </div>
        </div>
    )
}

export default MatkadAdmin