function Tick(){
    return <div>{ new Date().toLocaleTimeString()}</div>
}

export default Tick;

setInterval(Tick,1000);