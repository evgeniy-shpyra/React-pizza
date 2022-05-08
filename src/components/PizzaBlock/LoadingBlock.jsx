import ContentLoader from "react-content-loader"

const LoadingBlock = props => {
    
    return (
        <div className="main__pizza pizza-item">
            <div className="pizza-item__body">
                <ContentLoader
                    speed={2}
                    width={280}
                    height={474}
                    viewBox="0 0 280 474"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <circle cx="140" cy="130" r="130" />
                    <rect x="0" y="275" rx="6" ry="6" width="280" height="24" />
                    <rect x="0" y="311" rx="6" ry="6" width="280" height="100" />
                    <rect x="176" y="445" rx="0" ry="0" width="1" height="21" />
                    <rect x="0" y="477" rx="0" ry="0" width="280" height="48" />
                    <rect x="1" y="434" rx="6" ry="6" width="94" height="29" />
                    <rect x="137" y="427" rx="21" ry="21" width="139" height="44" />
                </ContentLoader>
            </div>
        </div >
    );
};



export default LoadingBlock;