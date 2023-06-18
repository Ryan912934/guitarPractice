interface IPageDiv {
    children: React.ReactNode
}

export function PageDiv(props :IPageDiv){


    return <div className="bg-slate-400 m-4 rounded-lg p-4 pb-4 pt-2 ">
        {props.children}
    </div>
}