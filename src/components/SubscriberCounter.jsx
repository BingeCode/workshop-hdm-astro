import { countSubscribers } from '../stores/subscribers';
import { useStore } from '@nanostores/react';

const CountSubscribers = () =>{
    const number = useStore(countSubscribers)
    return(
        <div class="pb-6">
            <p class="text-center">👀 Bereits {number} Subscriber</p>
        </div>
    )
}

export default CountSubscribers