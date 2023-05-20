


export function Header() {
    return(
        <div className="flex flex-row p-2 border-b-2 border-b-green-500">
            <div className="basis-1/3 px-4">
               Logo 
            </div>
            <div className="basis-1/3 text-center">
                Remixdle
            </div>
            <div className="basis-1/3 text-end px-4">
                <button className="rounded-xl bg-white text-consolvis md:w-max md:px-12 px-6" >
                    Login
                </button>
            </div>
        </div>
    )
}