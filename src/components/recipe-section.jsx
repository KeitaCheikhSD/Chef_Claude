import ReactMarkdown from "react-markdown"
export default function recipe_section(props){
    return(
        <section className="suggested-recipe-container">
        <ReactMarkdown>
        {props.text}
        </ReactMarkdown>
    </section>
    )
}