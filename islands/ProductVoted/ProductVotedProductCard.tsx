import { useSignal } from "@preact/signals";

import { allVotes } from "../../sdk/allVotes.tsx";

import Icon from "../../components/horizontalProductCard/Votes/Icon.tsx";
import IconVoted from "../../components/horizontalProductCard/Votes/IconVoted.tsx";

export default function ProductVotedProductCard() {
    const voteNumber = useSignal(0);
    const isVoted = useSignal(false);

    const increment = () => {
        voteNumber.value++;
        allVotes.value++;
        isVoted.value = true;
    }

    return (
        <div onClick={increment} class="flex items-center gap-2 justify-center">
            { isVoted.value == true ? <IconVoted /> : <Icon /> }

            <p>{voteNumber.value}</p>
        </div>
    )
}