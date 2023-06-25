
interface IPagination {
    page: number,
    pageSize: number,
    setPage: (page: number) => void,
    setPageSize: (p: number) => void,
    count: number
}

export function Pagination(props: IPagination) {

    const pages = Math.ceil(props.count / props.pageSize);

    return <div className="flex justify-end  " >
        <div className="grid col-span-1 border-2 border-black rounded-lg p-1 pl-2 pr-2">
            <div className="flex">
                {props.page !== 1 && <div className="pl-1 pr-1 hover:cursor-pointer" onClick={() => { props.setPage(props.page-1) }} >{'<'}</div>}
                {Array(pages).fill(0).map((i, idx) => {
                    const p = idx + 1;
                    if (p === props.page) {
                        return <div className="font-extrabold pl-1 pr-1">{p} </div>
                    }
                    return <div className="pl-1 pr-1 hover:cursor-pointer" onClick={() => { props.setPage(p) }}> {p} </div>
                })}
                {props.page*props.pageSize < props.count && <div className="pl-1 pr-1 hover:cursor-pointer" onClick={() => { props.setPage(props.page+1) }} >{'>'}</div>}
            </div>
            <select className="w-16" value={props.pageSize} onChange={(e) => { props.setPageSize(+e.target.value) }} >
                {[5, 10, 15, 20, 25].map(i => (<option value={i}>{i}</option>))}
            </select>
        </div>
    </div>
}