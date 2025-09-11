


const Tags : React.FC<{text: String}> = ({text}) => {
    return (
        <div className="capitalize px-2 py-1 text-xs font-medium bg-zinc-800 border border-zinc-700 text-zinc-300">{text}</div>
    );
}

export default Tags;
