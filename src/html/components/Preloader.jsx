export default function Preloader(props) {

    return <>
    <div className={props.windowLoaded && props.craneRendered ? "preloaderBackground" : "preloaderBackground active"}>
        <div className="preloader">
            <div className="lines">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
            </div>
            
            <div className="loading-text">Загрузка</div>
        </div>
    </div>
    </>
}