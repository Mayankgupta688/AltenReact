export default function StylingComponent(props) {

    var styleObject = {
        headerOneColor: {
            color: props.headerOneColor
        }, headerTwoColor: {
            color: props.headerTwoColor
        }, headerThreeColor: {
            color: props.headerThreeColor   
        }
    }

    return (
        <div>
            <h1 style={styleObject.headerOneColor}>This is Component for React Styling...</h1>
            <h2 style={styleObject.headerTwoColor}>This is The Header Component</h2>
            <h3 style={styleObject.headerThreeColor}>This is Last Element</h3>
        </div>
    )
}