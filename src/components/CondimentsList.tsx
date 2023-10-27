interface CondimentItem {
    condiments: {[name: string] : number}
}

interface CondimentsList {
    data: CondimentItem | null
}

const CondimentsList: React.FC<CondimentsList> = ({ data }) => {
    if (!data) {
      return null;
    }

    

    return (
        <ul className="condiments-list">
            {Object.keys(data).map((condimentName) => (
                
                <li key={condimentName}>
                    <img 
                        className="condiment"
                        src={`../src/assets/condiments/${condimentName}.png`} 
                        alt={condimentName} 
                    />
                    <span>{condimentName} : {data[condimentName]}</span>
                </li>
    ))}
                
        </ul>

    )

}

export default CondimentsList 