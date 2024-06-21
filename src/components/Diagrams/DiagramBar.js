import "./DiagramBar.css"
const DiagramBar = (props)=> {
    let barFillLine = "0%";
    if(props.maxValue > 0){
        barFillLine = Math.round((props.value / props.maxValue) *100) + '%'
    }
return (<div className="diagram-bar">
<div className="diagram-bar__inner">
    <div className="diagram-bar__fill" style={{height : barFillLine}}></div>
</div>
<div className="diagram-bar__label"></div>
    </div>)
}
export default DiagramBar;