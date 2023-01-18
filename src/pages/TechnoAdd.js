export default function TechnoAdd() {
    return (
        <div className="technoAdd">
            <h1>Add a techno</h1>
            <div>
                <form>
                    <label htmlFor="techno-name">Name:</label>
                    <br />
                    <input type="text" name="techno-name" id="techno-name"></input>
                    <br />
                    <label htmlFor="techno-name">Category:</label>
                    <br />
                    <select name="techno-category" id="techno-category">
                        <option value="">select a category</option>
                        <option value="front">fraont</option>
                        <option value="back">back</option>
                        <option value="full stack">Full statck</option>
                        <option value="autre">autre</option>
                    </select>
                    <br />
                    <input type="submit" value="Add techno"></input>
                    <br />
                    <label htmlFor="techno-description">Description:</label>
                    <textarea name="techno-description" id="techno-description"></textarea>
                </form>
            </div>
        </div>)
}