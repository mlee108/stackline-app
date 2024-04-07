import data from '../../data/stackline_frontend_assessment_data_2021.json'
import './Details.css'

export default function Details() {
    function renderItemDetails(i: number) {
        return(
            <div className='details'>
                <img src={data[i].image} />
                <h1>{data[i].title}</h1>
                <p className='subtitle'>{data[i].subtitle}</p>
                <div className='tagContainer'>
                    {data[i].tags.map(t => renderTags(t))}
                </div>
            </div>
            
        );
    }

    function renderTags(tag: string) {
        return(
            <div className='tag'>
                <p>{tag}</p>
            </div>
        )
    }

    return (
        <div>
            {renderItemDetails(0)}
        </div>
    )
}