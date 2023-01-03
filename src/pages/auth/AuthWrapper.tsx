const AuthWrapper = (props: any) => {
    return (
        <div className="flex flex-wrap h-screen">
            <div className="basis-full md:basis-3/5 h-full flex flex-col justify-center items-center">
                <div className="">
                    <div className="mb-[20px]">
                        <p className="text-[40px] font-bold">{props.FormType}</p>
                        <p className="">How do i get started with retailcity, just watch this space..</p>
                    </div>
                    
                    <div>{props.children}</div>
                </div>
            </div>
            <div className="bg-[green] hidden md:block basis-full md:basis-2/5">
                <p>Hello</p>
            </div>
        </div>
        
    );


}

export default AuthWrapper;