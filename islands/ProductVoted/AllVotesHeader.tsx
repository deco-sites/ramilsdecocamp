// import { useSignal } from "@preact/signals";
import { allVotes } from "../../sdk/allVotes.tsx";
import IconAllVotes from "../../components/horizontalProductCard/Votes/IconAllVotes.tsx";

export default function AllVoltesHeader() {
    return (
    <div>
        <IconAllVotes />

        <p>Todos os votos {allVotes.value}</p>
    </div>
    )
}