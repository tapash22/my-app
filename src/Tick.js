function Tick(){
    return <div>{ new Date().toLocaleTimeString()}</div>
}

setInterval(Tick,1000);

export default Tick;