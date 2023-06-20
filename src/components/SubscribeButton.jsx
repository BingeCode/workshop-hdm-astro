//Import the Store first

const SubscribeButton = () =>{

    const countUp = () =>{
        //State should count up with every Click
    }

    return(
        <div class="mt-4">
            <p class="font-semibold text-xl pb-4">Erhalte eine Benachrichtigung bei einem neuen Blog-Eintrag</p>
            <div>
                <input type="text" class="bg-transparent border-b-2 border-bg-base-100 focus:border-pink-500 outline-none py-2 px-4 mr-4"/>
                <button onClick={countUp} class="btn">Subscribe</button>
            </div>
        </div>
    )
}

export default SubscribeButton